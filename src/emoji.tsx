import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Emoji() {
  const EmojiSize = 10;
  const [emoji, setEmoji] = useState(`😀`);
  const EmojiList = ["😫", "😡", "😑"];
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    const ContactBTN = document.getElementById("Contact");
    const EmojiReact = document.getElementById("EmojiReact");
    let EmojiListPos = 0;
    document.addEventListener("mouseleave", () => {
      setEmoji("🥺");
    });
    document.addEventListener("mouseover", () => {
      setEmoji("😀");
    });
    ContactBTN?.addEventListener("mouseenter", () => {
      setEmoji("🤩");
    });
    EmojiReact?.addEventListener("click", () => {
      setEmoji(EmojiList[Math.floor(Math.random() * EmojiList.length)]);
      setIsAnimating(true);
    });
  }, []);

  return (
    <motion.div
      style={{
        position: "relative",
        width: `${EmojiSize}vw`,
        height: `${EmojiSize}vw`,
        textAlign: "center",
        fontSize: `${EmojiSize * 0.7}vw`,
        cursor: "pointer",
        userSelect: "none",
      }}
      id="EmojiReact"
      animate={isAnimating ? { scale: [1.2, 0.9, 1] } : {}}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      onAnimationComplete={() => setIsAnimating(false)}
    >
      {emoji}
    </motion.div>
  );
}

export default Emoji;
