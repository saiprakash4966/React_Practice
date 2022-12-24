import React from 'react';

function Employee({employee}) {
    return (
        <div>
            <h2> I am {employee.name} . I am {employee.age} old. I know {employee.skill}</h2>
            
        </div>
    );
}

export default Employee;