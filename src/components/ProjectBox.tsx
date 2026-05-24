import {useState} from "react";
import {SectionHeading} from "./SectionHeading.tsx";
import {ExternalIcon} from "./ExternalIcon.tsx";

type Chips = string[]

type Project = {
    heading: string;
    description: string;
    src: string;
    imgs: string[];
}

type ProjectSection = {
    heading: string;
    description: string;
    items: Project[];
    chips: Chips,
}

const PROJECT_DATA: ProjectSection[] = [
    {
        heading: 'Folio Scout',
        description: "An in-progress system that evaluates GitHub repositories (currently frontend apps) and produces structured, senior-engineer-style feedback focused on code quality, " +
            "architecture, and portfolio readiness. It extracts signals from repository structure and implementation patterns using a multi-stage pipeline combining TypeScript services, " +
            "a Java-based static analysis layer, and LLM-based synthesis to generate actionable review output.",
        items: [
            {
                heading: 'Folio Scout Monorepo',
                description: '',
                src: '',
                imgs: ['']
            }
        ],
        chips: ['Astro', 'TypeScript', 'Hono', 'Java', 'Claude'],
    },
    {
        heading: 'The Open Scientist',
        description: "An early full-stack project built as the capstone for Flatiron School's Software Engineering programme (2019). " +
            "The platform lets researchers share and discuss early-stage work - combining structured paper submission with community-driven feedback, " +
        "inspired by preprint archives and forum-style discussion. A React frontend backed by a Ruby on Rails API.",
        items: [
            {
                heading: 'TOS Front End',
                description: 'Mobile first React front end.',
                src: 'https://github.com/lawrenceyolland/tos-frontend-react',
                imgs: ['']
            },
            {
                heading: 'TOS Back End',
                description: 'Ruby on Rails back end',
                src: 'https://github.com/lawrenceyolland/tos-backend-rails',
                imgs: ['']
            }
        ],
        chips: ['JavaScript', 'React', 'Ruby', 'Rails'],
    },
    {
        heading: 'Particle Image Velocimetry (PIV)',
        description: "A computational imaging pipeline for analysing intracellular actin dynamics and cell motion from time-lapse microscopy data. " +
            "The system applies image cross-correlation techniques to compute particle displacement fields and derives higher-order flow properties including velocity, divergence, and strain. " +
            "Implemented using MATLAB-based interactive tools for analysis and Python-based pipelines for downstream processing and quantitative visualization. " +
            "This work formed the computational foundation of my PhD thesis and our publication in Nature Cell Biology (links in Research section).",
        items: [
            {
                heading: 'PIV Analysis',
                description: 'MatLab GUI for PIV and Python notebook walkthroughs for follow up analysis (divergence, strain, etc)',
                src: 'https://github.com/lawrenceyolland/actin-flow-analysis',
                imgs: ['']
            }
        ],
        chips: ['MatLab', 'Python']
    },
    {
        heading: 'Coding with the Kiddos',
        description: "My eldest (4yo) has recently taken an interest in programming, so here's some informal coding experiments we've built",
        items: [
            {
                heading: 'Super Simple Cat',
                description: '',
                src: '',
                imgs: [''],
            },
            {
                heading: "What's the time Mr Wolf CLI game",
                description: "It's whats the time Mr Wolf, but written in Go. Takes a user input, cannot chase you.",
                src: '',
                imgs: [''],
            },
            {
                heading: "Colour mixing",
                description: 'Mix the floating coloured blobs to see what colours we can make.',
                src: '',
                imgs: [''],
            },
            {
                heading: "Rainbows Everywhere",
                description: 'Click two points on the page to generate a rainbow. How many rainbows can you make?',
                src: '',
                imgs: [''],
            }
        ],
        chips: ['HTML', 'CSS', 'JavaScript', 'Go']
    },
]

export const ProjectBox = () => {
    const [collapsed, setCollapsed] = useState(false)
    return PROJECT_DATA.map((section) => (
        <div key={section.heading} className="flex flex-col w-full p-5 gap-4 rounded-2xl ">
            <div className="flex flex-row items-center gap-3">
                <SectionHeading text={section.heading} />
                <button
                    onClick={() => setCollapsed((prev) => !prev)}
                    className="cursor-pointer transition-all duration-300 text-2xl flex w-full"
                >
                    <div>💻</div>
                    <div className="flex ml-auto">{collapsed ? '-' : '+'}</div>
                </button>
            </div>

            {!collapsed ? (
                <div className="flex flex-row flex-wrap gap-2">
                    {section.chips.map((topic) => (
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
                            <li key={item.heading}>
                                <a href={item.src}
                                   target={item.src ? "_blank" : undefined}
                                   rel={item.src ? "noopener noreferrer" : undefined}
                                   className="text-slate-900 dark:text-white text-sm hover:underline"
                                >
                                    {item.heading}
                                    {item.src && <ExternalIcon />}
                                </a>
                                <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5 leading-snug">
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    ))
}

