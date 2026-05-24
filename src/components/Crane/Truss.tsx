
type TrussProps = {
  tx: string;
  r: string;
  ty: string;
  w: string;
};

const Truss = ({ tx, ty, r, w = 'w-[30px]' }: TrussProps) => {
  return (
      <div
          className={`absolute ${w} h-1 bg-slate-600 bg-alum-texture bg-auto ${r} ${tx} ${ty} z-0 drop-shadow-truss-shadow`}
      />
  );
};

export default Truss;