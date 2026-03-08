"use client"

import TextType from "./TextType"

export interface HeroTitleProps {
  lang?: string
}

const HeroTitle: React.FC<HeroTitleProps> = ({ lang = "fr" }) => {
  const texts =
    lang === "fr"
      ? [
          "L'IA",
          "La tech",
          "Les agents IA",
          "La programmation",
          "Le ML",
          "Les LLM",
          "L'innovation tech",
        ]
      : [
          "AI",
          "Tech",
          "Agents",
          "Programming",
          "ML",
          "LLMs",
          "Tech Innovation",
        ]
  const suffix = lang === "fr" ? "\u00A0à" : "\u00A0at"
  return (
    <div className="relative">
      <h1
        className="text-center text-3xl tracking-tight md:text-6xl lg:text-7xl"
        style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
      >
        {/*min-h-[4.5rem] md:min-h-[7.5rem] lg:min-h-[9rem] */}
        <span className="block">
          <TextType
            as="span"
            text={texts}
            typingSpeed={75}
            deletingSpeed={50}
            pauseDuration={3000}
            showCursor
            cursorCharacter="|"
            cursorClassName="font-light"
            cursorBlinkDuration={0.5}
            loop
          />
          <span className="text-foreground">{suffix}</span>
        </span>
        <span className="text-primary">HEC Paris</span>
      </h1>
    </div>
  )
}

export default HeroTitle
