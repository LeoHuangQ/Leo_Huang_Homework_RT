import "./App.css";

import Table from "./Table";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
import viteLogo from "/vite.svg";

function App() {
  const hero = [
    {
      name: "Superman",
      alias: "Clark Kent",
      job: "Reporter for Daily Planet",
    },
    {
      name: "Batman",
      alias: "Bruce Wayne",
      job: "Chairman of Wayne Industries",
    },
    {
      name: "Wonderwoman",
      alias: "Princess Diana",
      job: "Princess of Themyscira",
    },
  ];

  const atla = [
    {
      name: "Prince Zuko",
      nation: "Fire Nation",
      skill: "Firebending",
      secondary: "Swordsman",
    },
    {
      name: "Katara",
      nation: "Southern Water Tribe",
      skill: "Waterbending",
      secondary: "Healing",
    },
    {
      name: "Toph Beifong",
      nation: "Earth Kingdom",
      skill: "Earthbending",
      secondary: "Metalbending",
    },
    {
      name: "Aang",
      nation: "Air Nomad",
      skill: "Avatar",
      secondary: "Airbending",
    },
    {
      name: "Sokka",
      nation: "Southern Water Tribe",
      skill: "Swordsman",
      secondary: "Strategist",
    },
    {
      name: "Princess Azula",
      nation: "Fire Nation",
      skill: "Firebending",
      secondary: "Lightning",
    },
  ];
  // const [count, setCount] = useState(2);
  return (
    <div>
      {/* <Table data={hero} /> */}
      <Table
        data={atla}
        // columnName={["Name", "Nation"]}
        // columnValue={["name", "nation"]}
        pageSize={6}
        // sortedBy={"name"}
        // order={1}
        // sx={{ border: "1px solid black" }}
      />
      {/* <button onClick={()=>setCount(6)}>change</button> */}
    </div>
  );
}

export default App;
