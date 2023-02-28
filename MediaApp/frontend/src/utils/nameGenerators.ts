const animals = [
  "Dog",
  "Cow",
  "Cat",
  "Horse",
  "Donkey",
  "Tiger",
  "Lion",
  "Panther",
  "Leopard",
  "Cheetah",
  "Bear",
  "Elephant",
  "Polar",
  "bear",
  "Turtle",
  "Tortoise",
  "Crocodile",
  "Rabbit",
  "Porcupine",
  "Hare",
  "Hen",
  "Pigeon",
  "Albatross",
  "Crow",
  "Fish",
  "Dolphin",
  "Frog",
  "Whale",
  "Alligator",
  "Eagle",
  "Flying",
  "squirrel",
  "Ostrich",
  "Fox",
  "Goat",
  "Jackal",
  "Emu",
  "Armadillo",
  "Eel",
  "Goose",
  "Arctic",
  "fox",
  "Wolf",
  "Beagle",
  "Gorilla",
  "Chimpanzee",
  "Monkey",
  "Beaver",
  "Orangutan",
  "Antelope",
  "Bat",
];

const characteristics = [
  "Calm",
  "Gentle",
  "Mysterious",
  "Silly",
  "Careful",
  "Gloomy",
  "Nervous",
  "Smart",
  "Caring",
  "Greedy",
  "Nice",
  "Sneaky",
  "Cautious",
  "Happy",
  "Noisy",
  "Spoiled",
  "Charming",
  "Helpful",
  "Nosy",
  "Successful",
  "Cheerful",
  "Honest",
  "Obnoxious",
  "Sweet",
  "Clumsy",
  "Hopeful",
  "Optimistic",
  "Talented",
  "Confident",
  "Humble",
  "Organized",
  "Talkative",
];

export const generateRandomName = () => {
  const animal = animals[Math.random() * (animals.length - 1)];
  const characteristic =
    characteristics[Math.random() * (characteristics.length - 1)];
  return `${animal} ${characteristic}`;
};
