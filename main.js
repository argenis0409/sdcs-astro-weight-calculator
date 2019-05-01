// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
  
var planetsArr = planets.reverse();

planetsArr.forEach(function(planet) {
var array = document.createElement('option');
array.text = planet[0];
array.value = planet[0];
document.getElementById('planets').appendChild(array);
})

  function calculateWeight(weight, planetName) {
  for(let i = 0; i < planets.length; i++) {
    if(planets[i][0] == planetName) {
     var multiply = planets[i][1] * weight;
    }
  }
  return multiply;
  }
  

  function handleClickEvent(e) {
    // 3. Create a variable called userWeight and assign the value of the user's weight.
  var userWeight = $('#user-weight').val();
    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
  var planetName = $('#planets').val();
    // 5. Create a variable called result and assign the value of the new calculated weight.
  var result = calculateWeight(userWeight, planetName);
    // 6. Write code to display the message shown in the screenshot.
  $('#output').text('If you were on ' + planetName +','+ ' you would weigh ' + result + 'lbs!');

  }

  $('#calculate-button').click(handleClickEvent);

