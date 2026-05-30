const Bio = () => {
    return (
        <div className="max-w-2xl leading-relaxed inline-block z-20">
            <div className="text-sm sm:text-base md:text-md lg:text-md xl:text-md text-slate-800 dark:text-white">
                <p className="whitespace-normal">
                    Glasgow based researcher-turned-software engineer with a background spanning computational biology, data analysis, and full-stack development.
                </p>
                <br/>
                <p className="whitespace-normal">
                    Spent 4 years in the lab building data-processing tools in <span className="relative font-semibold text-[1em] z-1 underline-python">Python</span> and <span className="relative font-semibold text-[1em] z-1 underline-matlab">MATLAB</span> to solve complex cell biology questions. 6+ years in the broadcast industry delivering client-facing <span className="relative font-semibold text-[1em] z-1 underline-react">React</span> apps, <span className="relative font-semibold text-[1em] z-1 underline-node">Node.js</span> APIs, and <span className="relative font-semibold text-[1em] z-1 underline-go">Go</span> tooling. Currently branching into <span className="relative font-semibold text-[1em] z-1 underline-java">Java</span> and Solutions Architecture.
                </p>
                <br/>
                <p className="whitespace-normal">
                    Equally comfortable working with research scientists, product teams, and enterprise stakeholders - motivated by problems at the intersection of rigorous analysis and practical engineering.
                </p>
            </div>
        </div>
    );
};

export default Bio;