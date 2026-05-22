import  {useState} from "react";

import {SectionHeading} from "./SectionHeading.tsx";
import {Card} from "./Links.tsx";

type PersonalBoxProps = { heading: string, cards: Card[] }

const chooseIcon = (path:string) => {
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

export const PersonalBox = ({
                                cards,
                                heading,
                            }: PersonalBoxProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const icon = chooseIcon(cards[0].path)
    return <div className="flex flex-col w-full p-5 gap-4 rounded-xl relative">
        <div className="flex flex-row items-center gap-3">
            <SectionHeading text={heading} />
            <button
                onClick={() => setCollapsed((prev) => !prev)}
                className="cursor-pointer transition-all duration-300 text-2xl flex flex-row w-full"
            >
                <div>{icon}</div>
                <div className="flex ml-auto">{collapsed ? '-' : '+'}</div>
            </button>
        </div>
        {!collapsed ? (
            <div className="flex flex-row flex-wrap gap-2">

            </div>
        ) : (
            <div className="overflow-x-auto w-full">
                <div className="inline-flex items-end py-8 px-16 min-w-full ">
                    {cards.map(({ src, r, ty, path }, i) => (
                        <div key={src}
                             className="transition-transform duration-200 hover:-translate-y-6 flex-shrink-0 -ml-4 first:ml-0"
                             style={{
                                 transform: `translateY(${ty}px) rotate(${r}deg)`,
                                 zIndex: i + 1,
                                 transformOrigin: "bottom center",
                             }}>
                            <img
                                src={`/image_gallery/${path}/${src}`}
                                className="h-64 object-cover border-8 border-white border-b-[28px] shadow-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
}
