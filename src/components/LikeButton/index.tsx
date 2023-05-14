import React from "react";

import loveIcon from "./love-icon.svg";
import loveIconFilled from "./love-icon-filled.svg";

import "./style.css";

import { LikedContext } from "../../contexts/LikedContext";
import { Photo } from "../../schemas/photo";

interface Props {
  data: Photo | undefined;
  variant?: "circle" | "normal";
  className?: string;
}

const LikeButton = ({ data, variant, className }: Props) => {
  const { liked, setLiked } = React.useContext(LikedContext);
  const [isLiked, setIsLiked] = React.useState(
    !!liked.find((img: Photo) => img.id === data?.id)
  );

  const handleLike = () => {
    if (isLiked && data) {
      setLiked(liked.filter((img: Photo) => img.id !== data.id));
    } else if (!isLiked && data) {
      setLiked([...liked, data]);
    }

    setIsLiked(!isLiked);
  };

  React.useEffect(() => {
    setIsLiked(!!liked.find((img: Photo) => img.id === data?.id));
  }, [liked]);

  return (
    <div
      className={`${className} ${variant === "circle" ? "variant-circle" : ""}`}
    >
      <img
        src={isLiked ? loveIconFilled : loveIcon}
        className="like-button"
        onClick={handleLike}
      />
    </div>
  );
};

export default LikeButton;
