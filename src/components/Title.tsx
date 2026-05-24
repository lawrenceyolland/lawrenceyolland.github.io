const Title = () => {
  return (
      <div className="mb-2.5">
          <h1
              id="title"
              className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-slate-800"
          >
              Dr Lawrence Yolland
          </h1>
          <div className="flex flex-row items-center gap-2">
              <h2
                  id='subtitle'
                  className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-amber-600">
                  Software Engineer
              </h2>
                  <a
                      href="https://www.linkedin.com/in/lawrenceyolland/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="h-[100%] hover:opacity-80"
                  >
                      <img
                          src="/LI-In-Bug.png"
                          alt="LinkedIn Icon"
                          className="h-5 sm:h-5 md:h-6 lg:h-7 xl:h-8 w-auto"
                      />
                  </a>
          </div>
      </div>
  );
};

export default Title;
