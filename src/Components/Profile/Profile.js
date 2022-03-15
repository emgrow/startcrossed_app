import "../../css/profile.css";
import "../../css/styles.css";
import ProfileCard from "./ProfileCard.js"

export default function Profile(){
    function getBirthday(){
        console.log("getting birthday info...");
    }
    return(
        <div class="profile-body">
            {/* <form action="getBirthday()">
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
                // onClick="getBirthday()"
                >
                Submit</button>
            </form> */}
            <ProfileCard />
            {/* <div class="body">
            <div id="card" class="card ">
                <div id="card-title" class="card-title">
                    <h2 class="">your sign is...</h2>
                    <h1 id="sign-header" class=" sign"></h1>
                </div>
                <div id="card-img" class="card-img "></div>
                <div id="card-name" class="card-name  "></div>
            </div>
            </div> */}
        </div>
    );
}