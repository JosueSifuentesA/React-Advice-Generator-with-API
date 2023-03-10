import icon_paternDivider_mobile from "./assets/pattern-divider-mobile.svg";
import icon_paternButton from "./assets/icon-dice.svg";
import "./style.css";
import { useEffect, useState } from "react";

const App = () => {
  const url = "https://api.adviceslip.com/advice";

  const [json, setJson] = useState(null);

  const fecthApi = async (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setJson(data))
      .catch((error) => console.log(error));
  };

  const renderQuote = (quotes) => {
    fecthApi(url);
    console.log(quotes);
  };

  useEffect(() => {
    fecthApi(url);
  }, []);

  const module = (
    <main className="container">
      <label className="container_label">
        {json === null ? "..." : `Advice ${json.slip.id}`}
      </label>
      <p className="container_paragraph">
        {json === null ? "..." : json.slip.advice}
      </p>
      <div className="container_imgDivider" />
      <div className="container_divButton" onClick={renderQuote}>
        <img
          className="divButton_imgButton"
          src={icon_paternButton}
          alt="button"
        />
      </div>
    </main>
  );

  return module;
};

export default App;
