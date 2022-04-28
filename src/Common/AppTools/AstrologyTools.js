export const zodiac = (birthday) => {
    var list = birthday.split("-");
    var day = list[2];
    var month = list[1];
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

export const element = (sign) => {
    if (sign === "Scorpio" || sign === "Cancer" || sign === "Pisces") { return "water"; }
    if (sign === "Virgo" || sign === "Taurus" || sign === "Capricorn") { return "earth"; }
    if (sign === "Gemini" || sign === "Aquarius" || sign === "Libra") { return "air"; }
    if (sign === "Leo" || sign === "Aries" || sign === "Sagittarius") { return "fire"; }
}

export const quality = (sign) => {
    if (sign === "Libra" || sign === "Aries" || sign === "Cancer" || sign === "Capricorn") { return "cardinal"; }
    if (sign === "Virgo" || sign === "Sagittarius" || sign === "Gemini" || sign === "Pisces") { return "mutable"; }
    if (sign === "Scorpio" || sign === "Leo" || sign === "Taurus" || sign === "Aquarius") { return "fixed"; }
}