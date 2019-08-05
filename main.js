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

planetsArr.forEach(function (planet) {
  var array = document.createElement('option');
  array.text = planet[0];
  array.value = planet[0];
  document.getElementById('planets').appendChild(array);
})

function calculateWeight(weight, planetName) {
  for (let i = 0; i < planets.length; i++) {
    if (planets[i][0] == planetName) {
      var multiply = planets[i][1] * weight;
    }
  }
  return multiply;
}

function hidePluto() {
  $('select option:nth-child(11)').hide();
}

function showPluto() {
  $('select option:nth-child(11)').show();
}

function checkPluto() {
  if (document.getElementById('checkBox').checked) {
    hidePluto();
  } else {
    showPluto();
  }
}

function addNewPlanet() {
  var newPlanet = document.getElementById('newPlanet').value;
  if (newPlanet == '') {
    alert('please add new planet')
    return false;
  }

  var newMultiplier = document.getElementById('newMultiplier').value;
  if (newMultiplier == '') {
    alert('please add multiplier')
    return false;
  }

  planets.push([newPlanet, newMultiplier]);
  var arr = document.createElement('option');
  arr.value = newPlanet;
  document.getElementById('planets').appendChild(arr).textContent = newPlanet;
  document.getElementById('newPlanet').value = '';
  document.getElementById('newMultiplier').value = '';
}


function handleClickEvent(e) {
  var userWeight = $('#user-weight').val();
  if (userWeight == '') 
    alert('please type weight');
    return false;
  }

  var planetName = $('#planets').val();
  var result = calculateWeight(userWeight, planetName);
  $('#output').text('If you were on ' + planetName + ',' + ' you would weigh ' + result + 'lbs!');


$('#calculate-button').click(handleClickEvent);

