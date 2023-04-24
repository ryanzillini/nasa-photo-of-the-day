import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import NasaPhoto from "./components/NasaPhoto";

const dummyData = {
  copyright: "Kimberly Sibbald",
  date: "2023-04-24",
  explanation:
    "What powers this unusual nebula? CTB-1 is the expanding gas shell that was left when a massive star toward the constellation of Cassiopeia exploded about 10,000 years ago. The star likely detonated when it ran out of elements near its core that could create stabilizing pressure with nuclear fusion. The resulting supernova remnant, nicknamed the Medulla Nebula for its brain-like shape, still glows in visible light by the heat generated by its collision with confining interstellar gas.  Why the nebula also glows in X-ray light, though, remains a mystery. One hypothesis holds that an energetic pulsar was co-created that powers the nebula with a fast outwardly moving wind. Following this lead, a pulsar has recently been found in radio waves that appears to have been expelled by the supernova explosion at over 1000 kilometers per second.  Although the Medulla Nebula appears as large as a full moon, it is so faint that it took many hours of exposure with a telescope in Seven Persons, Alberta, Canada to create the featured image.",
  hdurl: "https://apod.nasa.gov/apod/image/2304/CTB1_Sibbald_6209.jpg",
  title: "The Medulla Nebula Supernova Remnant",
};

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    Axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return <div className="App">{data && <NasaPhoto photo={data} />}</div>;
}

export default App;
