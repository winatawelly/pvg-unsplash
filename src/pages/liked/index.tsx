import { Photo } from "../../schemas/photo";

import ImageCard from "../../components/ImageCard";
import ImageModal from "../../components/ImageModal";
import SearchBar from "../../components/searchBar";

import emptyImg from "./empty.svg";
import { LikedContext } from "../../contexts/LikedContext";

import "./style.css";
import React from "react";

const Liked = () => {
  const { liked } = React.useContext(LikedContext);

  const [column1, setColumn1] = React.useState<Photo[]>([]);
  const [column2, setColumn2] = React.useState<Photo[]>([]);
  const [column3, setColumn3] = React.useState<Photo[]>([]);

  const [selectedImage, setSelectedImage] = React.useState<Photo>();
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isEmpty, setIsEmpty] = React.useState(false);

  const handleImageClick = (image: Photo) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const imagesRenderer = () => (
    <>
      <ImageModal
        show={isModalOpen}
        onHide={() => setModalOpen(false)}
        data={selectedImage}
      />
      <div className="column">
        {column1 &&
          column1.map((img) => (
            <ImageCard
              key={img.id}
              data={img}
              onClick={() => handleImageClick(img)}
            />
          ))}
      </div>
      <div className="column">
        {column2 &&
          column2.map((img) => (
            <ImageCard
              key={img.id}
              data={img}
              onClick={() => handleImageClick(img)}
            />
          ))}
      </div>
      <div className="column">
        {column3 &&
          column3.map((img) => (
            <ImageCard
              key={img.id}
              data={img}
              onClick={() => handleImageClick(img)}
            />
          ))}
      </div>
    </>
  );

  const emptyRenderer = () => (
    <div id="search-empty">
      <img src={emptyImg} />
      <h2 className="mb-0 mt-4">No Result Found</h2>
      <p>Try liking a photo</p>
      <SearchBar value={""} />
    </div>
  );

  // empty checker effect
  React.useEffect(() => {
    if (liked.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [liked]);

  // getData effect
  React.useEffect(() => {
    if (liked.length > 0) {
      let column1Temp: Photo[] = [];
      let column2Temp: Photo[] = [];
      let column3Temp: Photo[] = [];

      liked.map((image: Photo, i) => {
        if (i % 3 === 0) {
          column1Temp.push(image);
        } else if (i % 3 === 1) {
          column2Temp.push(image);
        } else {
          column3Temp.push(image);
        }
      });

      setColumn1(column1Temp);
      setColumn2(column2Temp);
      setColumn3(column3Temp);
    }
  }, [liked]);

  return (
    <div id="liked-page">{isEmpty ? emptyRenderer() : imagesRenderer()}</div>
  );
};

export default Liked;
