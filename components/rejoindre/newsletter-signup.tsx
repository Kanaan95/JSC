"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function NewsletterSignup() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: connect to a real mailing list provider before launch (e.g. a
    // Resend audience or a Netlify Forms submission). This MVP only confirms
    // client-side.
    setIsSubscribed(true);
  }

  if (isSubscribed) {
    return (
      <p className="text-sm font-medium text-primary">
        Merci, ton inscription à la newsletter est confirmée !
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:max-w-md sm:flex-row sm:items-end"
    >
      <div className="flex flex-1 flex-col gap-2">
        <Label htmlFor="newsletter-email">Email</Label>
        <Input
          id="newsletter-email"
          type="email"
          required
          placeholder="ton@email.com"
        />
      </div>
      <Button type="submit">Je m&apos;abonne</Button>
    </form>
  );
}
