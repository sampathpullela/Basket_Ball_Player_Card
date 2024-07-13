// App.js
import React from "react";
import BasketballPlayerCard from "./BasketballPlayerCard";
import playerImage from "./james.jpg";

const App = () => {
  const player = {
    name: "LeBron James",
    image: playerImage,
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5,
    },
  };

  return (
    <div>
      <h1 style={{textAlign: "center"}}>{player.name}</h1>
      <BasketballPlayerCard
        name={player.name}
        image={player.image}
        position={player.position}
        stats={player.stats}
      />
    </div>
  );
};

export default App;
