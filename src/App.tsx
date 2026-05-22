import Title from "./components/Title";
import Bio from "./components/Bio";
import useTheme from "./hooks/useTheme";
import Crane from "./components/Crane/Crane.tsx";
import Links from "./components/Links.tsx";

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className="min-h-screen relative">
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-end px-10 py-5">
                {/*TODO: fix dark mode*/}
                {/*<button onClick={toggleTheme} className="dark:text-white cursor-pointer">*/}
                {/*    {theme === "light" ? "dark" : "light"}*/}
                {/*</button>*/}
            </header>

            <div className="hidden md:flex fixed top-14 left-0 w-1/2 h-[calc(100vh-3.5rem)] flex-col py-10 px-16 relative overflow-hidden">
                <Title />
                <Bio />
                <div className="py-10 pr-10">
                    <a
                        href="../public/Lawrence_Yolland_Resume_2026.pdf"
                        download="Lawrence_Yolland_CV.pdf"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-150 text-sm font-medium text-slate-900 dark:text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4"
                            aria-hidden="true"
                        >
                            <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                            <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                        </svg>
                        Download Resume
                    </a>
                </div>
                <Crane />
            </div>

            <div className="right-panel md:fixed md:top-14 md:right-0 md:w-1/2 md:h-[calc(100vh-3.5rem)] md:overflow-y-auto pt-14 md:pt-0">
                <div className="md:hidden py-10 px-8">
                    <Title />
                    <Bio />
                </div>

                <div className="py-10 pr-10">
                    <Links />
                </div>

            </div>
        </div>
)};

export default App;
