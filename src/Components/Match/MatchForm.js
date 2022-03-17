import React from "react"

const MatchForm = ({onClick}) => {
    return (
    <div>
        <div className="mb-3">
            <label htmlFor="firstSign" className="form-label"
                >Sign of First Person</label>
            <input
                type="text"
                className="form-control"
                id="firstSign" />
        </div>
        <div className="mb-3">
        <label htmlFor="secondSign" className="form-label">Sign of Second Person</label>
        <input
            type="text"
            className="form-control"
            id="secondSign" />
        </div>
        <button
            type="submit"
            className="btn btn-outline-light"
            id="submit"
            onClick={onClick}
            >
            Submit</button>
    </div>
    );
};

export default MatchForm;