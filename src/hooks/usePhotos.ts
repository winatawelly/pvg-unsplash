import React from "react";

import { createApi } from "unsplash-js";
import { Photo } from "../schemas/photo";

interface Props {
  query: string;
}

const usePhotos = ({ query }: Props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [data, setData] = React.useState<Photo[] | null>(null);
  const api = createApi({
    accessKey: "W6_0tCbnD19b6wY6D1WjL2dwiFKl4JVx4lZf7CB_rBQ",
  });

  React.useEffect(() => {
    setIsLoading(true);
    api.search
      .getPhotos({ query: query, perPage: 20 })
      .then((result) => {
        setData(result.response?.results as Photo[]);
        setIsLoading(false);
      })
      .catch(() => {
        console.log("something went wrong!");
        setIsError(true);
      });
  }, [query]);

  return { data, isLoading, isError };
};

export default usePhotos;
