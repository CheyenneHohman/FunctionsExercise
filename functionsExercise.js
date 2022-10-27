//1 
function fozzieBear() {
    console.log(`Wocka wocka!`);
}
fozzieBear();

let b = `=`.repeat(15);
console.log(b);

//2 
function beaker(speak) {
    console.log(speak.repeat(4));
}
beaker('Meep ');

console.log(b);

//3 
function muppetShow (a, b) {
    if (a === `Muppet` && b === `Show`){
        console.log(`It's time to play the music. It's time to light the lights.`);
    }
}
muppetShow(`Muppet`, `Show`);

console.log(b);

//4
function kermit() {
    return`Kermit the Frog`;
}
kermit();
console.log(kermit());

console.log(b);

//5
function muppetShowSeasons (seasons) {
    if (seasons === 5) {
        return true;
    } else {
        return false;
    }
 }

    console.log(muppetShowSeasons(5)); // true
    console.log(muppetShowSeasons(4)); // false
 console.log(b);

 //6
const manOrMuppet = function(){
    console.log(`Am I a man or am I a Muppet?`);
}
manOrMuppet();

console.log(b);

//7 
rainbowConnection = () => `Someday we'll find it, the rainbow connection, the lovers, the dreamers, and me`;

console.log(rainbowConnection());
console.log(b);

//8 -- No 

//9 -- Yes

//10 
//a
const newMuppetMovies = [
    `The Muppets`,
    `Muppets Most Wanted`
];
//b 
const upperMovies = newMuppetMovies.map(function(x){
    return x.toUpperCase();
});
console.log(upperMovies);

// OR 
// const upperMovies = newMuppetMovies.map(movies => movies.toUpperCase());
// console.log(upperMovies);

// BONUS 
//11 
//a 

const oldMuppetMovies = [
    `The Muppet Movie`,
    `The Muppets Take Manhattan`,
    `The Great Muppet Caper`,
    `The Muppet Christmas Carol`,
    `Muppet Treasure Island`,
    `Muppets from Space`
];

//b
const twoMovies = oldMuppetMovies.filter(a => a.length === 22);
console.log(twoMovies);

//12
//a
const charactersOne = [`Statler`, `Waldorf`];

//b 
const charactersTwo = [`The Swedish Chef`, `Animal`, `Rowlf`];

//c
randomMuppet = (characters) => {
    console.log(`${characters[Math.floor(Math.random() * characters.length )]}`);
}

//d
randomMuppet(charactersOne);
randomMuppet(charactersTwo);

//13 
caps = (string) => {
    let newString = ``;
    for (i = 0; i < string.length; i ++) {
        if (i % 2 === 0) {
            newString += string[i].toUpperCase();
        } else {
            newString += string[i].toLowerCase();
        }
    }
    return newString;
}
console.log(caps(`Hello World`));

caps = (string) => {
    let newString = ``;
    for (i = 0; i < string.length; i ++) {
        if (i % 2 === 0) {
            newString += string[i].toUpperCase();
        } else {
            newString += string[i].toLowerCase();
        }
    }
    return newString;
}
console.log(caps(`Hello World`));