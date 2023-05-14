import React from "react";

import { createApi } from "unsplash-js";
import { Photo } from "../schemas/photo";

interface Props {
  query: string;
  page: number;
}

const usePhotos = ({ query, page }: Props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [data, setData] = React.useState<Photo[] | null>(null);
  const [totalPage, setTotalPage] = React.useState(1);
  const api = createApi({
    accessKey: "W6_0tCbnD19b6wY6D1WjL2dwiFKl4JVx4lZf7CB_rBQ",
  });

  React.useEffect(() => {
    setIsLoading(true);
    api.search
      .getPhotos({ query: query, perPage: 6, page: page })
      .then((result) => {
        setData(result.response?.results as Photo[]);
        setTotalPage(result.response?.total_pages as number);
        setIsLoading(false);
      })
      .catch(() => {
        console.log("something went wrong!");
        setIsError(true);
      });
  }, [query, page]);

  return { data, totalPage, isLoading, isError };
};

export default usePhotos;
