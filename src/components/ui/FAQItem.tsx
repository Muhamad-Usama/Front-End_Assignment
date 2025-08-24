import { ChevronDown } from "lucide-react";

type FAQ = { id: number; question: string; answer: string };

export function FAQItem({
  faq,
  expanded,
  onToggle,
}: {
  faq: FAQ;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <li className="select-none">

      <button
        type="button"
        onClick={onToggle}
        className="
          w-full flex items-start justify-between gap-3
          py-4 md:py-5
        "
        aria-expanded={expanded}
      >
        <span
          className="
            text-xl leading-6 md:leading-[1.6]
            font-semibold text-gray-700 text-left"
        >
          {faq.question}
        </span>

        <ChevronDown
          className={`
            mt-1 h-5 w-5 text-[#6b7280] shrink-0
            transition-transform duration-200
            ${expanded ? "rotate-180" : ""}
          `}
          aria-hidden
        />
      </button>

      {expanded && (
        <div className="pb-4 md:pb-5 pr-2">
          <p className="text-base md:text-[16px] leading-6 md:leading-7 text-[#6b7280]">
            {faq.answer}
          </p>
        </div>
      )}
      <div className="h-px bg-[#e5e7eb]" />
    </li>
  );
}
