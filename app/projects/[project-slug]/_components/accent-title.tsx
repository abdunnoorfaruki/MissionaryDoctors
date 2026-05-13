import { cn } from "@/lib/utils";

interface AccentTitleProps {
  parts: { leading: string; emphasis: string; trailing?: string };
  as?: "h1" | "h2" | "h3";
  className?: string;
}

const sizeByTag: Record<NonNullable<AccentTitleProps["as"]>, string> = {
  h1: "text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight",
  h2: "text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.1] tracking-tight",
  h3: "text-[clamp(1.25rem,2vw,1.5rem)] leading-tight",
};

/**
 * Renders a heading with a single accented (destructive-colored) word.
 * Preserves the prototype's two-tone title pattern but uses theme tokens.
 */
export function AccentTitle({
  parts,
  as: Tag = "h2",
  className,
}: AccentTitleProps) {
  return (
    <Tag
      className={cn(
        "font-medium text-foreground",
        sizeByTag[Tag],
        className
      )}
    >
      {parts.leading}{" "}
      <span className="text-primary">{parts.emphasis}</span>
      {parts.trailing ?? ""}
    </Tag>
  );
}
