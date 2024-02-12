start = words

words = vs: (word / anyChar)* {
    return vs.filter(function(v) {
        return v;
    });
}

word = alphabet: $alphabet+ apostroph: "'"? {
    if (apostroph) {
        return alphabet + apostroph;
    } else {
        return alphabet;
    }
}

alphabet
    = largeAlpha
    / largeEpsilon
    / largeEta
    / largeIota
    / largeOmicron
    / largeUpsilon
    / largeOmega
    / largeRho
    / largeConsonant
    / smallAlpha
    / smallEpsilon
    / smallEta
    / smallIota
    / smallOmicron
    / smallUpsilon
    / smallOmega
    / smallRho
    / smallConsonant

largeAlpha = [ΑἈἌᾌἊᾊἎᾎᾈἉἍᾍἋᾋᾋἏᾉΆᾺᾼ]
largeEpsilon = [ΕἘἜἚἙἝἛΈῈ]
largeEta = [ΗἨἬᾜἪᾚἮᾞᾘἩἭᾝἫᾛᾛἯᾙΉῊῌ]
largeIota = [ΙἸἼἺἾἹἽἻἿΊῚΪ]
largeOmicron = [ΟὈὌὊὉὍὋΌῸ]
largeUpsilon = [ΥὙὝὛὟΎῪΫ]
largeOmega = [ΩὨὬᾬὪᾪὮᾮᾨὩὭᾭὫᾫᾫὯᾩΏῺῼ]
largeRho = [ΡῬ]
largeConsonant = [ΒΓΔΖΘΚΛΜΝΞΠΣΤΦΧΨ]

smallAlpha = [αἀἄᾄἂᾂἆᾆᾀἁἅᾅἃᾃᾃἇᾁάᾴὰᾲᾶᾷᾳ]
smallEpsilon = [εἐἔἒἑἕἓέὲ]
smallEta = [ηἠἤᾔἢᾒἦᾖᾐἡἥᾕἣᾓᾓἧᾑήῄὴῂῆῇῃ]
smallIota = [ιἰἴἲἶἱἵἳἷίὶῖϊΐῒῗ]
smallOmicron = [οὀὄὂὁὅὃόὸ]
smallUpsilon = [υὐὔὒὖὑὕὓὗύὺῦϋΰῢῧ]
smallOmega = [ωὠὤᾤὢᾢὦᾦᾠὡὥᾥὣᾣᾣὧᾡώῴὼῲῶῷῳ]
smallRho = [ρῤῥ]
smallConsonant = [βγδζθκλμνξπσςτφχψ]

anyChar = . {
    return null;
}