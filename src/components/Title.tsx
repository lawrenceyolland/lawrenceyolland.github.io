const Title = () => {
  return (
      <div>
    <h1
      id="title"
      className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-gray-900 "
    >
      Dr Lawrence Yolland
    </h1>
          <div className="flex flex-row items-center gap-2">
        <h2 id='subtitle' className="text-xl sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl text-amber-600">
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
                    className="h-6 sm:h-8 md:h-9 lg:h-6 xl:h-8 w-auto"
              />
              </a>
          </div>

      </div>
  );
};

export default Title;
