import { useState } from "react";

function EducationForm({ setSchools, setIsFormOpen }) {
    // State to store each input field's value
    const [schoolName, setSchoolName] = useState('');
    const [degree, setDegree] = useState('');
    const [fieldOfStudy, setFieldOfStudy] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        
        // Create a new education object
        const newEducation = {
            id: crypto.randomUUID(),
            schoolName,
            degree,
            fieldOfStudy,
            startDate,
            endDate,
        };

        // Update schools list
        setSchools((prevSchools) => [...prevSchools, newEducation]);

        // Clear form fields
        setSchoolName('');
        setDegree('');
        setFieldOfStudy('');
        setStartDate('');
        setEndDate('');

        // Close the form
        setIsFormOpen(false);
    }

    return (
        <form className="education-form" onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="school">School</label>
                <input
                    type="text"
                    name="schoolName"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    autoComplete="off"
                    required
                />
            </fieldset>
            
            <fieldset>
                <label htmlFor="degree">Degree</label>
                <input
                    type="text"
                    name="degree"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    autoComplete="off"
                    required
                />
            </fieldset>
            
            <fieldset>
                <label htmlFor="fieldOfStudy">Field of Study</label>
                <input
                    type="text"
                    name="fieldOfStudy"
                    value={fieldOfStudy}
                    onChange={(e) => setFieldOfStudy(e.target.value)}
                    autoComplete="off"
                    required
                />
            </fieldset>
            
            <fieldset className="input-start">
                <label htmlFor="startDate">Started</label>
                <input
                    type="date"
                    name="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    autoComplete="off"
                    required
                />
            </fieldset>
            
            <fieldset className="input-end">
                <label htmlFor="endDate">Completed</label>
                <input
                    type="date"
                    name="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    autoComplete="off"
                    required
                />
            </fieldset>

            <fieldset className="education-form-buttons">
                <input type="button" name="education-form-delete" value="Delete" />

                <div>
                    <input type="button" onClick={() => setIsFormOpen(false)} name="education-form-cancel" value="Cancel" />
                    <input type="submit" name="education-form-submit" value="Add" />
                </div>
            </fieldset>
        </form>
    )
}

export default EducationForm;