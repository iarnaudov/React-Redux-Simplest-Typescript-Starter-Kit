import React from 'react';
import './App.scss';
import { Counter } from "./components/Counter";
import { Section } from './components/Section';
import RouterExample from './components/RouterExample';

export const App: React.FC = () => {
  return (
    <div className="App">
      <h1> </h1>
      <Counter/>
      <Section/>
      <RouterExample/>
    </div>
  );
};
