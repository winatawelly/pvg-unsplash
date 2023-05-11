import React from "react";
import Image from "react-bootstrap/Image";

interface Props {
  src: string;
}

const ImageCard = ({ src }: Props) => {
  return <Image src={src} width={"100%"} />;
};

export default ImageCard;
