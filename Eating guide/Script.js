const seasonalFoods = {
  spring: ['Asparagus', 'Peas', 'Radishes', 'Strawberries'],
  summer: ['Tomatoes', 'Zucchini', 'Blueberries', 'Cucumbers'],
  autumn: ['Pumpkin', 'Apples', 'Brussels Sprouts', 'Carrots'],
  winter: ['Cabbage', 'Potatoes', 'Leeks', 'Oranges']
};

document.getElementById('seasonSelect').addEventListener('change', function () {
  const season = this.value;
  const foodList = document.getElementById('foodList');
  foodList.innerHTML = '';
  seasonalFoods[season].forEach(food => {
    const li = document.createElement('li');
    li.textContent = food;
    foodList.appendChild(li);
  });
});

// Default load
document.getElementById('seasonSelect').dispatchEvent(new Event('change'));

function calculateFootprint() {
  const meatMeals = parseInt(document.getElementById('meat').value);
  const impact = meatMeals * 7; // Assume 7kg CO₂ per meat meal (approx.)
  const result = document.getElementById('result');
  result.textContent = `Your weekly carbon footprint from meat: ~${impact} kg CO₂.`;
}
