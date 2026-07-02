import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <span className="relative inline-flex h-5 w-5 shrink-0 items-center justify-center">
      <input
        type="checkbox"
        ref={ref}
        className={cn(
          "peer h-5 w-5 shrink-0 cursor-pointer appearance-none rounded border border-border bg-background checked:border-primary checked:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
      <Check
        className="pointer-events-none absolute h-3.5 w-3.5 text-primary-foreground opacity-0 peer-checked:opacity-100"
        aria-hidden
      />
    </span>
  )
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
