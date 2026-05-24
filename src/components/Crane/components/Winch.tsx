
const Winch = () => {
  return (
      <div id="winch-slider">
          <div className="absolute h-10 -left-20 top-25 p-8 w-fit whitespace-pre border-1 border-slate-600 flex align-middle items-center bg-orange-600 bg-alum-texture rounded-xs">
              <div className="absolute border-1 border-slate-600 h-25 -top-25 left-22" />
              <div className="absolute border-1 border-slate-600 h-25 -top-25 left-30" />

              <span className="font-mono font-bold text-shadow-white">Looking For Work! <a href="https://www.linkedin.com/in/lawrenceyolland/"></a></span>

          </div>
        <div
            id="winch"
            className="h-2 p-2 aspect-square bg-slate-600 bg-alum-texture z-20 relative flex items-center justify-center drop-shadow-crane-shadow"
        >

          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">

            </div>
            <div className="flex flex-row gap-3">
              <div className="w-3 aspect-square bg-gray-800 rounded-4xl" />
              <div className="w-3 aspect-square bg-gray-800 rounded-4xl" />
            </div>
          </div>
        </div>
      </div>
  );
};
export default Winch;