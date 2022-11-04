import { FunctionComponent, useState } from "react";

interface CounterProps {
    
}
 
const Counter: FunctionComponent<CounterProps> = (props) => {

    let [count, setCount] = useState<number>(0);

    const clickHandler = () => {
        setCount(++count);
        console.log(count);
    };

    return ( <>
        <h3>{count}</h3>
        <button onClick={clickHandler}>Click Me!</button>
    </> );
}
 
export default Counter;