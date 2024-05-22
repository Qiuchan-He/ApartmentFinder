import React from "react";
import "./style.less";
import { useNavigate } from "react-router-dom";

const CityList = (props) => {
  const navigate = useNavigate();

  function clickCityHandle(e) {
    props.onEvent(e);
    navigate("/");
  }

  return (
    <div className="city-list-container">
      <h3>热门城市</h3>
      <ul className="clear-fix">
        <li onClick={() => clickCityHandle("Berlin")}>
          <span>Berlin</span>
        </li>
        <li onClick={() => clickCityHandle("Munich")}>
          <span>Munich</span>
        </li>
        <li onClick={() => clickCityHandle("Hamburg")}>
          <span>Hamburg</span>
        </li>
        <li onClick={() => clickCityHandle("Cologne")}>
          <span>Cologne</span>
        </li>
        <li onClick={() => clickCityHandle("Frankfurt")}>
          <span>Frankfurt</span>
        </li>
        <li onClick={() => clickCityHandle("Dresden")}>
          <span>Dresden</span>
        </li>
        <li onClick={() => clickCityHandle("Nuremberg")}>
          <span>Nuremberg</span>
        </li>
        <li onClick={() => clickCityHandle("Düsseldorf")}>
          <span>Düsseldorf</span>
        </li>
        <li onClick={() => clickCityHandle("Leipzig")}>
          <span>Leipzig</span>
        </li>
        <li onClick={() => clickCityHandle("Heidelberg")}>
          <span>Heidelberg</span>
        </li>
        <li onClick={() => clickCityHandle("Stuggart")}>
          <span>Stuttgart</span>
        </li>
        <li onClick={() => clickCityHandle("Saarbrücken")}>
          <span>Saarbrücken</span>
        </li>
      </ul>
    </div>
  );
};

export default CityList;
