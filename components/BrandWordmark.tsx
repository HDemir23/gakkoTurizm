import { BRAND_SHORT_NAME } from "@/lib/brand";

type BrandWordmarkProps = {
  className?: string;
};

export function BrandWordmark({ className }: BrandWordmarkProps) {
  const classNames = ["brand-wordmark", className].filter(Boolean).join(" ");

  return (
    <span className={classNames} role="text" aria-label={BRAND_SHORT_NAME}>
      <span>Gak</span>
      <span className="brand-wordmark-go">Go</span>
    </span>
  );
}
