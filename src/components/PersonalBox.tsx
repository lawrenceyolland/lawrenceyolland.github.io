import  {useState} from "react";

import {SectionHeading} from "./SectionHeading.tsx";
import {Card} from "./Links.tsx";

type PersonalBoxProps = { heading: string, cards: Card[], path: string }

const chooseIcon = (path: string) => {
    switch(path) {
        case "Dog":
            return "🐶"
        case "Home":
            return "⛰️"
        case "DIY":
            return "🪚"
        default:
            return "🙃"
    }
}

const chooseDescription = (path:string) => {
    switch(path) {
        case "Dog":
            return "Ironically named after the DS9 security chief who distrusts everyone. Loves the hills as much as us - makes them look easy too.";
        case "Home":
            return "Moved to Glasgow from London. Love to get out into the hills for a bit of trail running. The gravel riding here is astounding."
        case "DIY":
            return "Picked up carpentry. Built the deck, a play kitchen for the girls, bird feeder. Makita collection growing dangerously fast."
        default:
            return "🙃"
    }
}

export const PersonalBox = ({
                                cards,
                                heading,
                                path
                            }: PersonalBoxProps) => {
    const [collapsed, setCollapsed] = useState(true)
    const icon = chooseIcon(path)
    const description = chooseDescription(path)
    return <div className="flex flex-col w-full p-5 pb-0 gap-4 rounded-xl relative">
        <div className="flex flex-row items-center gap-3">
            <SectionHeading text={heading} />
            <button
                onClick={() => setCollapsed((prev) => !prev)}
                className="cursor-pointer transition-all duration-300 text-2xl flex flex-row w-full"
            >
                <div>{icon}</div>
                <div className="flex ml-auto hover:opacity-80">{collapsed ? '+' : '-'}</div>
            </button>
        </div>

        {!collapsed && (
            <div>
                <p className="w-full">{description}</p>
                <div className="overflow-x-auto w-full">
                    <div className="inline-flex items-end py-8 px-16 min-w-full ">
                        {cards.map(({ src, r, ty }, i) => (
                            <div key={src}
                                 className="transition-transform duration-200 hover:-translate-y-6 flex-shrink-0 -ml-4 first:ml-0 bg-amber-600"
                                 style={{
                                     transform: `translateY(${ty}px) rotate(${r}deg)`,
                                     zIndex: i + 1,
                                     transformOrigin: "bottom center",
                                 }}>
                                <img
                                    src={`/image_gallery/${path}/${src}`}
                                    className="h-64 min-w-48 object-cover border-8 border-white border-b-[28px] shadow-lg"

                                />
                            </div>
                        ))}
                    </div>
            </div>
            </div>
        )}
    </div>
}
