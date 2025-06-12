const Crane = () => {
  return (
    <div className="absolute -left-10 top-[20%] z-50 opacity-80 hidden sm:hidden md:hidden lg:block xl:block">
      <div className="relative -rotate-30 border-t-4 border-slate-600 dark:border-gray-300 rounded-2xl h-[500px]">
        <div className="flex gap-3 flex-col relative">
          <div
            id="top-beam"
            className=" w-[400px] h-2 relative bg-amber-800 bg-amber-textured bg-auto z-2"
          />

          <div className="absolute w-5 h-1 bg-amber-700 bg-amber-textured bg-auto -rotate-45 translate-x-20 translate-y-3 z-1" />
          <div className="absolute w-5 h-1 bg-amber-700 bg-amber-textured bg-auto -rotate-45 translate-x-40 translate-y-3 z-1" />
          <div className="absolute w-5 h-1 bg-amber-700 bg-amber-textured bg-auto -rotate-45 translate-x-60 translate-y-3 z-1" />
          <div className="absolute w-5 h-1 bg-amber-700 bg-amber-textured bg-auto -rotate-45 translate-x-80 translate-y-3 z-1" />
          <div className="absolute w-5 h-1 bg-amber-700 bg-amber-textured bg-auto rotate-45 translate-x-1 translate-y-3" />
          <div className="absolute w-5 h-1 bg-amber-700 bg-amber-textured bg-auto rotate-45 translate-x-30 translate-y-3 z-1" />
          <div className="absolute w-5 h-1 bg-amber-700 bg-amber-textured bg-auto rotate-45 translate-x-50 translate-y-3 z-1" />
          <div className="absolute w-5 h-1 bg-amber-700 bg-amber-textured bg-auto rotate-45 translate-x-70 translate-y-3 z-1" />

          <div
            id="btm-beam"
            className="w-[400px] h-2 relative bg-amber-800 bg-amber-textured bg-auto z-2"
          >
            <div className="absolute top-full right-0 rotate-[30deg] origin-top-right">
              <div className="relative w-[4px] h-[200px] ">
                <div
                  id="line"
                  className="absolute top-0 left-0 w-full h-full bg-slate-600 dark:bg-gray-300 origin-top"
                />

                <a
                  href="https://www.linkedin.com/in/lawrenceyolland/"
                  target="_blank"
                >
                  <div
                    id="crate"
                    className="trapezoid absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-green-400 rounded-md flex items-center justify-center text-center font-bold"
                  >
                    <h2>hire me!</h2>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -right-2 -top-2 z-30">
          <div
            id="winch"
            className="rounded-[40%] h-10 aspect-square bg-amber-800 bg-amber-textured z-20 relative flex items-center justify-center"
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
