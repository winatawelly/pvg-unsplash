import loveIcon from "./love-icon.svg";
import loveIconFilled from "./love-icon-filled.svg";

import "./style.css";
import React from "react";

interface Props {
  variant?: "circle" | "normal";
  className?: string;
}

const LikeButton = ({ variant, className }: Props) => {
  const [isLiked, setIsLiked] = React.useState(false);
  return (
    <div
      className={`${className} ${variant === "circle" ? "variant-circle" : ""}`}
    >
      <img
        src={isLiked ? loveIconFilled : loveIcon}
        className="like-button"
        onClick={() => setIsLiked(!isLiked)}
      />
    </div>
  );
};

export default LikeButton;
