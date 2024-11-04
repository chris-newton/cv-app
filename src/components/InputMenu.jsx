import { useState } from "react";
import EducationForm from './EducationForm.jsx';
import ExperienceForm from './ExperienceForm.jsx';

// The content of the education & experience dropdown menus
function EducationMenu() {
    const [schools, setSchools] = useState([]); // holds 0 or more user-added items in the menu, either schools or jobs
    const [isFormOpen, setIsFormOpen] = useState(false); 

    return (
        <>
            {!isFormOpen && schools.map((school) => {
                <button onClick={() => setIsFormOpen(true)} key={school.id}>
                    {school.schoolName}
                </button>
            })}

            {!isFormOpen && <div className="add-item-cell"><button className="add-item" onClick={() => setIsFormOpen(true)}>add education</button></div>}
            {isFormOpen && <EducationForm setSchools={setSchools} setIsFormOpen={setIsFormOpen} />}
        </>
    )
}

// The content of the education & experience dropdown menus
function ExperienceMenu() {
    const [jobs, setJobs] = useState([]); // holds 0 or more user-added items in the menu, either schools or jobs
    const [isFormOpen, setIsFormOpen] = useState(false); 

    return (
        <>
            {!isFormOpen && jobs.map((job) => {
                <button onClick={() => setIsFormOpen(true)} key={job.id}>
                    {job.company}
                </button>
            })}

            {!isFormOpen && <div className="add-item-cell"><button className="add-item" onClick={() => setIsFormOpen(true)}>add work experience</button></div>}
            {isFormOpen && <ExperienceForm setJobs={setJobs} setIsFormOpen={setIsFormOpen} />}
        </>
    )
}

export { EducationMenu, ExperienceMenu };