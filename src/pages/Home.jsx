import React, { useState } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";
import Login from "../components/Login";
import './AllPages.css'

const Home = () => {
  const [login, setLogin] = useState(false);
  function handleModal(){
    setLogin(!login);
  }
  function handleClose(){
    setLogin(false);
  }
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Header handleModal={handleModal} />
      {login && <Login className="login__component" handleClose={handleClose} />}
      <Body className="body__component"/>
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
