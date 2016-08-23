"use strict";
var specializations = {
    1: "Generic",
    2: "Brushes",
    3: "Eye-brows",
    4: "Eye-liner",
    5: "Eye-mascara",
    6: "Eye-primer",
    7: "Eye-shadow",
    8: "BB-cream",
    9: "Blush",
    10: "Bronzer",
    11: "Concealer",
    12: "Countour",
    13: "Foundation",
    14: "Highlighter",
    15: "Powder",
    16: "Face-primer",
    17: "Lip-gloss",
    18: "Lip-liner",
    19: "Liquid-lipstick",
    20: "Lipstick",
    21: "Sponge"
};
var country = {
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
function getParameters(req) {
    var p = req.body;
    var values = {};
    values['name'] = p.name;
    values['country'] = p.country;
    values['creation_year'] = p.creation_year;
    values['short_description'] = p.short_description;
    values['specialities'] = p.specialities;
    values['description'] = p.long_description;
    values['website'] = "http://www." + p.website;
    if (p.fb_site != "")
        values['fb_site'] = "http://www.facebook.com/" + p.fb_site;
    if (p.youtube != "")
        values['youtube'] = "http://www.youtube.com/" + p.youtube;
    if (p.twitter != "")
        values['twitter'] = "http://www.twitter.com/" + p.twitter;
    if (p.instagram != "")
        values['instagram'] = "http://www.instagram.com/" + p.instagram;
    return values;
}
exports.getParameters = getParameters;
