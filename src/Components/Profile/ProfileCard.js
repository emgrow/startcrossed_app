import React from "react"
import ProfileForm from "./ProfileForm.js";
const ProfileCard = () => {
    return (
        <div class="body">
            <ProfileForm />
            <div id="card" class="card ">
                <div id="card-title" class="card-title">
                    <h2 class="">your sign is...</h2>
                    <h1 id="sign-header" class=" sign"></h1>
                </div>
                <div id="card-img" class="card-img "></div>
                <div id="card-name" class="card-name  "></div>
            </div>
        </div>
    );
};

export default ProfileCard;
