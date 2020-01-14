import React from 'react';

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void;
    count : number;
};

function Greetings({ name, mark, optional, onClick, count }: GreetingsProps) {
    const handleClick = () => onClick(name);
    return (
        <div>
            Hello, {name} {mark} {count}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    );
}

Greetings.defaultProps = {
    mark: '!'
};

export default Greetings;