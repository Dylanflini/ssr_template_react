import React, { useState } from 'react';
import './app.css';

const App = (props) => {
    const [hide, setHide] = useState(false);
    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //     (async () => {
    //         const response = await fetch('http://localhost:4000/items');
    //         const newItems = await response.json();

    //         setItems(newItems);
    //     })();
    // }, []);

    const handleClick = () => {
        setHide(!hide);
        alert('holaa peo')
    };

    const [count, setCount] = useState(0);

    const increment = () => { setCount(count + 1) };
    const decrement = () => { setCount(count - 1) };

    return (
        <div>
            <h1 className="app__title" >Hello woooorld</h1>
            <h2>ssr react template</h2>
            <button onClick={handleClick}>Toggle</button>
            <p>{count}</p>
            <button onClick={() => increment()} >increment</button>
            <button onClick={() => decrement()} >decrement</button>
            <ul>
                {!hide && props.items.map(item =>
                    <li key={item.id}>{item.label}</li>
                )}
            </ul>
        </div>
    );
};

App.defaultProps = {
    items: []
};

export default App;
