import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  function clear() {
    setPeople([]);
  }
  const num = people.length;
  return (
    <main>
      <section className="container">
        <h2>{num} Birthdays today</h2>
        <List people={people} />
        <button onClick={clear}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
