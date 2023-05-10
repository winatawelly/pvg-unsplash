import landing from "./landing.jpg";
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
      <img src={landing} className="landing-img" alt="React Bootstrap logo" />
    </div>
  );
};

export default Home;
