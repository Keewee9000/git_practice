function randomCharacter(fight) {
    return fight[Math.floor(Math.random() * fight.length)];
};

const character = {
    location: ["Tatooine Sand Dunes", "Corusant", "Star Destroyer", "Mon Cala (Sea)"],
    prerequisite: ["None", "No force powers", "No weapons", "Complete Darkness"],
    hero: ["Obi-Wan", "Luke", "Baby Yoda", "Anakin", "Yoda", "Commander Rex", "Jedi Knight Revan", "Din Djarin", "R2-D2", "Mace Windu", "Ahsoka", "Commander Cody", "Han Solo", "Chewbacca", "Rose Tico"],
    villain: ["Darth Vader", "Boba Fett", "Moff Gideon", "Jabba The Hutt", "Malgus", "Count Dooku", "General Grievous", "Bossk", "Grand Moff Tarkin", "Palpatine", "Maul", "Asajj Ventress", "Cade Bane", "Poggle The Lesser", "Darth Revan"]
};

console.log(`The location of the fight: ${randomCharacter(character.location)}`);
console.log(`The prerequisites are: ${randomCharacter(character.prerequisite)}`);
console.log(`The Hero is: ${randomCharacter(character.hero)}`);
console.log(`The villain is: ${randomCharacter(character.villain)}`);









