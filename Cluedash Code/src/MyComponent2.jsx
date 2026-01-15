import {useState, useEffect} from 'react';

function myComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    });

    function addCount() {
        setCount(c => c + 1);
    }

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={addCount}></button>
        </>
    );
}

export default myComponent;
