import Truss from "./components/Truss";
import Winch from "./components/Winch";

const Crane = () => {
  return (
      <div className="absolute bottom-60 left-20 z-50 opacity-80 hidden 2xl:block pointer-events-none">
        <div className="relative -rotate-0 border-t-4 border-slate-800 bg-alum-texture dark:border-gray-300 rounded-2xl z-40">
          <div className="absolute -left-0 -top-8 h-fit w-fit p-3 bg-slate-600 z-30 bg-alum-texture" >
            <span className="font-bold text-white text-xs font-mono">CLYDEPORT:3000</span>
          </div>
          <div className="absolute -left-0 -top-2 h-10 w-10 bg-slate-600 z-20 bg-alum-texture" />
          <div className="flex gap-3 flex-col relative drop-shadow-beam-inner-shadow z-3">
            <div
                id="top-beam"
                className="w-[450px] h-2 relative bg-slate-600 bg-alum-texture bg-auto z-3"
            />

            <Truss tx="translate-x-[30px]"  r="rotate-45"  ty="translate-y-[35px]" w="w-[100px]" />
            <Truss tx="translate-x-[100px]"  r="-rotate-45" ty="translate-y-[35px]" w="w-[100px]" />

            <Truss tx="translate-x-[180px]" r="rotate-45"  ty="translate-y-[30px]" w="w-[70px]" />
            <Truss tx="translate-x-[230px]" r="-rotate-45" ty="translate-y-[30px]" w="w-[70px]" />

            <Truss tx="translate-x-[310px]" r="rotate-30"  ty="translate-y-[15px]" w="w-[45px]" />

            <div id="btm-beam-1" className="absolute w-[100px] left-0 top-[40px] rotate-35 h-2 bg-slate-600 bg-alum-texture bg-auto z-2 drop-shadow-truss-shadow"/>
            <div
                id="btm-beam-2"
                className="absolute w-[300px] -rotate-15 right-0 top-[35px] h-2 bg-slate-600 bg-alum-texture bg-auto z-2 drop-shadow-truss-shadow"
            >

            </div>
          </div>
          <div className="absolute -right-2 -top-2 z-30">
            <div className="h-4 aspect-square absolute right-0 bg-slate-600 bg-alum-texture" />
            <Winch />
          </div>


        </div>

        <div className="absolute left-20 top-18 h-12 w-25 bg-slate-600 flex bg-alum-texture z-50 border-slate-600 border-8">
          <div className="flex flex-col gap-3 ">
            <div className="flex flex-row gap-3 flex-1">
              <div className="w-1 aspect-square bg-gray-300" />
              <div className="w-1 aspect-square bg-gray-300" />
            </div>
            <div className="flex flex-row gap-3">
              <div className="w-1 aspect-square bg-gray-300" />
              <div className="w-1 aspect-square bg-gray-300" />
            </div>
          </div>
        </div>

        <div className="absolute left-20 top-20 h-40 w-25 border-4 border-slate-600 overflow-clip z-30">
          <Truss tx="-translate-x-15" r="rotate-45"  ty="translate-y-[22px]" w="w-50" />
          <Truss tx="-translate-x-15" r="-rotate-45" ty="translate-y-[22px]" w="w-50" />

          <Truss tx="-translate-x-15" r="rotate-45"  ty="translate-y-[88px]" w="w-50" />
          <Truss tx="-translate-x-15" r="-rotate-45" ty="translate-y-[88px]" w="w-50" />

          <Truss tx="-translate-x-15" r="rotate-45"  ty="translate-y-[154px]" w="w-50" />
          <Truss tx="-translate-x-15" r="-rotate-45" ty="translate-y-[154px]" w="w-50" />
        </div>
      </div>
  );
};


export default Crane;