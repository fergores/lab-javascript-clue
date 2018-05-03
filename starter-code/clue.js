
var character1 = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur",
};

var character2 = {
    frst_name:   "Doctor",
    lst_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist",
};

var character3 = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer",
};

var character4 = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor",
};

var character5 = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité",
};


var character6 = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player",
};

// Weapons
var weapon1 = {
    name: "rope", 
    weight: 10,
};
var weapon2 = {
    name: "knife",     
    weight: 8,
};
var weapon3 = {
    name: "candlestick",
    weight: 2,
};

var weapon4 = {
    name: "dumbbell",
    weight: 30,
};

var weapon5 = {
    name: "poison",
    weight: 2,
};

var weapon6 = {
    name: "axe",
    weight: 15,
};
var weapon7 = {
    name: "bat",
    weight: 13,
};

var weapon8 = {
    name: "trophy",
    weight: 25,
};
var weapon9 = {
    name: "pistol",
    weight: 20,
};



// Rooms
var rooms1 = {
    name:"Dinning Room",
};

var rooms2 = {
    name: "Conservatory",
};

var rooms3 = {
    name: "Kitchen",
};

var rooms4 = {
    name: "Study",
};
var rooms5 = {
    name: "Library",
};
var rooms6 = {
    name: "Billiard Room",
};
var rooms7 = {
    name: "Lounge",
};
var rooms8 = {
    name: "Ballroom",
};
var rooms9 = {
    name: "Hall",
};
var rooms10 = {
    name: "Spa",
};
var rooms11 = {
    name: "Living Room",
};
var rooms12 = {
    name: "Observatory",
};
var rooms13 = {
    name: "Theater",
};
var rooms14 = {
    name: "Guest House",
};
var rooms15 = {
    name: "Patio",
};


// Characters Collection
var charactersArray = [];


charactersArray.push(character1, character2, character3, character4, character5, character6);

arrCharacters = charactersArray.length;

aleatorioCharacters= random(arrCharacters) - 1;



// Rooms' Collection
var roomsArray = [];

roomsArray.push(rooms1, rooms2, rooms3, rooms4, rooms5, rooms6, rooms7, rooms8, rooms9, rooms10, rooms11, rooms12, rooms13, rooms14, rooms15);


arrRoom = roomsArray.length;

aleatorioRoom = random(arrRoom) - 1;
// Weapons Collection
var weaponsArray = [];

weaponsArray.push(weapon1, weapon2,weapon3,weapon4,weapon5,weapon6,weapon7,weapon8,weapon9);

arrWeapons = weaponsArray.length;

aleatorioWeapons = random(arrWeapons) - 1;

function random(length) {

    numero1 = (Math.random() * length + 1);
    console.log (numero1);
    numero = (Math.round(numero1));
    numero = numero ;
    console.log(numero);
    return numero;
    
}

console.log('new' , charactersArray[aleatorioCharacters]);
console.log('new' , roomsArray[aleatorioRoom]);
console.log('new' , weaponsArray[aleatorioWeapons]);

mistery(aleatorioCharacters,aleatorioRoom,aleatorioWeapons);

function mistery (aleatorioCharacters,aleatorioRoom,aleatorioWeapons){

    console.log( charactersArray[aleatorioCharacters].first_name , charactersArray[aleatorioCharacters].last_name,'ha matadado a Mr.Boddy usando',weaponsArray[aleatorioWeapons].name,'en',roomsArray[aleatorioRoom].name);

}
