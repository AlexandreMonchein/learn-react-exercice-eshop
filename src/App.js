/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Cards } from "./components/Cards/cards.component";
import SHOES from "./data";
import { useDispatch, useSelector } from "react-redux";
import { storeShoes } from "./state/state.actions";
import { getShoes } from "./state/state.selectors";

function App() {
  const dispatch = useDispatch();
  // selecteur qui va chercher les chaussures présentes dans l'état global

  const shoes = useSelector(getShoes);

  useEffect(() => {
    dispatch(storeShoes(SHOES));
  }, []);

  console.warn(">>> shoes:", shoes);

  return shoes ? (
    <div
      className="App"
      style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}
    >
      {shoes.map((shoe, index) => {
        return <Cards key={index} {...shoe} />;
      })}
    </div>
  ) : null;
}

export default App;
