import React from 'react';
function Time (props){
 const timems=props.numberList
 let time= timems/1000
 let hours=parseInt(time/3600);
 let restehours=(parseInt(time%3600))
let minute=parseInt(restehours/60);
let seconds=minute%60;
return <div> {String(hours).padStart(2,'0')}:{String(minute).padStart(2,'0')}:{String(seconds).padStart(2,'0')}</div>
}
export default Time;