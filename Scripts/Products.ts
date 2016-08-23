

export var types = {
    1: "Sponge",
    2: "Brushe",
    3: "Eye-brow",
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
};
export var brands = {
    1: 'Loreal',
    2: 'MAC',
    3: 'Estee Lauder',
    4:'Make Up For Ever',
    5: 'Yves Saint Laurent',
    6: 'Real Techniques',
    7: 'Sigma',
    8: 'Morphe',
    9: 'Zoeva',
    10: 'Geek',
    11: 'H&M',
    13: 'Max factor',
    14: 'Clinique',
    15: 'Sleek',
    16: 'Smashbox',
    17: 'Lorac',
    18: 'Laura Mercier',
    19: 'Urban Decay',
    20: 'KIKO',
    21: 'NYX',
    22: 'Dior',
    23: 'Channel',
    24: 'Bobbi brown',
    25: 'Sephora',
    26: 'Benefit',
    27: 'Nars',
    28: 'Maybelline',
    29: 'Gerard Cosmetics',
    30: 'Dose of Colours'
}

export function getParameters(req) {
    var p = req.body;
    var values = {};
    values['name'] = p.name;
    values['type'] = p.type;
    values['brand'] = p.brand;
    values['short_description'] = p.short_description;
    values['description'] = p.long_description;
    values['colors'] = p.colors;
    values['formats'] = p.formats;
    values['website'] = p.website;

    return values;
}
