import React, {use, useState} from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);

    const [name2, setName2] = useState("Guest");

    const [age2, setAge2] = useState(0);

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

        </div>
    );
}

export default MyComponent;