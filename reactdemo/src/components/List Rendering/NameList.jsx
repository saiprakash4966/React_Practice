import React from 'react';
import Person from './Person';

function NameList() {

    // const names = ['Bruce' ,'Clerk','Diana']
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

    const persons = [
        {
            id : 1,
            name : 'Bruce',
            age : 30,
            skill : 'React'
        },
        {
            id : 2,
            name : 'Clerk',
            age : 25,
            skill : 'Angular'
        },
        {
            id : 3,
            name : 'Diana',
            age : 28,
            skill : 'Vue'
        }
    ]
    const personsList =   persons.map(person => (
        <Person person = {person}
        />

    ))
    return  <div>{personsList}</div>
}

export default NameList;