import Tag, { classMap } from "./LanguageTag.tsx";

const BIO_TEXT = "Spent 4 years in the lab building data-processing tools in Python and MATLAB to solve complex cell biology questions. " +
    "6+ years in the broadcast industry delivering client-facing React apps, Node.js APIs, and Go tooling. " +
    "Currently branching into Java and Solutions Architecture."

type Language = keyof typeof classMap;

const isLanguage = (token: string): token is Language => {
    return token in classMap;
};

const Bio = () => {
    return (
        <div className="max-w-2xl leading-relaxed inline-block z-20">
            <div className="text-sm sm:text-base md:text-md lg:text-md xl:text-md text-slate-800 dark:text-white">
                <p className="whitespace-normal">
                    Glasgow based researcher-turned-software engineer with a background spanning computational biology, data analysis, and full-stack development.
                </p>
                <br/>
                <p className="whitespace-normal">
                {BIO_TEXT.split(" ").map((token, idx) => {
                    const trailing = token.match(/[.,]$/)?.[0] ?? "";
                    const stripped = token.replace(/[.,]$/g, "").toLowerCase();
                    const clean = stripped === "node.js" ? "node" : stripped.replace(/\./g, "");

                    return isLanguage(clean) ? (
                        <span key={idx}>
                            <Tag language={clean} />
                            {trailing}
                        </span>
                    ) : (
                        <span key={idx}> {token} </span>
                    );
                })}
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