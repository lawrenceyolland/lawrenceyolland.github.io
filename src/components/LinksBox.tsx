import {useState} from "react";
import * as React from "react";
import {SectionHeading} from "./SectionHeading.tsx";
import {ExternalIcon} from "./ExternalIcon.tsx";
import {Section} from "./Links.tsx";
import {Role} from "./CareerBox.tsx";

type LinksBoxProps = {
    sectionData: Section[] | Role[];
    chips: string[];
    children?: React.ReactNode
}

export const LinksBox = ({sectionData, chips, children}: LinksBoxProps) => {
    const [collapsed, setCollapsed] = useState(false)
    return sectionData.map((section) => (
        <div key={section.heading} className="flex flex-col w-full p-5 gap-4 rounded-2xl ">
            <div className="flex flex-row items-center gap-3">
                <SectionHeading text={section.heading} />
                <button
                    onClick={() => setCollapsed((prev) => !prev)}
                    className="cursor-pointer transition-all duration-300 text-2xl flex w-full"
                >

                    <div>{section.heading === 'Projects' ? '💻' : '🔬'}</div>
                    <div className="flex ml-auto">{collapsed ? '-' : '+'}</div>
                </button>
            </div>

            {!collapsed ? (
                <div className="flex flex-row flex-wrap gap-2">
                    {chips.map((topic) => (
                        <span
                            key={topic}
                            className="p-2 text-xs bg-amber-100 rounded-xl flex items-center font-mono"
                        >
                            {topic}
                        </span>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col gap-3.5">
                    <ol className="flex flex-col gap-3.5">
                        {section.items.map((item) => (
                            <li key={item.label}>
                                <a href={item.url}
                                   target={item.external ? "_blank" : undefined}
                                   rel={item.external ? "noopener noreferrer" : undefined}
                                   className="text-slate-900 dark:text-white text-sm hover:underline"
                                >
                                    {item.label}
                                    {item.external && <ExternalIcon />}
                                </a>
                                <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5 leading-snug">
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ol>
                    {children}
                </div>
            )}
        </div>
    ))
}

