import React from "react";
import Image from "react-bootstrap/Image";

import LikeButton from "../LikeButton";

import "./style.css";

interface Props {
  src: string;
  title: string;
  author: string;
  onClick?: () => void;
}

const ImageCard = ({ src, title, author, onClick }: Props) => {
  return (
    <div className="img-card">
      <Image
        src={src}
        width={"100%"}
        className="img-top-rounded"
        onClick={onClick && onClick}
      />
      <div className="image-card-actions">
        <LikeButton />
      </div>
      <div className="image-card-info">
        <p className="image-card-info-author">{author}</p>
        <p className="image-card-info-desc">{title}</p>
      </div>
    </div>
  );
};

export default ImageCard;
