import React, {use, useState} from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);

    const [name2, setName2] = useState("Guest");

    const [age2, setAge2] = useState(0);

    const [number, setnumber] = useState(0);

    const updateName = () => {
        setName("Spongebob Squarepants");
    }

    const updateAge = () => {
        setAge(age + 1);
    }

    function handleNameChange(event) {
        setName2(event.target.value);
    }

    function handleQuantityChange(event) {
        setAge2(event.target.value);
    }

    function increment() {
        /*we do setnumber(n => n + 1); because this allows us to update the previous value, so below code updates number 3 times in a row, 0 + 1, 1 + 1, 2 + 1 = 3*/
        setnumber(n => n + 1);
        setnumber(n => n + 1);
        setnumber(n => n + 1);
    }

    return (  
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Increment Age</button>

            <input value={name2} onChange={handleNameChange}/>
            <p>Name: {name2}</p>

            <input value={age2} onChange={handleQuantityChange} type="number"/>
            <p>Age: {age2}</p>

            <p>Update number</p>
            <button onClick={increment}>Click me</button>

        </div>
    );
}

export default MyComponent;