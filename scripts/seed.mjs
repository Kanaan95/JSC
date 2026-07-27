#!/usr/bin/env node
/**
 * Orchestrator for `npm run seed`.
 *
 * The actual seed logic lives in lib/seed.ts and runs inside a Next.js
 * request (via POST /api/seed) — Payload's Local API and the
 * revalidatePath calls in our collection/global hooks both need Next's
 * own runtime, which isn't available from a standalone Node/tsx process
 * (see /memories/repo/payload-cms-integration.md for the Node 24 details).
 *
 * This script starts a temporary `next dev` server if one isn't already
 * running, hits the seed endpoint, and shuts down any server it started
 * itself (a server you already had running is left alone).
 */
import { spawn } from "node:child_process";

const PORT = process.env.PORT || 3000;
const BASE_URL = `http://localhost:${PORT}`;
const SEED_SECRET = process.env.PAYLOAD_SECRET;

if (!SEED_SECRET) {
  console.error(
    "PAYLOAD_SECRET is not set. Run with: node --env-file=.env scripts/seed.mjs",
  );
  process.exit(1);
}

async function isServerUp() {
  try {
    await fetch(BASE_URL, { method: "GET" });
    return true;
  } catch {
    return false;
  }
}

async function waitForServer(timeoutMs = 60_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (await isServerUp()) {
      return true;
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  return false;
}

async function runSeedRequest() {
  const res = await fetch(`${BASE_URL}/api/seed`, {
    method: "POST",
    headers: { "x-seed-secret": SEED_SECRET },
  });
  const body = await res.json();

  if (!res.ok) {
    throw new Error(`Seed request failed (${res.status}): ${JSON.stringify(body)}`);
  }

  return body;
}

async function main() {
  const alreadyRunning = await isServerUp();
  let devServer = null;

  if (!alreadyRunning) {
    console.log(`No server detected on port ${PORT} — starting "next dev"...`);
    devServer = spawn("npx", ["next", "dev", "-p", String(PORT)], {
      stdio: "ignore",
      detached: true,
    });

    const ready = await waitForServer();
    if (!ready) {
      devServer.kill();
      console.error("Timed out waiting for the dev server to start.");
      process.exit(1);
    }
  }

  try {
    console.log("Seeding...");
    const result = await runSeedRequest();
    console.log(JSON.stringify(result, null, 2));
  } finally {
    if (devServer) {
      console.log("Stopping the temporary dev server...");
      process.kill(-devServer.pid);
    }
  }
}

main().catch((error) => {
  console.error("Seed failed:", error.message);
  process.exit(1);
});
