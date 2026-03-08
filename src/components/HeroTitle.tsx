"use client"

import TextType from "./TextType"

export interface HeroTitleProps {
  lang?: string
}

const HeroTitle: React.FC<HeroTitleProps> = ({ lang = "fr" }) => {
  const texts =
    lang === "fr"
      ? [
          "L'Intelligence Artificielle",
          "La tech",
          "L'IA agentique",
          "La programmation",
          "Le Machine Learning",
          "L'innovation tech",
        ]
      : [
          "Artificial Intelligence",
          "Tech",
          "Agentic AI",
          "Programming",
          "Machine Learning",
          "Tech Innovation",
        ]
  const suffix = lang === "fr" ? " à" : " at"
  return (
    <div className="relative">
      <h1
        className="text-center text-4xl tracking-tight md:text-6xl lg:text-7xl"
        style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
      >
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
        <br />
        <span className="text-primary">HEC Paris</span>
      </h1>
    </div>
  )
}

export default HeroTitle
