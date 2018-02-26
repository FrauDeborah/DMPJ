//Fixing capitalization exercise

var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  // write your code just below here
  var lowerCaseCity = input.toLowerCase();
  var firstLetter = lowerCaseCity.slice(0,1);
  var capitolizedCity = firstLetter.toUpperCase() + lowerCaseCity.slice(1)
  var result = capitolizedCity;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
