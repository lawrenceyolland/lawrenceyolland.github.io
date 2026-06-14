import {useEffect} from "react";
import Title from "./components/Title";
import Bio from "./components/Bio";
import Crane from "./components/Crane/Crane.tsx";
import Links, {DIY_CARDS, DOG_CARDS, HOME_CARDS} from "./components/Links.tsx";
import DownloadResume from "./components/DownloadResume.tsx";

const imagePaths = [...DOG_CARDS, ...HOME_CARDS, ...DIY_CARDS]

const App = () => {
    useEffect(() => {
        imagePaths.forEach(card => {
            const img = new Image();
            img.src = `/image_gallery/${card.path}/${card.src}`;
            img.decode().catch(() => {});
        });
    }, []);

    return (
        <div className="min-h-screen relative pb-6">
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-end px-10 py-5">
            </header>

            <div className="hidden md:flex fixed top-14 left-0 w-1/2 h-[calc(100vh-3.5rem)] flex-col px-16 relative overflow-auto bg-[#fdf6e3]">
                <div className="bg-inherit z-100">
                    <Title />
                    <Bio />
                    <DownloadResume />
                </div>
                <Crane />
            </div>
            
            <div className="right-panel md:fixed md:top-14 md:right-0 md:w-1/2 md:h-[calc(100vh-3.5rem)] md:overflow-y-auto md:pt-0 pb-3">
                <div className="md:hidden pt-10 pb-0 px-8">
                    <Title />
                    <Bio />
                    <DownloadResume />
                </div>

                <div className="pt-0 pr-3 pl-3 ">
                    <Links />
                </div>
            </div>
        </div>
)};

export default App;
