const spicyFoods = [
  { id: 1, name: "Buffalo Wings", cuisine: "American", heatLevel: 3 },
  { id: 2, name: "Mapo Tofu", cuisine: "Sichuan", heatLevel: 6 },
];

const newSpicyFoods = [
  { id: 3, name: "Green Curry", cuisine: "Thai", heatLevel: 9 },
  { id: 4, name: "Enchiladas", cuisine: "Mexican", heatLevel: 2 },
  { id: 5, name: "5 Alarm Chili", cuisine: "American", heatLevel: 5 },
];

function getNewSpicyFood() {
  return newSpicyFoods.shift();
}

export { spicyFoods, getNewSpicyFood };
