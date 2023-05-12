import React from "react";
import Image from "react-bootstrap/Image";

import loveIcon from "./love-icon.svg";
import loveIconFilled from "./love-icon-filled.svg";

import "./style.css";

interface Props {
  src: string;
}

const ImageCard = ({ src }: Props) => {
  const [isLiked, setIsLiked] = React.useState(false);
  return (
    <div className="img-card ">
      <Image src={src} width={"100%"} />
      <div className="image-card-actions mb-4">
        <img
          src={isLiked ? loveIconFilled : loveIcon}
          className="image-card-action-icon"
          onClick={() => setIsLiked(!isLiked)}
        />
      </div>
    </div>
  );
};

export default ImageCard;
