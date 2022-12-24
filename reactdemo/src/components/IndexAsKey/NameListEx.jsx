import React from 'react';

function NameListEx() {
    const employees = ['Manoj' ,'Sai','Raghu']
     const employeesList =   employees.map((employee,index) => <h2 key ={index}>{index} {employee}</h2>)
     return  <div>{employeesList}</div>
}

export default NameListEx;