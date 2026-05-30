import {useState} from "react";
import {SectionHeading} from "./SectionHeading.tsx";
import {ExternalIcon} from "./ExternalIcon.tsx";
import TechChips from "./StackChips.tsx";

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
        heading: 'Project Scout',
        description: "An in-progress system that evaluates GitHub repositories (currently frontend apps) and produces structured, senior-engineer-style feedback focused on code quality, " +
            "architecture, and portfolio readiness. It extracts signals from repository structure and implementation patterns using a multi-stage pipeline combining TypeScript services, " +
            "a Java-based static analysis layer, and LLM-based synthesis to generate actionable review output.",
        items: [
            {
                heading: 'Project Scout Monorepo',
                description: '',
                src: 'https://github.com/lawrenceyolland/project-scout',
                imgs: ['']
            }
        ],
        chips: ['Astro', 'TypeScript', 'Hono', 'Java'],
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
        description: "My eldest (4yo) has recently taken an interest in programming, so here's some informal coding experiments we've built. Code will be on GitHub once tidied up.",
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
    const [collapsed, setCollapsed] = useState(true)
        return <div className="flex flex-col w-full p-5 pb-0 gap-4 rounded-2xl ">
            <div className="flex flex-row items-center gap-3">
                <SectionHeading text="Projects" />
                <button
                    onClick={() => setCollapsed((prev) => !prev)}
                    className="cursor-pointer transition-all duration-300 text-2xl flex w-full"
                >
                    <div>💻</div>
                    <div className="flex ml-auto">{collapsed ? '+' : '-'}</div>
                </button>
            </div>

            {
              !collapsed && PROJECT_DATA.map((project) => {
                    return <div className="flex flex-col flex-wrap pb-5 border-b-1">
                        <div className="flex flex-col gap-2 pl-2 pr-2 pt-0">
                            <div>
                                <div className="flex flex-row flex-wrap items-center gap-1">
                                    <span className="text-md text-slate-800 font-semibold">
                                        {project.heading}
                                    </span>
                                    <TechChips chips={project.chips} />
                                </div>
                                <p className="text-sm pt-2 text-slate-600 ">
                                    {project.description}
                                </p>
                            </div>
                            {
                                project.items.map((item)=> {
                                    return <div key={item.heading} className="flex flex-col">
                                        <a href={item.src}
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="text-slate-600 text-sm hover:underline flex items-center"

                                        >
                                            <h5>{item.heading}</h5>
                                            {item.src && <ExternalIcon />}
                                        </a>
                                        <p className="text-sm">{item.description}</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                })
            }
        </div>
}

