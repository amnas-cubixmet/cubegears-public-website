import Link from "next/link";

export function Brand({ light = false, onNavigate }: { light?: boolean; onNavigate?: () => void }) {
  return (
    <Link href="/" onClick={onNavigate} aria-label="CubeGears — Home" className="brand-link focus-ring">
      <span aria-hidden="true" className="brand-symbol">
        <span className="brand-symbol-inner">CG</span>
      </span>
      <span className={light ? "brand-name text-white" : "brand-name text-[#16191c]"}>
        Cube<span className="text-[#d11d2a]">Gears</span>
        <span className="brand-descriptor">WORKSHOP SOFTWARE</span>
      </span>
    </Link>
  );
}
