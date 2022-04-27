import "../../css/styles.css";
import Profile from "../Profile/Profile.js"
import EditForm from "./EditForm.js";
import "../../css/profile.css";

export default function Edit(){
    return(
        // Edit photo button -> save photo path
        // Profile ID name is key

       // Plus button to Add question
       // List out each question with clickable card
// Short response box with "Done" button
        <div id="profile-body" class="profile-body">
            {/* <ProfileForm onClick={onClickHandler}/> */}
            <div id="card" class="card ">
                <div id="card-title" class="card-title">
            <EditForm />
            </div>
            </div>
        </div>
    );
}
