import React from "react";

const List = (props) => {
  const people = props.people.map((person) => {
    return (
      <article key={person.id} className="person">
        <img src={person.image} alt="" />
        <div>
          <h4>{person.name}</h4>
          <p>{person.age} years</p>
        </div>
      </article>
    );
  });

  return <div>{people}</div>;
};

export default List;
