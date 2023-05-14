import React from "react";
import { Photo } from "../schemas/photo";

interface LikedContextInterface {
  liked: Photo[];
  setLiked: (data: any) => {};
}

export const LikedContext = React.createContext({
  liked: [],
  setLiked: (data: any) => {},
});
