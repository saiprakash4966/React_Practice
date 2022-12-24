import React from 'react';
import Employee from './Employee';

function ListRenderPractice() {
   // const names = ['Sai' ,'Manoj','Raghu']
    // const namesList =   names.map(name => <h2>{name}</h2>)
    // return  <div>{namesList}</div>
    // return (
    //     <div>

    //         {
    //             names.map(name => <h2>{name}</h2>)
    //         }
    //         {/* <h2>{names[0]}</h2>
    //         <h2>{names[1]}</h2>
    //         <h2>{names[2]}</h2> */}
    //     </div>
    // );

    const employees = [
        {
            id : 1,
            name : 'Sai',
            age : 25,
            skill : 'Java'
        },
        {
            id : 2,
            name : 'Manoj',
            age : 26,
            skill : '.Net'
        },
        {
            id : 3,
            name : 'Raghu',
            age : 27,
            skill : 'Angular'
        }
    ]
    const employeesList =   employees.map(employee => (
        <Employee employee = {employee}/>
        ))
    return  <div>{employeesList}</div>
}


export default ListRenderPractice;