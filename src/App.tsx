import {
  GoTag,
  MatlabTag,
  NodeTag,
  PythonTag,
  ReactTag,
} from "./components/LanguageTag.";
import Title from "./components/Title";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center py-0 px-[1rem] my-[20px] mx-1">
      <section className="text-center mb-5 relative">
        <Title />
      </section>
      <section className="text-center leading-relaxed -z-2 px-5 relative">
        <div className="max-w-xl leading-relaxed inline-block">
          <span className="text-md">
            Highly curious, data-oriented researcher turned software engineer,
            experienced in problem-solving, and building innovative solutions
            through interdisciplinary collaboration. I have experience across
            tech domains, including developing high quality, client-facing
            <ReactTag />
            apps, constructing APIs in <NodeTag /> and <GoTag />
            for professional and personal projects, providing data-driven UX
            advice to corporates, as well as developing custom software in{" "}
            <PythonTag /> and <MatlabTag /> to process and analyse data within
            the context of a research lab.
          </span>
        </div>
      </section>
    </div>
  );
};
export default App;
