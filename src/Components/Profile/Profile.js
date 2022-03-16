import "../../css/profile.css";
import "../../css/styles.css";
import ProfileCard from "./ProfileCard.js"

export default function Profile(){
    function getBirthday(){
        console.log("getting birthday info...");
    }
    return(
        <div id="profile-body" class="profile-body">
            <ProfileCard />
        </div>
    );
}