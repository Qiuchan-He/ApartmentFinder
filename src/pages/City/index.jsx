import React, { useState } from "react";
import CityHeader from "../../components/PubHeader";
import CurrentCity from "./CurrentCity";
import CityList from "./CityList";
import { useSelector, useDispatch } from "react-redux";
import { initCity, changeCity } from "../../redux/actions/city";

const City = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city);

  function onCityEvent(city) {
    dispatch(changeCity(city));
  }

  return (
    <div>
      <CityHeader title={"城市选择"} />
      <CurrentCity city={city.cityName} />
      <CityList onEvent={onCityEvent} />
    </div>
  );
};

export default City;
