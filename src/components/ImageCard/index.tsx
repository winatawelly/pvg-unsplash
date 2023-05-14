import Image from "react-bootstrap/Image";

import LikeButton from "../LikeButton";

import "./style.css";
import { Photo } from "../../schemas/photo";

interface Props {
  data: Photo;
  onClick?: () => void;
}

const ImageCard = ({ data, onClick }: Props) => {
  return (
    <div className="img-card">
      <Image
        src={data.urls.small}
        width={"100%"}
        className="img-top-rounded"
        onClick={onClick && onClick}
      />
      <div className="image-card-actions">
        <LikeButton data={data} />
      </div>
      <div className="image-card-info">
        <p className="image-card-info-author">{data.user.name}</p>
        <p className="image-card-info-desc">
          {data.description ? data.description : data.alt_description}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
