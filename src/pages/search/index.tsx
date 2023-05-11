import { useSearchParams } from "react-router-dom";
import usePhotos from "../../hooks/usePhotos";

import { Photo } from "../../schemas/photo";

import ImageCard from "../../components/ImageCard";

import Spinner from "react-bootstrap/Spinner";

import "./style.css";
import React from "react";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [colum1, setColumn1] = React.useState<Photo[] | null>(null);
  const [colum2, setColumn2] = React.useState<Photo[] | null>(null);
  const [colum3, setColumn3] = React.useState<Photo[] | null>(null);

  const { data, isLoading, isError } = usePhotos({
    query: query || "",
  });

  React.useEffect(() => {
    if (data) {
      setColumn1(data.slice(0, 6));
      setColumn2(data.slice(6, 12));
      setColumn3(data.slice(12));
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
          <div className="column">
            {colum1 &&
              colum1.map((img) => (
                <ImageCard key={img.id} src={img.urls.small} />
              ))}
          </div>
          <div className="column">
            {colum2 &&
              colum2.map((img) => (
                <ImageCard key={img.id} src={img.urls.small} />
              ))}
          </div>
          <div className="column">
            {colum3 &&
              colum3.map((img) => (
                <ImageCard key={img.id} src={img.urls.small} />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
