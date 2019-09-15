import React from 'react';
import './App.scss';
import Counter from "./components/Counter";
import { connect } from "react-redux";
import { IStore } from './store/IStore';
import { Section } from './components/Section';

const App: React.FC = (props: any) => {
  return (
    <div className="App">
      <h1 style={{backgroundColor: props.headingColor}}>App Heading: {props.title}</h1>
      <Counter/>
      <Section/>
    </div>
  );
}

const mapStateToProps = (state: IStore) => ({
  title: state.count,
  headingColor: state.appColor
});

export default connect(mapStateToProps)(App);