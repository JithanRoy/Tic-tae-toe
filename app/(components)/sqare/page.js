'use client'
import { useState } from "react";

export default function Square() {
    const [value, setValue] = useState(null);

    const handleClick = () => {
        setValue('X');
    }

    return (
        <div>
            <button onClick={handleClick} className="h-10 w-10 border border-black font-bold">{value}</button>
        </div>
    )
}