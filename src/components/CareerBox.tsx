import {useState} from "react";
import {SectionHeading} from "./SectionHeading.tsx";
import {ExternalIcon} from "./ExternalIcon.tsx";
import StackChips from "./StackChips.tsx";

type RoleItem = {
    label: string;
    description: string;
    url?: string;
    external?: boolean;
};

export type Role = {
    heading: string;
    company: string;
    period: string;
    items: RoleItem[];
};

type CareerSection = {
    heading: string;
    roles: Role[];
};

const CAREER_SECTION: CareerSection = {
    heading: "Career",
    roles: [
        {
            heading: "Software Engineer",
            company: "Red Bee Media",
            period: "2020 – current",
            items: [
                {
                    label: "Internal release-tracking tool",
                    description: "Technical owner of a full-stack TypeScript internal tool for deployment managers " +
                        "and engineers to track releases and view component metadata. Designed and built out the Node.js/Express " +
                        "backend, integrating third-party APIs across Jenkins and AWS (S3, Cognito, STS, DynamoDB, QuickSight), with " +
                        "real-time WebSocket updates and custom D3 visualisations for the React frontend. Subsequently rewrote the " +
                        "backend in Go, aligning with the wider engineering team's preferred stack.",
                },
                {
                    label: "Workflow monitoring dashboard",
                    description: "Lead developer of a customer-facing React dashboard with fully customisable " +
                        "tiles displaying workflow summary statistics and detailed graphical renderings.",
                },
                {
                    label: "Broadcast playout dashboard",
                    description: "Lead developer on a business-critical broadcast playout dashboard used by " +
                        "operations teams across major broadcasters. Scoped and delivered a plan of work that included a security audit, " +
                        "dependency updates, codebase modernisation, and alignment with our established technical stack.",
                },
                {
                    label: "Solutions Architect tooling",
                    description: "Built two React applications for Solutions Architects, translating Figma designs into " +
                        "production-ready interfaces with interactive D3 visualisations and a custom JSON editor built with CodeMirror.",
                },
                {
                    label: "Standards & best practices",
                    description: "Championed TypeScript and Redux Toolkit adoption across applications; authored " +
                        "business cases and impact assessments for technology decisions including an Axios-to-native-Fetch migration " +
                        "and updated security standards.",
                },
                {
                    label: "Team & delivery",
                    description: "Worked across the full application suite requiring both depth and breadth of codebase " +
                        "knowledge: triaging bugs, developing features, reviewing code, and producing documentation in an agile workflow. " +
                        "Experience with mentoring: mentored a new hire through onboarding, setting SMART goals and co-developing a training pathway.",
                },
            ],
        },
        {
            heading: "Data Analyst",
            company: "Contentsquare",
            period: "2018 – 2019",
            items: [
                {
                    label: "SQL & data analysis",
                    description: "Analysed large-scale web analytics datasets using SQL, Python, and Contentsquare's " +
                        "proprietary platform to surface actionable UX insights for enterprise clients.",
                },
                {
                    label: "Automation & 3rd-party integration",
                    description: "Identified a manual extraction bottleneck and independently automated it in " +
                        "Python on a cron schedule, integrating with the Google Sheets and Data Studio APIs to deliver client dashboards " +
                        "before the working day began.",
                },
                {
                    label: "Communication",
                    description: "Led cross-functional workshops translating complex data findings into concrete product " +
                        "recommendations for developers, product managers, and UI specialists.",
                },
            ],
        },
        {
            heading: "PhD Researcher",
            company: "University College London (BBSRC London Interdisciplinary Doctoral Programme)",
            period: "2014 – 2018",
            items: [
                {
                    label: "Computational research",
                    description: "Developed novel computational image-processing tools in MATLAB and Python to " +
                        "analyse immune cell migration.",
                    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7025891/pdf/EMS84443.pdf",
                    external: true,
                },
                {
                    label: "Collaboration",
                    description: "Part of a multidisciplinary team of engineers, geneticists, and cell biologists. Contributed " +
                        "methods and tooling to further publications in Nature Communications, Current Biology, and the Journal of Cell Science.",
                },
                {
                    label: "Publications & presentations",
                    description: "Thesis work published in Nature Cell Biology (2019). Spoke at the " +
                        "Abercrombie Meeting (Royal Microscopical Society, held every five years). Won Best Talk at the British Actin Meeting.",
                },
            ],
        },
    ]
};


export const CareerBox = ({ chips }: {chips: string[]}) => {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <div className="flex flex-col w-full p-0 pl-5 pr-5 gap-4 rounded-xl">
            <div className="flex flex-row items-center gap-3">
                <SectionHeading text="Career" />
                <button
                    onClick={() => setCollapsed((prev) => !prev)}
                    className="cursor-pointer transition-all duration-300 text-2xl flex w-full ml-2.5"
                >
                    <div>💼</div>
                    <div className="flex ml-auto hover:opacity-80">{collapsed ? '+' : '-'}</div>
                </button>
            </div>

            {collapsed ? (
                <StackChips chips={chips}/>
            ) : (
                <div className="flex flex-col relative">
                    {CAREER_SECTION.roles.map((role, index) => (
                        <div className="flex flex-row ">
                            <div className='w-12 text-right shrink-0 text-xl text-slate-800' style={{ paddingTop: index > 0 ? "10px" : "0px" }}>
                                <h4>{role.period.slice(0,4)}</h4>
                            </div>
                            <div className="flex flex-col items-center w-8 shrink-0">
                                {index !== CAREER_SECTION.roles.length && (
                                    <div className="flex-1 w-px bg-amber-600" />
                                    )
                                }
                            </div>
                            <div className="flex flex-col gap-2" style={{ paddingTop: index > 0 ? "10px" : "0px" }}>
                                <div>
                                    <h4 className="text-lg text-slate-800">
                                        {role.heading}
                                    </h4>
                                    <h5 className="text-md text-amber-600">
                                        {role.company} · {role.period}
                                    </h5>
                                </div>
                                <ol className="flex flex-col gap-2">
                                    {role.items.map((item) => (
                                        <li key={item.label}>
                                            {item.url ? (
                                                <a href={item.url}
                                                   target={item.external ? "_blank" : undefined}
                                                   rel={item.external ? "noopener noreferrer" : undefined}
                                                   className="text-slate-900 text-sm hover:underline"
                                                >
                                                    {item.label}
                                                    {item.external && <ExternalIcon />}
                                                </a>
                                            ) : (
                                                <span className="text-slate-800 dark:text-white text-sm font-medium">
                                        {           item.label}
                                                </span>
                                            )}
                                            <p className="text-slate-500  text-xs mt-0.5 leading-snug">
                                                {item.description}
                                            </p>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
