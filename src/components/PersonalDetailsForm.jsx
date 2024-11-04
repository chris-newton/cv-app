function PersonalDetailsForm() {
    return (
        <form className="personal-details-form">
            <fieldset className="input-start">
                <label htmlFor="firstName">First name</label>
                <input
                    type="text" 
                    name="firstName"
                    autoComplete="off"
                    required
                />
            </fieldset>

            <fieldset className="input-end">
                <label htmlFor="lastName">Last name</label>
                <input 
                    type="text" 
                    name="lastName"
                    autoComplete="off"
                    required
                />
            </fieldset>

            <fieldset>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email"
                    autoComplete="off"
                    required
                />
            </fieldset>

            <fieldset>
                <label htmlFor="phone">Phone</label>
                <input 
                    type="tel" 
                    name="phone"
                    autoComplete="off"
                    required
                />
            </fieldset>
            
            <fieldset>
                <label htmlFor="location">Location</label>
                <input 
                    type="text" 
                    name="location"
                    autoComplete="off"
                    required
                />
            </fieldset>
        </form>
    )
}

export default PersonalDetailsForm;