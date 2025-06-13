import Tag, { classMap } from "./LanguageTag.";

const BIO_TEXT = `Highly curious, data-oriented researcher turned software engineer,
        experienced in problem-solving, and building innovative solutions
        through interdisciplinary collaboration. I have experience across tech domains, including developing high quality, client-facing
        react apps, constructing APIs in node and go for professional and personal projects, providing data-driven UX advice
        to corporates, as well as developing custom software in python
        and matlab to process and analyse data within the context of a
        research lab.`;

type Language = keyof typeof classMap;

const isLanguage = (token: string): token is Language => {
  return token in classMap;
};

const Bio = () => {
  return (
    <div className="max-w-xl leading-relaxed inline-block z-20">
      <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-800 dark:text-white">
        {BIO_TEXT.split(" ").map((token, idx) => {
          return isLanguage(token) ? (
            <Tag language={token} key={idx} />
          ) : (
            <span> {token} </span>
          );
        })}
      </div>
    </div>
  );
};

export default Bio;
