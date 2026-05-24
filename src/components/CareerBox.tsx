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
                    label: "Full-Stack Internal Release Tracking Tool",
                    description: "Designed and built a full-stack release tracking tool in TypeScript (React frontend, Node.js/Express backend), integrating Jenkins, GitLab, Jira, and AWS services (S3, Cognito, STS, QuickSight, DynamoDB). Features include real-time WebSocket updates and bespoke D3 visualisations for deployment managers and engineers.",
                },
                {
                    label: "Go CLI Developer Tools",
                    description: "Built a suite of Go-based CLI tools that visualise deployed component dependencies, giving engineers a clear, real-time view of service relationships and deployment state across environments.",
                },
                {
                    label: "TypeScript & Redux Toolkit Adoption",
                    description: "Championed and led the adoption and migration to TypeScript and Redux Toolkit across multiple applications, improving type safety, maintainability, and developer experience.",
                },
                {
                    label: "Business Cases & Mentoring",
                    description: "Authored successful Business Cases, carried out Security Impact Assessments, and produced product and tooling proposals - demoing initiatives across the business to drive adoption. Supported new hires through structured onboarding and formal mentoring programmes, including setting SMART goals and writing detailed progress reports.",
                },
                {
                    label: "Broadcast Playout Dashboard",
                    description: "Lead developer on a mission-critical dashboard used daily by operations teams managing live broadcast transmission for major broadcasters.",
                },
                {
                    label: "Customer-Facing React Dashboard",
                    description: "Owned the full product lifecycle - from Figma design and planning through to production — building a business-critical dashboard with fully customisable and persistent layouts (data, sizing, positioning, colours, and labels), and rich graphical renderings of workflow summary statistics.",
                },
                {
                    label: "App Modernisation",
                    description: "Rebuilt two vanilla JS/jQuery legacy applications used by Solutions Architects from the ground up in React. Translated Figma designs into polished, production-ready interfaces complete with interactive D3 visualisations that render complex orchestrations, and a custom JSON editor powered by CodeMirror.",
                },
            ],
        },
        {
            heading: "Data Analyst",
            company: "Contentsquare",
            period: "2018 – 2019",
            items: [
                {
                    label: "Enterprise UX analytics",
                    description: "Analysed large volumes of web analytics data using SQL, Python, and proprietary software to surface actionable UX insights for enterprise clients.",
                },
                {
                    label: "Automated reporting pipeline",
                    description: "Identified and independently resolved a manual data extraction bottleneck by automating client-facing Google Sheets and Data Studio dashboards in Python on a cron schedule.",
                },
                {
                    label: "Stakeholder workshops",
                    description: "Led workshops for cross-functional stakeholders including software developers, product managers, and UI specialists, translating complex data findings into concrete recommendations.",
                },
            ],
        },
        {
            heading: "PhD Researcher",
            company: "University College London (BBSRC London Interdisciplinary Doctoral Programme)",
            period: "2014 – 2018",
            items: [
                {
                    label: "Nature Cell Biology publication",
                    description: "Developed novel computational techniques in MATLAB and Python to analyse immune cell migration, resulting in a first-author publication in Nature Cell Biology (2019).",
                    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7025891/pdf/EMS84443.pdf",
                    external: true,
                },
                {
                    label: "Further publications",
                    description: "Contributed research ideas, methods, and tools to further work published in Current Biology, Nature Communications, and the Journal of Cell Science.",
                },
                {
                    label: "Abercrombie Meeting",
                    description: "Invited to present at the 8th Abercrombie Meeting, a Royal Microscopical Society event held every five years to showcase major advances in cell biology.",
                },
            ],
        },
    ]
};


export const CareerBox = ({ chips }: {chips: string[]}) => {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <div className="flex flex-col w-full p-5 pb-0 gap-4 rounded-xl">
            <div className="flex flex-row items-center gap-3">
                <SectionHeading text="Career" />
                <button
                    onClick={() => setCollapsed((prev) => !prev)}
                    className="cursor-pointer transition-all duration-300 text-2xl flex w-full ml-2.5"
                >
                    <div>💼</div>
                    <div className="flex ml-auto">{collapsed ? '+' : '-'}</div>
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
                                                   className="text-slate-900 dark:text-white text-sm hover:underline"
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
