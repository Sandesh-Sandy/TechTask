import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Resize from './Resize';
import Comp1 from './components/Comp1'
// initalization

const App = () => {
  return (
    <>
      <Resize comp={<Comp1 />} />
    </>
  );
};

export default App;