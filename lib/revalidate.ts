/**
 * Calls Next.js's revalidatePath, but no-ops instead of throwing when not
 * running inside a Next.js request/render context (e.g. the standalone
 * seed script). Payload's collection/global hooks run in both contexts.
 */
export async function safeRevalidatePath(
  path: string,
  type?: "layout" | "page",
): Promise<void> {
  try {
    const { revalidatePath } = await import("next/cache");
    revalidatePath(path, type);
  } catch {
    // Not running inside Next.js — nothing to revalidate.
  }
}
