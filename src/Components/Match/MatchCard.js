import React, { useEffect, useState } from "react";
import { getBySign } from "../../Common/Services/MatchService.js";
import MatchLogic from "./MatchLogic.js";
import MatchForm from "./MatchForm.js"
const MatchCard = () => {

    const [match, setMatch] = useState(false);
    const [sign1, setSign1] = useState([]);
    const [sign2, setSign2] = useState([]);

    useEffect(() => {
        console.log("hello");
        if (match) {
            console.log("getting sign from birthday...");
            setMatch(false);

            var firstSign = document.getElementById("firstSign").value;
            var secondSign = document.getElementById("secondSign").value;

            console.log(firstSign);
            console.log(secondSign);

            var idOne = assignId(firstSign);
            var idTwo = assignId(secondSign);
            
            getBySign(idOne).then((sign1) => {
                setSign1(sign1);
                return sign1;
            }).then((sign1) => {
            getBySign(idTwo).then((sign2) => {
                setSign2(sign2);
                return [sign1, sign2];
            }).then(([sign1,sign2]) => {
                console.log(sign1);
                console.log(sign2);
                var message = MatchLogic(sign1, sign2);
                document.getElementById("sign-header").innerHTML = `${message}`;
            })});
            // var result1 = getBySign(firstSign);
            // var result2 = getBySign(secondSign);
            // console.log(sign1);
            // console.log(sign2);


        }
    });

    const onClickHandler = (e) => {
        console.log("clicky click");
        e.preventDefault();
        setMatch(true);
    };

    function assignId (sign) {
        switch (sign) {
            case "Aquarius":
                return("Bbkj5Ig8l7");
            case "Aries":
                return("H4ubk6KZIp");
            case "Cancer":
                return("UkVTsBk98O");
            case "Capricorn":
                return("QUoZY3jWMf");
            case "Gemini":
                return("Gv3sh3ZHou");
            case "Leo":
                return("eDFo0MqPfm");
            case "Libra":
                return("0J1ILOahq7");
            case "Pisces":
                return("62DoSUp7eL");
            case "Sagittarius":
                return("q3Rumgpjhp");
            case "Scorpio":
                return("gTl1yMHLCl");
            case "Taurus":
                return("bYP1gyZVzm");
            case "Virgo":
                return("cSTF0lWWDA");
        }
    }

    return(
    <div className="body">
        <MatchForm onClick={onClickHandler}/>
        <div id="card" className="card">
            <div id="card-title" className="card-title">
                <h2 className="">your signs are...</h2>
                <h1 id="sign-header" className=" sign"></h1>
            </div>
            <div id="card-img" className="card-img "></div>
            <div id="card-name" className="card-name  "></div>
        </div>
    </div>
    );
}

export default MatchCard;