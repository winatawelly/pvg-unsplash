import { useSearchParams, useNavigate } from "react-router-dom";
import usePhotos from "../../hooks/usePhotos";

import { Photo } from "../../schemas/photo";

import ImageCard from "../../components/ImageCard";
import ImageModal from "../../components/ImageModal";
import SearchBar from "../../components/searchBar";

import Spinner from "react-bootstrap/Spinner";

import emptyImg from "./empty.svg";

import "./style.css";
import React from "react";

const Search = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [page, setPage] = React.useState(0);
  const [column1, setColumn1] = React.useState<Photo[] | null>(null);
  const [column2, setColumn2] = React.useState<Photo[] | null>(null);
  const [column3, setColumn3] = React.useState<Photo[] | null>(null);

  const [selectedImage, setSelectedImage] = React.useState<Photo>();
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [isEmpty, setIsEmpty] = React.useState(false);

  const query = searchParams.get("q");
  const { data, isLoading, isError } = usePhotos({
    query: query || "",
  });

  const handleImageClick = (image: Photo) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const loadingRenderer = () => (
    <div className="loading">
      <Spinner animation="border" />
    </div>
  );

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
              src={img.urls.small}
              title={img.description ? img.description : img.alt_description}
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
              title={img.description ? img.description : img.alt_description}
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
              title={img.description ? img.description : img.alt_description}
              author={img.user.name}
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
      <p>Please try again with another keyword or use more generic term</p>
      <SearchBar value={query || ""} />
    </div>
  );

  React.useEffect(() => {
    if (!isLoading && data?.length === 0 && page === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [data, isLoading, page]);

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
      {isEmpty
        ? emptyRenderer()
        : isLoading
        ? loadingRenderer()
        : imagesRenderer()}
    </div>
  );
};

export default Search;
