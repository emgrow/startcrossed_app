import axios from 'axios';

import React, {Component} from 'react';

class EditForm extends Component {

	state = {

	// Initially, no file is selected
	selectedFile: null
	};
	
	// On file select (from the pop up)
	onFileChange = event => {
	
	// Update the state
	this.setState({ selectedFile: URL.createObjectURL(event.target.files[0]) });
	
	};
	
	// On file upload (click the upload button)
	onFileUpload = () => {
	
	// Create an object of formData
	const formData = new FormData();
	
	// Update the formData object
	formData.append(
		"myFile",
		this.state.selectedFile,
		this.state.selectedFile.name
	);
	
	// Details of the uploaded file
	console.log(this.state.selectedFile);
	
	// Request made to the backend api
	// Send formData object
	axios.post("api/uploadfile", formData);
	};
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<div>
			<h2>File Details:</h2>
<img src={this.state.selectedFile} />

		</div>
		);
	} else {
		return (
		<div>
			<br />
			<h4>Choose before Pressing the Upload button</h4>
		</div>
		);
	}
	};
	
	render() {
	
	return (
		<div>
			<h3>
			Show yourself to the universe!
			</h3>
			<div>
				<input type="file" onChange={this.onFileChange} />
				{/* <button onClick={this.onFileUpload}>
				Upload!
				</button> */}
				<br />
				<br />
				Write a short bio for people to see here:

            <textarea id="bio" name="bio" maxLength="300" rows="4" cols="50"></textarea>
			<button
        type="submit"
        class="btn btn-outline-light form-control"
        // onclick="location.href='../src/main.html'"
        // onblur="getForm()"
        onSubmit={this.onSubmit}
        id="submit"
      >
        Submit
      </button>
		
				{/* <img src={this.state.file}/> */}
			</div>
		{this.fileData()}
		</div>
	);
	}
}

export default EditForm;

