import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import Icon from "./Icon";
import Form from "./Form";

const Home = () => {
  return (
    <>
      <div className="mainContainer">
        <Nav />
        <Main />
      </div>
      <Icon />
      <Form />
    </>
  );
};

export default Home;
