import React from "react";

type KeywordsProps = {
  words: string[];
};

const Keywords: React.FC<KeywordsProps> = ({ words }) => (
  <div className="flex flex-wrap justify-center gap-3 text-sm text-white/80">
    {words.map((item) => (
      <span
        key={item}
        className="rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-wide text-white/70 shadow-inner"
      >
        {item}
      </span>
    ))}
  </div>
);

export default Keywords;
