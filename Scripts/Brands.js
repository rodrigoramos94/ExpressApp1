"use strict";
exports.countries = {
    1: "Australia",
    2: "Brazil",
    3: "Canada",
    4: "China",
    5: "France",
    6: "Germany",
    7: "Greece",
    8: "India",
    9: "Israel",
    10: "Italy",
    11: "Japan",
    12: "South Korea",
    13: "Spain",
    14: "Philippines",
    15: "Portugal",
    16: "Singapore",
    17: "Sweden",
    18: "Trinidad and Tobago",
    19: "United Kingdom",
    20: "United States",
};
function getParameters(p) {
    var values = {};
    values['name'] = p.name;
    values['country'] = p.country;
    values['creation_year'] = p.creation_year;
    values['short_description'] = p.short_description;
    values['specialities'] = p.specialities;
    values['description'] = p.long_description;
    values['website'] = "http://www." + p.website;
    if (p.fb_site != "" && p.fb_site != undefined)
        values['fb_site'] = "http://www.facebook.com/" + p.fb_site;
    if (p.youtube != "" && p.fb_site != undefined)
        values['youtube'] = "http://www.youtube.com/" + p.youtube;
    if (p.twitter != "" && p.fb_site != undefined)
        values['twitter'] = "http://www.twitter.com/" + p.twitter;
    if (p.instagram != "" && p.fb_site != undefined)
        values['instagram'] = "http://www.instagram.com/" + p.instagram;
    return values;
}
exports.getParameters = getParameters;
