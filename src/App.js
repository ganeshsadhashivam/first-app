import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  // const jsx = <h1>jsx is awesome</h1>;
  // console.log(jsx);
  // const ele = React.createElement(
  //   "h1",
  //   "",
  //   "hi i am from react create element"
  // );

  // console.log(ele);
  // const topic = "React";
  // const age = 39;
  // const likes = ["JSX", "React", "Redux"];
  // const jsx = (
  //   <div id="someID">
  //     <h1 id="header">jsx is awesome</h1>
  //     <h2>{age}</h2>
  //     <h3>{likes}</h3>
  //     <h4>{String(true)}</h4>
  //     {true ? <h1>conditional rendering</h1> : <h2>i will not work</h2>}
  //     {likes.map((item, index) => {
  //       return <h1 key={index}>{item}</h1>;
  //     })}
  //   </div>

  // );
  // console.log(jsx);
  // return jsx;
  const pets = [
    {
      name: "molly",
      type: "cat",
      description: "molly is a sweet cat ",
      skills: ["play dead", "meow", "puri"],
      image:
        "https://images.pexels.com/photos/13722001/pexels-photo-13722001.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "dolly",
      type: "dog",
      description: "dolly is a sweet dog ",
      skills: ["play dead", "bow", "play"],
      image:
        "https://images.pexels.com/photos/981062/pexels-photo-981062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="App">
      <h1>pets</h1>
      <ul className="container">
        {pets.map((pet, index) => {
          return (
            <>
              <li key={index}>
                <h2>{pet.name}</h2>
                <img
                  src={pet.image}
                  alt={pet.name}
                  width="200px"
                  height="200px"
                />
                <p>{pet.description}</p>
                <ul className="skills">
                  {pet.skills.map((skill, index) => {
                    return <li key={index}>{skill}</li>;
                  })}
                </ul>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
