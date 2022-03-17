import React from "react"

const ProfileForm = ({onClick}) => {
    return (
    <div>
        <div class="mb-3">
            <label for="firstName" class="form-label"
                >First Name</label>
            <input
                type="text"
                class="form-control"
                id="firstName" />
        </div>
        <div class="mb-3">
        <label for="birthDay"  class="form-label">Birthday</label>
        <input
            type="date"
            class="form-control"
            id="birthDay" />
        </div>
        <button
            type="submit"
            class="btn btn-outline-light"
            id="submit"
            onClick={onClick}
            >
            Submit</button>
    </div>
    );
};

export default ProfileForm;