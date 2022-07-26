import React from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }

  let apiKey = "72474dba6fbdd6e19757ef5d68f22223";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <InfinitySpin width="200" color="#7fcef5" />;
}
