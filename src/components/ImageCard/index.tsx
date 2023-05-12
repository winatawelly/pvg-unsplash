import React from "react";
import Image from "react-bootstrap/Image";

import loveIcon from "./love-icon.svg";
import loveIconFilled from "./love-icon-filled.svg";

import "./style.css";

interface Props {
  src: string;
  title: string;
  author: string;
}

const ImageCard = ({ src, title, author }: Props) => {
  const [isLiked, setIsLiked] = React.useState(false);
  return (
    <div className="img-card">
      <Image src={src} width={"100%"} className="img-top-rounded" />
      <div className="image-card-actions">
        <img
          src={isLiked ? loveIconFilled : loveIcon}
          className="image-card-action-icon"
          onClick={() => setIsLiked(!isLiked)}
        />
      </div>
      <div className="image-card-info">
        <p className="image-card-info-author">{author}</p>
        <p className="image-card-info-desc">{title}</p>
      </div>
    </div>
  );
};

export default ImageCard;
