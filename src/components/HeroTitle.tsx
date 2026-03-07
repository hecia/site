"use client"

import TextType from "./TextType"

export default function HeroTitle() {
  return (
    <div className="relative">
      <h1
        className="text-center text-4xl tracking-tight md:text-6xl lg:text-7xl"
        style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
      >
        <TextType
          as="span"
          text={[
            "L'Intelligence Artificielle",
            "La tech",
            "L'IA agentique",
            "La programmation",
            "Le Machine Learning",
            "L'innovation tech",
          ]}
          typingSpeed={75}
          deletingSpeed={50}
          pauseDuration={3000}
          showCursor
          cursorCharacter="|"
          cursorClassName="font-light"
          cursorBlinkDuration={0.5}
          loop
        />
        <span className="text-foreground"> à</span>
        <br />
        <span className="text-primary">HEC Paris</span>
      </h1>
    </div>
  )
}
