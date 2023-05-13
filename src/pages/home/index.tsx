import landing from "./landing.jpg";
import landing2 from "./landing2.jpg";
import SearchBar from "../../components/searchBar";

import "./style.css";

const Home = () => {
  return (
    <div id="homepage">
      <div className="overlay">
        <div id="homepage-headline" className="mb-4">
          <h1>PVG-Unsplash</h1>
          <h5>The internet’s source for visuals.</h5>
          <h5>Powered by creators everywhere.</h5>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
