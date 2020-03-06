const fs = require('fs');

const genders = ['F', 'M'];
const femaleNames = ['Felicia', 'Emma', 'Marzena', 'Ania','Laura', 'Eliza'];
const maleNames = ['Mariusz', 'Adam', 'Leon', 'Eustachy', 'Neon', 'Adrian'];
const lastNames = ['Kuc', 'Buc', 'Nowak', 'Kowalski', 'Olejny', 'Mikke-Korwin', 'Czeski', 'Film', 'Jak', 'Tak'];
const randChoise = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const people = [];

for (let i = 0; i < 20; i++) {
  people[i] = {
      gender: randChoise(genders),
      firstName: false,
      lastName: randChoise(lastNames),
      age: Math.floor(Math.random() * 120),
    };
  if (people[i].gender === 'F') {
    people[i].firstName = randChoise(femaleNames)
  } else {
    people[i].firstName = randChoise(maleNames)
  };
}

fs.writeFile('identities.json', JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

