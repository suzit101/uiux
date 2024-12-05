import React from "react";
import {
  Artical,
  Brand,
  Cta,
  Feature,
  Navbar,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
  Blog,
} from "./components";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Artical />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
