type TranslateX =
  | "translate-x-1"
  | "translate-x-20"
  | "translate-x-30"
  | "translate-x-40"
  | "translate-x-50"
  | "translate-x-60"
  | "translate-x-70"
  | "translate-x-80";

type Rotation = "rotate-45" | "-rotate-45";

type TrussProps = {
  tx: TranslateX;
  r: Rotation;
};

const Truss = ({ tx, r }: TrussProps) => {
  return (
    <div
      className={`absolute w-5 h-1 bg-amber-700 bg-alum-texture bg-auto ${r} ${tx} translate-y-3 z-1 shadow-truss-shadow`}
    />
  );
};

export default Truss;
