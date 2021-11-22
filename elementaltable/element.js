//DOM load event
window.addEventListener("DOMContentLoaded", () => {    

    //Set speech recognition
    window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition(),
          elementSquare = document.querySelector(".element"),
          elementName = document.querySelector(".element-name"),
          elementAbbr = document.querySelector(".element-abbr"),
          elementNum = document.querySelector(".element-atomic-number"),
          elementWeight = document.querySelector(".element-atomic-weight"),
          heardOutput = document.querySelector(".heard-output"),
          elements = {
              Hydrogen: {
                  abbreviation: "H",
                  atomicNumber: 1,
                  atomicWeight: 1,
                  color: "#b297ca"
              },
              Helium: {
                  abbreviation: "He",
                  atomicNumber: 2,
                  atomicWeight: 4,
                  color: "#add8e6"
              },
              Lithium: {
                  abbreviation: "Li",
                  atomicNumber: 3,
                  atomicWeight: 7,
                  color: "#f08080"
              },
              Beryllium: {
                  abbreviation: "Be",
                  atomicNumber: 4,
                  atomicWeight: 9,
                  color: "#ffc04d"
              },
              Boron: {
                  abbreviation: "B",
                  atomicNumber: 5,
                  atomicWeight: 11,
                  color: "#8bffd8"
              },
              Carbon: {
                  abbreviation: "C",
                  atomicNumber: 6,
                  atomicWeight: 12,
                  color: "#b297ca"
              },
              Nitrogen: {
                  abbreviation: "N",
                  atomicNumber: 7,
                  atomicWeight: 14,
                  color: "#b297ca"
              },
              Oxygen: {
                  abbreviation: "O",
                  atomicNumber: 8,
                  atomicWeight: 16,
                  color: "#b297ca"
              },
              Fluorine: {
                  abbreviation: "F",
                  atomicNumber: 9,
                  atomicWeight: 19,
                  color: "#ffc0cb"
              },
              Neon: {
                  abbreviation: "Ne",
                  atomicNumber: 10,
                  atomicWeight: 20,
                  color: "#add8e6"
              },
              Sodium: {
                  abbreviation: "Na",
                  atomicNumber: 11,
                  atomicWeight: 23,
                  color: "#f08080"
              },
              Magnesium: {
                  abbreviation: "Mg",
                  atomicNumber: 12,
                  atomicWeight: 24,
                  color: "#ffc04d"
              },
              Aluminium: {
                  abbreviation: "Al",
                  atomicNumber: 13,
                  atomicWeight: 27,
                  color: "#90ee90"
              },
              Silicon: {
                  abbreviation: "Si",
                  atomicNumber: 14,
                  atomicWeight: 28,
                  color: "#8bffd8"
              },
              Phosphorus: {
                  abbreviation: "P",
                  atomicNumber: 15,
                  atomicWeight: 31,
                  color: "#b297ca"
              },
              Sulphur: {
                  abbreviation: "S",
                  atomicNumber: 16,
                  atomicWeight: 32,
                  color: "#b297ca"
              },
              Chlorine: {
                  abbreviation: "Cl",
                  atomicNumber: 17,
                  atomicWeight: 35,
                  color: "#ffc0cb"
              },
              Argon: {
                  abbreviation: "Ar",
                  atomicNumber: 18,
                  atomicWeight: 40,
                  color: "#add8e6"
              },
              Potassium: {
                  abbreviation: "K",
                  atomicNumber: 19,
                  atomicWeight: 39,
                  color: "#f08080"
              },
              Calcium: {
                  abbreviation: "Ca",
                  atomicNumber: 20,
                  atomicWeight: 40,
                  color: "#ffc04d"
              },
              Scandium: {
                  abbreviation: "Sc",
                  atomicNumber: 21,
                  atomicWeight: 45,
                  color: "#ffff4d"
              },
              Titanium: {
                  abbreviation: "Ti",
                  atomicNumber: 22,
                  atomicWeight: 48,
                  color: "#ffff4d"
              },
              Vanadium: {
                  abbreviation: "V",
                  atomicNumber: 23,
                  atomicWeight: 51,
                  color: "#ffff4d"
              },
              Chromium: {
                  abbreviation: "Cr",
                  atomicNumber: 24,
                  atomicWeight: 52,
                  color: "#ffff4d"
              },
              Manganese: {
                  abbreviation: "Mn",
                  atomicNumber: 25,
                  atomicWeight: 55,
                  color: "#ffff4d"
              },
              Iron: {
                  abbreviation: "Fe",
                  atomicNumber: 26,
                  atomicWeight: 56,
                  color: "#ffff4d"
              },
              Cobalt: {
                  abbreviation: "Co",
                  atomicNumber: 27,
                  atomicWeight: 59,
                  color: "#ffff4d"
              },
              Nickel: {
                  abbreviation: "Ni",
                  atomicNumber: 28,
                  atomicWeight: 59,
                  color: "#ffff4d"
              },
              Copper: {
                  abbreviation: "Cu",
                  atomicNumber: 29,
                  atomicWeight: 64,
                  color: "#ffff4d"
              },
              Zinc: {
                  abbreviation: "Zn",
                  atomicNumber: 30,
                  atomicWeight: 65,
                  color: "#ffff4d"
              },
              Gallium: {
                  abbreviation: "Ga",
                  atomicNumber: 31,
                  atomicWeight: 70,
                  color: "#90ee90"
              },
              Germanium: {
                  abbreviation: "Ge",
                  atomicNumber: 32,
                  atomicWeight: 73,
                  color: "#8bffd8"
              },
              Arsenic: {
                  abbreviation: "As",
                  atomicNumber: 33,
                  atomicWeight: 75,
                  color: "#8bffd8"
              },
              Selenium: {
                  abbreviation: "Se",
                  atomicNumber: 34,
                  atomicWeight: 79,
                  color: "#b297ca"
              },
              Bromine: {
                  abbreviation: "Br",
                  atomicNumber: 35,
                  atomicWeight: 80,
                  color: "#ffc0cb"
              },
              Krypton: {
                  abbreviation: "Kr",
                  atomicNumber: 36,
                  atomicWeight: 84,
                  color: "#add8e6"
              },
              Rubidium: {
                  abbreviation: "Rb",
                  atomicNumber: 37,
                  atomicWeight: 85,
                  color: "#f08080"
              },
              Strontium: {
                  abbreviation: "Sr",
                  atomicNumber: 38,
                  atomicWeight: 88,
                  color: "#ffc04d"
              },
              Yttrium: {
                  abbreviation: "Y",
                  atomicNumber: 39,
                  atomicWeight: 89,
                  color: "#ffff4d"
              },
              Zirconium: {
                  abbreviation: "Zr",
                  atomicNumber: 40,
                  atomicWeight: 91,
                  color: "#ffff4d"
              },
              Niobium: {
                  abbreviation: "Nb",
                  atomicNumber: 41,
                  atomicWeight: 93,
                  color: "#ffff4d"
              },
              Molybdenum: {
                  abbreviation: "Mo",
                  atomicNumber: 42,
                  atomicWeight: 96,
                  color: "#ffff4d"
              },
              Technetium: {
                  abbreviation: "Tc",
                  atomicNumber: 43,
                  atomicWeight: 98,
                  color: "#ffff4d"
              },
              Ruthenium: {
                  abbreviation: "Ru",
                  atomicNumber: 44,
                  atomicWeight: 101,
                  color: "#ffff4d"
              },
              Rhodium: {
                  abbreviation: "Rh",
                  atomicNumber: 45,
                  atomicWeight: 103,
                  color: "#ffff4d"
              },
              Palladium: {
                  abbreviation: "Pd",
                  atomicNumber: 46,
                  atomicWeight: 106,
                  color: "#ffff4d"
              },
              Silver: {
                  abbreviation: "Ag",
                  atomicNumber: 47,
                  atomicWeight: 108,
                  color: "#ffff4d"
              },
              Cadmium: {
                  abbreviation: "Cd",
                  atomicNumber: 48,
                  atomicWeight: 112,
                  color: "#ffff4d"
              },
              Indium: {
                  abbreviation: "In",
                  atomicNumber: 49,
                  atomicWeight: 115,
                  color: "#90ee90"
              },
              Tin: {
                  abbreviation: "Sn",
                  atomicNumber: 50,
                  atomicWeight: 119,
                  color: "#90ee90"
              },
              Antimony: {
                  abbreviation: "Sb",
                  atomicNumber: 51,
                  atomicWeight: 122,
                  color: "#8bffd8"
              },
              Tellurium: {
                  abbreviation: "Te",
                  atomicNumber: 52,
                  atomicWeight: 128,
                  color: "#8bffd8"
              },
              Iodine: {
                  abbreviation: "I",
                  atomicNumber: 53,
                  atomicWeight: 127,
                  color: "#ffc0cb"
              },
              Xenon: {
                  abbreviation: "Xe",
                  atomicNumber: 54,
                  atomicWeight: 131,
                  color: "#add8e6"
              },
              Caesium: {
                  abbreviation: "Cs",
                  atomicNumber: 55,
                  atomicWeight: 133,
                  color: "#f08080"
              },
              Barium: {
                  abbreviation: "Ba",
                  atomicNumber: 56,
                  atomicWeight: 137,
                  color: "#ffc04d"
              },
              Lanthanum: {
                  abbreviation: "La",
                  atomicNumber: 57,
                  atomicWeight: 139,
                  color: "#8fbc8f"
              },
              Cerium: {
                  abbreviation: "Ce",
                  atomicNumber: 58,
                  atomicWeight: 140,
                  color: "#8fbc8f"
              },
              Praseodymium: {
                  abbreviation: "Pr",
                  atomicNumber: 59,
                  atomicWeight: 141,
                  color: "#8fbc8f"
              },
              Neodymium: {
                  abbreviation: "Nd",
                  atomicNumber: 60,
                  atomicWeight: 144,
                  color: "#8fbc8f"
              },
              Promethium: {
                  abbreviation: "Pm",
                  atomicNumber: 61,
                  atomicWeight: 145,
                  color: "#8fbc8f"
              },
              Samarium: {
                  abbreviation: "Sm",
                  atomicNumber: 62,
                  atomicWeight: 150,
                  color: "#8fbc8f"
              },
              Europium: {
                  abbreviation: "Eu",
                  atomicNumber: 63,
                  atomicWeight: 152,
                  color: "#8fbc8f"
              },
              Gadolinium: {
                  abbreviation: "Gd",
                  atomicNumber: 64,
                  atomicWeight: 157,
                  color: "#8fbc8f"
              },
              Terbium: {
                  abbreviation: "Tb",
                  atomicNumber: 65,
                  atomicWeight: 159,
                  color: "#8fbc8f"
              },
              Dysprosium: {
                  abbreviation: "Dy",
                  atomicNumber: 66,
                  atomicWeight: 163,
                  color: "#8fbc8f"
              },
              Holmium: {
                  abbreviation: "Ho",
                  atomicNumber: 67,
                  atomicWeight: 165,
                  color: "#8fbc8f"
              },
              Erbium: {
                  abbreviation: "Er",
                  atomicNumber: 68,
                  atomicWeight: 167,
                  color: "#8fbc8f"
              },
              Thulium: {
                  abbreviation: "Tm",
                  atomicNumber: 69,
                  atomicWeight: 169,
                  color: "#8fbc8f"
              },
              Ytterbium: {
                  abbreviation: "Yb",
                  atomicNumber: 70,
                  atomicWeight: 173,
                  color: "#8fbc8f"
              },
              Lutetium: {
                  abbreviation: "Lu",
                  atomicNumber: 71,
                  atomicWeight: 175,
                  color: "#8fbc8f"
              },
              Hafnium: {
                  abbreviation: "Hf",
                  atomicNumber: 72,
                  atomicWeight: 178,
                  color: "#ffff4d"
              },
              Tantalum: {
                  abbreviation: "Ta",
                  atomicNumber: 73,
                  atomicWeight: 181,
                  color: "#ffff4d"
              },
              Tungsten: {
                  abbreviation: "W",
                  atomicNumber: 74,
                  atomicWeight: 184,
                  color: "#ffff4d"
              },
              Rhenium: {
                  abbreviation: "Re",
                  atomicNumber: 75,
                  atomicWeight: 186,
                  color: "#ffff4d"
              },
              Osmium: {
                  abbreviation: "Os",
                  atomicNumber: 76,
                  atomicWeight: 190,
                  color: "#ffff4d"
              },
              Iridium: {
                  abbreviation: "Ir",
                  atomicNumber: 77,
                  atomicWeight: 192,
                  color: "#ffff4d"
              },
              Platinum: {
                  abbreviation: "Pt",
                  atomicNumber: 78,
                  atomicWeight: 195,
                  color: "#ffff4d"
              },
              Gold: {
                  abbreviation: "Au",
                  atomicNumber: 79,
                  atomicWeight: 197,
                  color: "#ffff4d"
              },
              Mercury: {
                  abbreviation: "Hg",
                  atomicNumber: 80,
                  atomicWeight: 201,
                  color: "#ffff4d"
              },
              Thallium: {
                  abbreviation: "Tl",
                  atomicNumber: 81,
                  atomicWeight: 204,
                  color: "#90ee90"
              },
              Lead: {
                  abbreviation: "Pb",
                  atomicNumber: 82,
                  atomicWeight: 207,
                  color: "#90ee90"
              },
              Bismuth: {
                  abbreviation: "Bi",
                  atomicNumber: 83,
                  atomicWeight: 209,
                  color: "#90ee90"
              },
              Polonium: {
                  abbreviation: "Po",
                  atomicNumber: 84,
                  atomicWeight: 209,
                  color: "#8bffd8"
              },
              Astatine: {
                  abbreviation: "At",
                  atomicNumber: 85,
                  atomicWeight: 210,
                  color: "#ffc0cb"
              },
              Radon: {
                  abbreviation: "Rn",
                  atomicNumber: 86,
                  atomicWeight: 222,
                  color: "#add8e6"
              },
              Francium: {
                  abbreviation: "Fr",
                  atomicNumber: 87,
                  atomicWeight: 223,
                  color: "#f08080"
              },
              Radium: {
                  abbreviation: "Ra",
                  atomicNumber: 88,
                  atomicWeight: 226,
                  color: "#ffc04d"
              },
              Actinium: {
                  abbreviation: "Ac",
                  atomicNumber: 89,
                  atomicWeight: 227,
                  color: "#a4d246"
              },
              Thorium: {
                  abbreviation: "Th",
                  atomicNumber: 90,
                  atomicWeight: 232,
                  color: "#a4d246"
              },
              Protactinium: {
                  abbreviation: "Pa",
                  atomicNumber: 91,
                  atomicWeight: 231,
                  color: "#a4d246"
              },
              Uranium: {
                  abbreviation: "U",
                  atomicNumber: 92,
                  atomicWeight: 238,
                  color: "#a4d246"
              },
              Neptunium: {
                  abbreviation: "Np",
                  atomicNumber: 93,
                  atomicWeight: 237,
                  color: "#a4d246"
              },
              Plutonium: {
                  abbreviation: "Pu",
                  atomicNumber: 94,
                  atomicWeight: 244,
                  color: "#a4d246"
              },
              Americium: {
                  abbreviation: "Am",
                  atomicNumber: 95,
                  atomicWeight: 243,
                  color: "#a4d246"
              },
              Curium: {
                  abbreviation: "Cm",
                  atomicNumber: 96,
                  atomicWeight: 247,
                  color: "#a4d246"
              },
              Berkelium: {
                  abbreviation: "Bk",
                  atomicNumber: 97,
                  atomicWeight: 247,
                  color: "#a4d246"
              },
              Californium: {
                  abbreviation: "Cf",
                  atomicNumber: 98,
                  atomicWeight: 251,
                  color: "#a4d246"
              },
              Einsteinium: {
                  abbreviation: "Es",
                  atomicNumber: 99,
                  atomicWeight: 252,
                  color: "#a4d246"
              },
              Fermium: {
                  abbreviation: "Fm",
                  atomicNumber: 100,
                  atomicWeight: 257,
                  color: "#a4d246"
              },
              Mendelevium: {
                  abbreviation: "Md",
                  atomicNumber: 101,
                  atomicWeight: 258,
                  color: "#a4d246"
              },
              Nobelium: {
                  abbreviation: "No",
                  atomicNumber: 102,
                  atomicWeight: 259,
                  color: "#a4d246"
              },
              Lawrencium: {
                  abbreviation: "Lr",
                  atomicNumber: 103,
                  atomicWeight: 262,
                  color: "#a4d246"
              },
              Rutherfordium: {
                  abbreviation: "Rf",
                  atomicNumber: 104,
                  atomicWeight: 267,
                  color: "#ffff4d"
              },
              Dubnium: {
                  abbreviation: "Db",
                  atomicNumber: 105,
                  atomicWeight: 268,
                  color: "#ffff4d"
              },
              Seaborgium: {
                  abbreviation: "Sg",
                  atomicNumber: 106,
                  atomicWeight: 271,
                  color: "#ffff4d"
              },
              Bohrium: {
                  abbreviation: "Bh",
                  atomicNumber: 107,
                  atomicWeight: 272,
                  color: "#ffff4d"
              },
              Hassium: {
                  abbreviation: "Hs",
                  atomicNumber: 108,
                  atomicWeight: 270,
                  color: "#ffff4d"
              },
              Meitnerium: {
                  abbreviation: "Mt",
                  atomicNumber: 109,
                  atomicWeight: 276,
                  color: "#ffff4d"
              },
              Darmstadtium: {
                  abbreviation: "Ds",
                  atomicNumber: 110,
                  atomicWeight: 281,
                  color: "#ffff4d"
              },
              Roentgenium: {
                  abbreviation: "Rg",
                  atomicNumber: 111,
                  atomicWeight: 280,
                  color: "#ffff4d"
              },
              Copernicium: {
                  abbreviation: "Cn",
                  atomicNumber: 112,
                  atomicWeight: 285,
                  color: "#ffff4d"
              },
              Nihonium: {
                  abbreviation: "Nh",
                  atomicNumber: 113,
                  atomicWeight: 284,
                  color: "#90ee90"
              },
              Flerovium: {
                  abbreviation: "Fl",
                  atomicNumber: 114,
                  atomicWeight: 289,
                  color: "#90ee90"
              },
              Moscovium: {
                  abbreviation: "Mc",
                  atomicNumber: 115,
                  atomicWeight: 288,
                  color: "#90ee90"
              },
              Livermorium: {
                  abbreviation: "Lv",
                  atomicNumber: 116,
                  atomicWeight: 293,
                  color: "#90ee90"
              },
              Tennessine: {
                  abbreviation: "Ts",
                  atomicNumber: 117,
                  atomicWeight: 294,
                  color: "#ffc0cb"
              },
              Oganesson: {
                  abbreviation: "Og",
                  atomicNumber: 118,
                  atomicWeight: 294,
                  color: "#add8e6"
              }
          };

    //Start speech recognition
    recognition.start();

    //Listen for when the user finishes talking
    recognition.addEventListener("result", e => {

        //Get transcript of user speech
        const transcript = e.results[0][0].transcript
        .toLowerCase()
        .replace(/\s/g, "")
        .replace(/^\w/, c => c.toUpperCase());

        //Output transcript
        heardOutput.textContent = `Heard: ${transcript}`;

        //Check if transcript is valid element
        if (elements[transcript]) {

            const elementObj = elements[transcript];

            //Output element
            elementName.textContent = transcript;
            elementAbbr.textContent = elementObj.abbreviation;
            elementNum.textContent = elementObj.atomicNumber;
            elementWeight.textContent = elementObj.atomicWeight;
            elementSquare.style.backgroundColor = elementObj.color;

        }  

    });

    //Restart speech recognition after user has finished talking
    recognition.addEventListener("end", recognition.start);
});