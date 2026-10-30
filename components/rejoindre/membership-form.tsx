"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { PoleDoc } from "@/lib/payload-types";

const membershipSchema = z.object({
  firstName: z.string().trim().min(1, "Le prénom est requis."),
  lastName: z.string().trim().min(1, "Le nom est requis."),
  age: z
    .number({ error: "Merci d'indiquer un âge valide." })
    .int("L'âge doit être un nombre entier.")
    .min(1, "Merci d'indiquer un âge valide.")
    .max(120, "Merci de vérifier l'âge saisi."),
  email: z
    .string()
    .trim()
    .min(1, "L'email est requis.")
    .email("Merci d'indiquer un email valide."),
  phone: z.string().trim().optional(),
  poles: z.array(z.string()).default([]),
  message: z.string().trim().optional(),
});

type MembershipFormInput = z.input<typeof membershipSchema>;
type MembershipFormOutput = z.output<typeof membershipSchema>;

interface MembershipFormProps {
  poles: PoleDoc[];
  defaultPole?: string;
  defaultMessage?: string;
}

export function MembershipForm({
  poles,
  defaultPole,
  defaultMessage,
}: MembershipFormProps) {
  const [confirmedFirstName, setConfirmedFirstName] = useState<string | null>(
    null
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<MembershipFormInput, unknown, MembershipFormOutput>({
    resolver: zodResolver(membershipSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      poles: defaultPole ? [defaultPole] : [],
      message: defaultMessage ?? "",
    },
  });

  const onSubmit: SubmitHandler<MembershipFormOutput> = async (values) => {
    // TODO: connect to a real submission endpoint before launch — either a
    // Netlify Forms POST (add data-netlify + a hidden form-name field) or a
    // Resend-backed API route, per CLAUDE.md's "Forms" section. This MVP only
    // performs client-side validation.
    await new Promise((resolve) => setTimeout(resolve, 500));
    setConfirmedFirstName(values.firstName);
    reset();
  };

  if (confirmedFirstName) {
    return (
      <div className="rounded-lg border border-border bg-surface p-8 sm:p-10">
        <h3 className="font-heading text-2xl font-semibold text-foreground">
          Merci {confirmedFirstName} !
        </h3>
        <p className="mt-3 max-w-xl text-foreground-muted">
          Ta demande a bien été reçue. Un membre de l&apos;équipe JSC va
          revenir vers toi très prochainement pour t&apos;accueillir dans la
          communauté.
        </p>
        <button
          type="button"
          onClick={() => setConfirmedFirstName(null)}
          className="mt-6 text-sm font-medium text-primary hover:underline"
        >
          Envoyer une nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName">Prénom *</Label>
          <Input
            id="firstName"
            autoComplete="given-name"
            aria-invalid={!!errors.firstName}
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName">Nom *</Label>
          <Input
            id="lastName"
            autoComplete="family-name"
            aria-invalid={!!errors.lastName}
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="age">Âge *</Label>
          <Input
            id="age"
            type="number"
            inputMode="numeric"
            min={1}
            max={120}
            aria-invalid={!!errors.age}
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age && (
            <p className="text-sm text-red-600">{errors.age.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="phone">Téléphone</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {poles.length > 0 ? (
        <fieldset className="flex flex-col gap-3">
          <legend className="text-sm font-medium text-foreground">
            Pôle d&apos;intérêt
          </legend>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {poles.map((pole) => (
              <label
                key={pole.slug}
                htmlFor={`pole-${pole.slug}`}
                className="flex cursor-pointer items-center gap-2 text-sm text-foreground-muted"
              >
                <Checkbox
                  id={`pole-${pole.slug}`}
                  value={pole.slug}
                  {...register("poles")}
                />
                {pole.name}
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" rows={4} {...register("message")} />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="self-start"
      >
        {isSubmitting ? "Envoi en cours..." : "Je rejoins la communauté"}
      </Button>
    </form>
  );
}
