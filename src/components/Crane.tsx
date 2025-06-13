import Crate from "./Crate";
import Truss from "./Truss";

const Crane = () => {
  return (
    <div className="absolute -left-10 top-[20%] z-0 opacity-80 hidden sm:hidden md:hidden lg:block xl:block">
      <div className="relative -rotate-30 border-t-4 border-slate-600 dark:border-gray-300 rounded-2xl h-[500px]">
        <div className="flex gap-3 flex-col relative">
          <div
            id="top-beam"
            className=" w-[400px] h-2 relative bg-amber-800 bg-alum-texture bg-auto z-2"
          />
          <Truss tx="translate-x-20" r="-rotate-45" />
          <Truss tx="translate-x-40" r="-rotate-45" />
          <Truss tx="translate-x-60" r="-rotate-45" />
          <Truss tx="translate-x-80" r="-rotate-45" />
          <Truss tx="translate-x-1" r="rotate-45" />
          <Truss tx="translate-x-30" r="rotate-45" />
          <Truss tx="translate-x-50" r="rotate-45" />
          <Truss tx="translate-x-70" r="rotate-45" />
          <div
            id="btm-beam"
            className="w-[400px] h-2 relative bg-amber-800 bg-alum-texture bg-auto z-2 shadow-truss-shadow"
          >
            
            <Crate />
          </div>
        </div>

        <div className="absolute -right-2 -top-2 z-30">
          <div
            id="winch"
            className="rounded-[40%] h-10 aspect-square bg-amber-800 bg-alum-texture z-20 relative flex items-center justify-center"
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <div className="w-1 aspect-square bg-gray-300" />
                <div className="w-1 aspect-square bg-gray-300" />
              </div>
              <div className="flex flex-row gap-3">
                <div className="w-1 aspect-square bg-gray-300" />
                <div className="w-1 aspect-square bg-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crane;
