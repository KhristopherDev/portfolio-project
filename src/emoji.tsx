import { useEffect, useState } from "react";

function Emoji() {
  const EmojiSize = 10;
  const [emoji, setEmoji] = useState(`😀`);
  useEffect(() => {
    document.addEventListener("mouseleave", () => {
      setEmoji("🥺");
    });
    document.addEventListener("mouseenter", () => {
      setEmoji("😀");
    });
    document.addEventListener("mouseenter", (e) => {
      e.target.id === "Contact" ? setEmoji("🤩") : setEmoji("😀");
    });
  });

  return (
    <div
      style={{
        position: "relative",
        width: `${EmojiSize}vw`,
        height: `${EmojiSize}vw`,
        textAlign: "center",
        fontSize: `${EmojiSize * 0.7}vw`,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {emoji}
    </div>
  );
}

export default Emoji;
