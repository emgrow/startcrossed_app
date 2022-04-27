import React from "react";
import Parse from "parse";
// import { addSignProfile } from "../../Common/Services/ProfileService.js";
// import ProfileForm from "./ProfileForm.js";
import Aquarius from "../../img/Aquarius.jpg";
import Aries from "../../img/Aries.jpg";
import Cancer from "../../img/Cancer.jpg";
import Capricorn from "../../img/Capricorn.jpg";
import Gemini from "../../img/Gemini.jpg";
import Leo from "../../img/Leo.jpg";
import Libra from "../../img/Libra.jpg";
import Pisces from "../../img/Pisces.jpg";
import Sagittarius from "../../img/Sagittarius.jpg";
import Scorpio from "../../img/Scorpio.jpg";
import Taurus from "../../img/Taurus.jpg";
import Virgo from "../../img/Virgo.jpg";

const ProfileCard = () => {
     function zodiac(day, month){
        var signs = [
            "Capricorn",
            "Aquarius",
            "Pisces",
            "Aries",
            "Taurus",
            "Gemini",
            "Cancer",
            "Leo",
            "Virgo",
            "Libra",
            "Scorpio",
            "Sagittarius"
          ];
        console.log("in zodiac function");
        // returns the zodiac sign according to day and month ( https://coursesweb.net/ )
        var last_day = [19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
        var s =  day > last_day[month - 1] ? signs[month] : signs[month - 1];
        console.log("s: ", s);
        return s;
    }

    var birthday = Parse.User.current().get("birthday").split("-");
    console.log(birthday);
    
    var sign = zodiac(parseInt(birthday[2]), parseInt(birthday[1]));
    console.log(sign);

    var src;
    if (sign==="Aquarius") {src=Aquarius};
    if (sign==="Aries") {src=Aries};
    if (sign==="Cancer") {src=Cancer};
    if (sign==="Capricorn") {src=Capricorn};
    if (sign==="Gemini") {src=Gemini};
    if (sign==="Leo") {src=Leo};
    if (sign==="Libra") {src=Libra};
    if (sign==="Pisces") {src=Pisces};
    if (sign==="Sagittarius") {src=Sagittarius};
    if (sign==="Scorpio") {src=Scorpio};
    if (sign==="Taurus") {src=Taurus};
    if (sign==="Virgo") {src=Virgo};
    
   


    return (
        <div class="body">
            {/* <ProfileForm onClick={onClickHandler}/> */}
            <div id="card" className="card ">
                <div id="card-title" className="card-title">
                    <h2>your sign is...</h2>
                    
                    <h1 id="sign-header" className="sign">{sign}</h1>
                </div>
                
                <img id="card-img" className="card-img" src={src}/>
                {/* <div id="card-name" class="card-name"></div> */}
            </div>
        </div>
    );
};

export default ProfileCard;
