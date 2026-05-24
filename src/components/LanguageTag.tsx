import { useState } from "react";
type Language = "python" | "go" | "react" | "node" | "matlab" | "ruby" | "java";

type Properties = {
  label: string;
  color: string;
  blobVersion: string;
  svgStyle: string;
};

type TagProps = {
  language: Language;
};

export const classMap: Record<Language, Properties> = {
  go: {
    label: "Go",
    color: "#3b82f6",
    blobVersion: "1",
    svgStyle: "w-[3em] h-[3em]",
  },
  node: {
    label: "Node.js",
    color: "#22c55e",
    blobVersion: "1",
    svgStyle: "w-[5em] h-[4em]",
  },
  react: {
    label: "React",
    color: "#06b6d4",
    blobVersion: "1",
    svgStyle: "w-[4em] h-[4em]",
  },
  python: {
    label: "Python",
    color: "#eab308",
    blobVersion: "1",
    svgStyle: "w-[5em] h-[3em]",
  },
  matlab: {
    label: "Matlab",
    color: "#d97706",
    blobVersion: "1",
    svgStyle: "w-[6em] h-[4em]",
  },
  ruby: {
    label: "Ruby",
    color: "#ef4444",
    blobVersion: "1",
    svgStyle: "w-[5em] h-[4em]",
  },
  java: {
    label: "Java",
    color: "#f97316",
    blobVersion: "1",
    svgStyle: "w-[5em] h-[4em]",
  },
};

const Tag = ({ language }: TagProps) => {
  const [wobble, setWobble] = useState(0);

  const { color, label, blobVersion, svgStyle } = classMap[language];

  return (
      <div
          className="inline-block relative mx-1 align-middle cursor-pointer"
          onMouseEnter={() => setWobble(w => w + 1)}
      >
        <svg
            viewBox="0 0 1 1"
            preserveAspectRatio="none"
            className={`absolute ${svgStyle} blob${blobVersion}`}
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: -1 }}
        >
          <path
              key={wobble}
              style={{ fill: color, transformOrigin: 'center' }}
              className="animate-blob-wobble"
              d="M0.15,0.5 C0.1,0.3 0.35,0.15 0.6,0.25 C0.85,0.35 0.8,0.7 0.55,0.75 C0.3,0.8 0.2,0.7 0.15,0.5 Z"
          />
        </svg>
        <span className="relative font-semibold text-[1em]" style={{ zIndex: 1 }}>
        {label}
      </span>
      </div>
  );
};

export default Tag;
