import DownChev from '../assets/chevron-down.svg';
import UpChev from '../assets/chevron-up.svg';
import { EducationMenu, ExperienceMenu } from './InputMenu.jsx';
import PersonalDetailsForm from './PersonalDetailsForm.jsx';

function handleToggle(setOpenIndex, idx, isOpen) {
    if (isOpen) {
        setOpenIndex(null);
    } else {
        setOpenIndex(idx);
    }
}

function InputDropdown({ title, index, openIndex, setOpenIndex }) {
    const isOpen = openIndex === index;

    let menu;
    if (title === 'Personal Details') { 
        menu = <PersonalDetailsForm />
    } else if (title === 'Education') {
        menu = <EducationMenu />;
    } else {
        menu = <ExperienceMenu />;
    }

    return (
        <div className={"input-dropdown" + (isOpen ? " open" : "")}>
            <button onClick={() => handleToggle(setOpenIndex, index, isOpen)} className={"input-dropdown-toggle" + (isOpen ? " input-dropdown-toggle-open" : "")}>
                <h2>{title}</h2>
                <img className="input-dropdown-chev" src={isOpen ? UpChev : DownChev} alt="down chevron" />
            </button>

            <div className={"input-dropdown-menu" + (isOpen ? " open" : "")}>
                {menu}
            </div>
        </div>
    );
}

export default InputDropdown;