import { BRAND_SHORT_NAME } from "@/lib/brand";

type BrandWordmarkProps = {
  className?: string;
};

export function BrandWordmark({ className }: BrandWordmarkProps) {
  const classNames = ["brand-wordmark", className].filter(Boolean).join(" ");
  const [primaryName, ...secondaryNameParts] = BRAND_SHORT_NAME.split(" ");
  const secondaryName = secondaryNameParts.join(" ");

  return (
    <span className={classNames} role="text" aria-label={BRAND_SHORT_NAME}>
      <span className="brand-wordmark-primary">{primaryName}</span>
      {secondaryName ? (
        <span className="brand-wordmark-go">{secondaryName}</span>
      ) : null}
    </span>
  );
}
