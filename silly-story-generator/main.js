var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

function fahrenheitToCentigrade(a){
  return (a - 32) * 5/9;
}

function poundsToStone(a){
  return a / 14;
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ["Willy the Goblin","Big Daddy","Father Christmas"];
let insertY = ["the soup kitchen","Disneyland","the White House"];
let insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);

  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    var temperature = Math.round(fahrenheitToCentigrade(94));
    temperature += ' centigrades';
    var weight =  Math.round(poundsToStone(300));
    weight += ' stones';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
  document.querySelector('.textBox').style.backgroundColor = 'orange';
}
