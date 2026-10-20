import Link from "next/link";

export function Brand({ light = false, onNavigate }: { light?: boolean; onNavigate?: () => void }) {
  return (
    <Link href="/" onClick={onNavigate} aria-label="CubeGears — Home" className="brand-link focus-ring">
      <span aria-hidden="true" className="brand-symbol">
        <span className="brand-symbol-inner">CG</span>
      </span>
      <span className={light ? "brand-name text-white" : "brand-name text-slate-950"}>
        Cube<span className="text-blue-500">Gears</span>
      </span>
    </Link>
  );
}
