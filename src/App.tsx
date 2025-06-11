import Title from "./components/Title";
import Bio from "./components/Bio";
import useTheme from "./hooks/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="dark:text-white absolute top-5 right-10 cursor-pointer"
      >
        {theme === "light" ? "dark" : "light"}
      </button>
      <div className="flex flex-col justify-center items-center text-center py-0 px-[1rem] my-[20px] mx-1">
        <section className="text-center mb-5 relative">
          <Title />
        </section>
        <section className="text-center leading-relaxed -z-2 px-5 relative dark:text-white">
          <Bio />
        </section>
      </div>
    </div>
  );
};
export default App;
