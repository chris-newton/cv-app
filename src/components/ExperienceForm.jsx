import { useState } from "react";

function ExperienceForm({ setJobs, setIsFormOpen }) {
    const [position, setPosition] = useState('');
    const [company, setCompany] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setJobs({});

        setIsFormOpen(false);
    }

    return (
        <form className="experience-form" onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="position">Position</label>
                <input
                    type="text"
                    name="position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    autoComplete="off"
                    required
                />
            </fieldset>
            
            <fieldset>
                <label htmlFor="company">Company</label>
                <input
                    type="text"
                    name="degree"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    autoComplete="off"
                    required
                />
            </fieldset>
            
            <fieldset className="input-start">
                <label htmlFor="startDate">Start date</label>
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
                <label htmlFor="endDate">End date</label>
                <input
                    type="date"
                    name="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    autoComplete="off"
                    required
                />
            </fieldset>

            <fieldset>
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    autoComplete="off"
                    required
                />
            </fieldset>
            
            <fieldset className="experience-form-buttons">
                <input type="button" name="experience-form-delete" value="Delete" />

                <div>
                    <input type="button" onClick={() => setIsFormOpen(false)} name="experience-form-cancel" value="Cancel" />
                    <input type="submit" name="experience-form-submit" value="Add" />
                </div>
            </fieldset>
        </form>
    )
}

export default ExperienceForm;