import React from 'react';

function NameListTwo() {
     const names = ['Bruce' ,'Clerk','Diana','Bruce']
     const namesList =   names.map((name,index) => <h2 key ={index}>{index} {name}</h2>)
     return  <div>{namesList}</div>
}

export default NameListTwo;