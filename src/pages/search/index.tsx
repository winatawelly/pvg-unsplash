import { useSearchParams, useNavigate } from "react-router-dom";
import usePhotos from "../../hooks/usePhotos";

import { Photo } from "../../schemas/photo";

import ImageCard from "../../components/ImageCard";
import ImageModal from "../../components/ImageModal";

import Spinner from "react-bootstrap/Spinner";

import "./style.css";
import React from "react";

const Search = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [column1, setColumn1] = React.useState<Photo[] | null>(null);
  const [column2, setColumn2] = React.useState<Photo[] | null>(null);
  const [column3, setColumn3] = React.useState<Photo[] | null>(null);
  const [selectedImage, setSelectedImage] = React.useState<Photo>();
  const [isModalOpen, setModalOpen] = React.useState(false);

  const { data, isLoading, isError } = usePhotos({
    query: query || "",
  });

  const handleImageClick = (image: Photo) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  React.useEffect(() => {
    if (searchParams.get("q") === "" || searchParams.get("q") === null) {
      navigate("/");
    }
  }, [searchParams]);

  React.useEffect(() => {
    if (data) {
      let column1Temp: Photo[] = [];
      let column2Temp: Photo[] = [];
      let column3Temp: Photo[] = [];

      data.map((image, i) => {
        if (i % 3 === 0) {
          column1Temp.push(image);
        } else if (i % 3 === 1) {
          column2Temp.push(image);
        } else {
          column3Temp.push(image);
        }
      });

      // setColumn1(data.slice(0, 6));
      // setColumn2(data.slice(6, 12));
      // setColumn3(data.slice(12));

      setColumn1([...column1Temp]);
      setColumn2([...column2Temp]);
      setColumn3([...column3Temp]);
    }
  }, [data]);

  return (
    <div id="search-page">
      {isLoading ? (
        <div className="loading">
          <Spinner animation="border" />
        </div>
      ) : (
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
                  src={img.urls.small}
                  title={
                    img.description ? img.description : img.alt_description
                  }
                  author={img.user.name}
                  onClick={() => handleImageClick(img)}
                />
              ))}
          </div>
          <div className="column">
            {column2 &&
              column2.map((img) => (
                <ImageCard
                  key={img.id}
                  src={img.urls.small}
                  title={
                    img.description ? img.description : img.alt_description
                  }
                  author={img.user.name}
                  onClick={() => handleImageClick(img)}
                />
              ))}
          </div>
          <div className="column">
            {column3 &&
              column3.map((img) => (
                <ImageCard
                  key={img.id}
                  src={img.urls.small}
                  title={
                    img.description ? img.description : img.alt_description
                  }
                  author={img.user.name}
                  onClick={() => handleImageClick(img)}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
