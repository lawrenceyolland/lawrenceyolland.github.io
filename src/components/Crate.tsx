const Crate = () => {
  return (
    <div className="absolute top-full right-0 rotate-[30deg] origin-top-right">
      <div className="relative w-[4px] h-[200px] ">
        <div
          id="line"
          className="absolute top-0 left-0 w-full h-full bg-slate-600 dark:bg-gray-300 origin-top"
        />
        <a href="https://www.linkedin.com/in/lawrenceyolland/" target="_blank">
          <div
            id="crate-parent"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 filter drop-shadow-crate-shadow"
          >
            <div
              id="crate"
              className="trapezoid w-[200px] h-[100px] bg-yellow-400 bg-alum-texture bg-cover rounded-md flex items-center justify-center text-center font-bold"
            >
              <h2>hi!</h2>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Crate;
