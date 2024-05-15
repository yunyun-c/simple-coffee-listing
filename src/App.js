import { useEffect, useState } from "react";
import Card from "./Card.js";
import FilterButton from "./FilterButton.js";

const App = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const filteredData =
    filter === "available" ? data.filter((item) => item.available) : data;

  return (
    <div className="App">
      <header>
        <h1>Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>

        <FilterButton
          id="all"
          filter={filter}
          setFilter={setFilter}
          label="All Products"
        />
        <FilterButton
          id="available"
          filter={filter}
          setFilter={setFilter}
          label="Available Now"
        />
      </header>
      <section>
        {filteredData.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            rating={item.rating}
            votes={item.votes}
            popular={item.popular}
            available={item.available}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
