import { useState } from "react";

// The content of the education & experience dropdown menus
function InputMenu({ title }) {
    const [items, setItems] = useState([]); // holds the user-added items in the menu, either schools or jobs

    return (
        <>
            {items.map((item) => { // items the user has entered
                <button></button>
            })}

            <button>add {title.toLowerCase()} </button>
        </>
    )
}

export default InputMenu;