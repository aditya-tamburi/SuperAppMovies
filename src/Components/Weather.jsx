import { useState, useEffect } from "react";

export default function Weather() {
  const [weather, setweather] = useState();
  const [error, setError] = useState();
  const [loading, setloading] = useState();

  useEffect(() => {
    setloading(true);
   fetch(
        "https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=d8USYZpJT6dp2mQNB0byLMthm0HNQkLu")
        .then((res) => res.json())
        .then((data) => setweather(data))
        .catch((err) => SpeechSynthesisErrorEvent(err))
        .finally(() => setloading(false));
    },[]);

  return (
    <div>
      <h1>Weather</h1>
      {loading ? (
        <p>still loading</p>
      ) : weather ? (
        <div>
          {" "}
          <p>Temperature {weather.timelines.daily[0].values.temperatureApparentAvg}</p>
          <p>Pressure {weather.timelines.daily[0].values.pressureSurfaceLevelAvg}</p>
          <p>Windspeed {weather.timelines.daily[0].values.windSpeedAvg}</p>
          <p>Humidity {weather.timelines.daily[0].values.humidityAvg}</p>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}
