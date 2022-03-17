
function MatchLogic (sign1, sign2) {
    const Elements = {
        Fire: 1,
        Water: 2,
        Earth: 3,
        Air: 4
    }
    Object.freeze(Elements);
    console.log("entered matchlogic");
    var signEl1 = sign1.get("Element");
    var signEl2 = sign2.get("Element");
    var numEl1 = eval("Elements." + `${signEl1}`);
    var numEl2 = eval("Elements." + `${signEl2}`);
    var signsum = numEl1 + numEl2;
    console.log(signsum);
    if (sign1.get("SignName") == sign2.get("SignName"))
        return("Very Compatible");
    else if (sign1.get("Element") == sign2.get("Element"))
        return("Compatible");
    else if (signsum == 5) {
        if (sign1.get("Quality") == sign2.get("Quality"))
            return("Very Compatible");
        else
            return("Compatible");
    }
    else if (sign1.get("Quality") == sign2.get("Quality"))
        return("Very Incompatible");
    else
        return("Incompatible");
}

export default MatchLogic;