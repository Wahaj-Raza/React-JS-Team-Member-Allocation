import * as React from "react";
import './App.css';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Content from "./Content.jsx";

export default function App() {
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}