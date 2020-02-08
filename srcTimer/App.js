import React from 'react';
import './App.css';
import Time from './component/timer'


let timeMS=3600000
function App() {
 return (
   <div className="App">
      <Time numberList={timeMS}/>
   </div>
 );
}
export default App;
