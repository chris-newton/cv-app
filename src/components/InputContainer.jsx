import InputDropdown from "./InputDropdown.jsx";
import { useState } from "react";

function InputContainer() {
    const [openIndex, setOpenIndex] = useState(0); // one or fewer dropdowns can be open at the same time

    return (
        <div className="input-container">
            <InputDropdown title="Personal Details" index={0} openIndex={openIndex} setOpenIndex={setOpenIndex} />
            <InputDropdown title="Education" index={1} openIndex={openIndex} setOpenIndex={setOpenIndex} />
            <InputDropdown title="Experience" index={2} openIndex={openIndex} setOpenIndex={setOpenIndex} />
        </div>
    )
}

export default InputContainer;