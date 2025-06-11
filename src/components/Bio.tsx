import { GoTag, MatlabTag, NodeTag, PythonTag, ReactTag } from "./LanguageTag.";

const Bio = () => {
  return (
    <div className="max-w-xl leading-relaxed inline-block">
      <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl text-slate-800 dark:text-white">
        Highly curious, data-oriented researcher turned software engineer,
        experienced in problem-solving, and building innovative solutions
        through interdisciplinary collaboration. I have experience across tech
        domains, including developing high quality, client-facing
        <ReactTag />
        apps, constructing APIs in <NodeTag /> and <GoTag />
        for professional and personal projects, providing data-driven UX advice
        to corporates, as well as developing custom software in <PythonTag />
        and <MatlabTag /> to process and analyse data within the context of a
        research lab.
      </span>
    </div>
  );
};

export default Bio;
