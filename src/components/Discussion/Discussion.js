import React from 'react';
import './Discussion.css'

const Discussion = () => {
    return (
        <div className='discussion'>
            <h1>Questions and Answers</h1>
            <div className='qs1'>
                <h2>How does React Works?</h2>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when  data changes</p>
            </div>
            <div className='qs2'>
                <h2>Difference between props and State?</h2>
                <p>Props are used to pass data from one component to another.
                    The state is a local data storage that is local to the component only and cannot be passed to other components.
                    The this.setState property is used to update the state values in the component.</p>
            </div>
            <div className='qs3'>
                <h2>In which other sections can useState be used except data loading?</h2>
                <p>The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values.useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
            </div>
        </div>
    );
};

export default Discussion;