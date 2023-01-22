import icon_paternDivider_mobile from "./assets/pattern-divider-mobile.svg";
import icon_paternButton from "./assets/icon-dice.svg";
import "./style.css";
import { useEffect, useState } from "react";
import { queries } from "@testing-library/react";
const App = () => {
  const url = "https://api.adviceslip.com/advice";
  const [quote, setQuote] = useState(null);
  const [json, setJson] = useState(null);

  const fecthApi = async (url) => {
    const response = await fetch(url);
    console.log(response.status);
    const responseJSON = await response.json();
    console.log(responseJSON);
    setJson(responseJSON);
  };

  const renderQuote = () => {
    setQuote(json);
  };

  useEffect(() => {
    fecthApi(url);

    if (quote === null) {
      renderQuote();
    }
  }, [quote]);

  const module = (
    <main className="container">
      <label className="container_label">
        Advice {quote === null ? "..." : quote.slip.id}
      </label>
      <p className="container_paragraph">
        {quote === null ? "..." : quote.slip.advice}
      </p>
      <img className="container_imgDivider" src={icon_paternDivider_mobile} />
      <div className="container_divButton" onClick={renderQuote}>
        <img className="divButton_imgButton" src={icon_paternButton} />
      </div>
    </main>
  );

  return module;
};

export default App;
