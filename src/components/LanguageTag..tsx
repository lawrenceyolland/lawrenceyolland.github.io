type Language = "python" | "go" | "react" | "node" | "matlab";

type Properties = {
  label: string;
  pathStyle: string;
  blobVersion: string;
  svgStyle: string;
};

type TagProps = {
  language: Language;
};

const classMap: Record<Language, Properties> = {
  go: {
    label: "Golang",
    pathStyle: "fill-blue-500",
    blobVersion: "1",
    svgStyle: "-left-3 -top-4 w-[10em] h-[4em]",
  },
  node: {
    label: "Node.js",
    pathStyle: "fill-green-500",
    blobVersion: "1",
    svgStyle: "left-1 -top-6 w-[5em] h-[4em] ",
  },
  react: {
    label: "React",
    pathStyle: "fill-cyan-500",
    blobVersion: "1",
    svgStyle: "left-5 -top-5 w-[4em] h-[4em]",
  },
  python: {
    label: "Python",
    pathStyle: "fill-yellow-500",
    blobVersion: "1",
    svgStyle: "-left-2 w-[5em] h-[3em]",
  },
  matlab: {
    label: "Matlab",
    pathStyle: "fill-orange-600",
    blobVersion: "1",
    svgStyle: "-left-12 -top-5 w-[8em] h-[4em]",
  },
};

export const Tag = ({ language }: TagProps) => {
  const { pathStyle, label, blobVersion, svgStyle } = classMap[language];

  return (
    <div className="max-w-xl text-center leading-relaxed inline-block mix-blend-color">
      <span className="relative inline-block mx-1 align-middle">
        <svg
          viewBox="0 0 1 1"
          preserveAspectRatio="none"
          className={`absolute inset-0 ${svgStyle} blob${blobVersion} -z-1 `}
        >
          <path
            className={pathStyle}
            d={
              "M0.15,0.5 C0.1,0.3 0.35,0.15 0.6,0.25 C0.85,0.35 0.8,0.7 0.55,0.75 C0.3,0.8 0.2,0.7 0.15,0.5 Z"
            }
          />
        </svg>
        <span className="relative z-10 text-slate-800 font-bold uppercase text-[1em] flex items-center justify-center h-full">
          {label.toUpperCase()}
        </span>
      </span>
    </div>
  );
};

export const ReactTag = () => <Tag language="react" />;
export const NodeTag = () => <Tag language="node" />;
export const GoTag = () => <Tag language="go" />;
export const PythonTag = () => <Tag language="python" />;
export const MatlabTag = () => <Tag language="matlab" />;
