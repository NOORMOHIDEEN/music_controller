import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import HomePage from "./Homepage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center">      
        <HomePage />
      </div>
    );
  }
}

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);