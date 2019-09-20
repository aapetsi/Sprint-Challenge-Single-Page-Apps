import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact={true} path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
    </main>
  );
}
