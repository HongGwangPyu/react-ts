import React, {useState} from "react";

function Counter(){
    const [ num, setNum ] = useState<number>(0);
    const addNumber = ()=> setNum(num + 1);
    const deNumber = ()=> setNum(num - 1);
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={addNumber}>add</button>
            <button onClick={deNumber}>de</button>
        </div>
    )
}

export default Counter;