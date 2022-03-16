import React, { useEffect, useState } from "react";
import { addSignProfile } from "../../Common/Services/ProfileService.js";
import ProfileForm from "./ProfileForm.js";

const ProfileCard = () => {
    const [getBirthday, setGetBirthday] = useState(false);

    if(getBirthday){
        console.log("getting sign from birthday...");
        setGetBirthday(false);

        var firstName = document.getElementById("firstName").value;
        var bday = document.getElementById("birthDay").value;

        var date = bday.split("-");
        console.log("bday: ", bday);
        console.log("name: ", firstName);
        console.log("date[0] ", date[0]);
        // currently having a problem where zodiac returns Pisces for chis when it shouldn't be
        // so something is off in the organization of the JSON with the lists
        var sign = zodiac(parseInt(date[2], 10), parseInt(date[1], 10));
        console.log("sign: ", sign);

        if (sign) {
            document.getElementById("sign-header").innerHTML = `${sign}`;
            document.getElementById("card-img").src = "../../img/${sign}.jpg";
            if (sign === "Cancer" || (sign === "Pisces") | (sign === "Scorpio")) {
               document.getElementById("app").class = "water";
               console.log("class is: ", document.getElementById("app").class);
            }
            if (sign === "Aries" || (sign === "Leo") | (sign === "Sagittarius")) {
               document.getElementById("app").class = "fire";
            }
            if (sign === "Taurus" || (sign === "Virgo") | (sign === "Capricorn")) {
              document.getElementById("app").class = "earth";
            }
            if (sign === "Gemini" || (sign === "Libra") | (sign === "Aquarius")) {
              document.getElementById("app").class = "air";
            }
          }
        
          document.getElementById("card-name").innerHTML = `
          <h2>${firstName}</h2>
          `;
          // PARSE MODEL 1
          // write sign and birthday info back to Parse
          addSignProfile(firstName, bday, sign);

    }

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
        return day > last_day[month - 1] ? signs[month] : signs[month - 1];
    }
    

    const onClickHandler = () => {
        setGetBirthday(true);
    };
    return (
        <div class="body">
            <ProfileForm onClick={onClickHandler}/>
            <div id="card" class="card ">
                <div id="card-title" class="card-title">
                    <h2>your sign is...</h2>
                    <h1 id="sign-header" class="sign"></h1>
                </div>
                <div class="card-img">
                <img 
                    id="card-img"
                    height="100%"
                    width="100%"
                />
                </div>
                <div id="card-name" class="card-name"></div>
            </div>
        </div>
    );
};

export default ProfileCard;
