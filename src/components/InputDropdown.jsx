import DownChev from '../assets/chevron-down.svg';
import UpChev from '../assets/chevron-up.svg';
import InputMenu from './InputMenu';

function handleToggle(setOpenIndex, idx, isOpen) {
    if (isOpen) {
        setOpenIndex(null);
    } else {
        setOpenIndex(idx);
    }
}

function InputDropdown({ title, index, openIndex, setOpenIndex }) {
    const isOpen = openIndex === index;

    return (
        <div className="input-dropdown">
            <button onClick={() => handleToggle(setOpenIndex, index, isOpen)} className={"input-dropdown-toggle" + (isOpen ? " input-dropdown-toggle-open" : "")}>
                <h2>{title}</h2>
                <img className="input-dropdown-chev" src={isOpen ? UpChev : DownChev} alt="down chevron" />
            </button>

            <div className={"input-dropdown-menu" + (isOpen ? " open" : "")}>
                {title === 'Personal Details' ? <div>personal details form</div> : <InputMenu title={title}/>}
            </div>
        </div>
    );
}

export default InputDropdown;