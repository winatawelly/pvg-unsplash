export type Photo = {
  id: string;
  width: number;
  height: number;
  urls: { full: string; regular: string; raw: string; small: string };
  user: {
    username: string;
    name: string;
  };
  description: string;
};
