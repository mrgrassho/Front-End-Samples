var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

var months = [{ name:'January', days:31 },
              { name:'February', days:28 },
              { name:'March', days:31 },
              { name:'April', days:30 },
              { name:'May', days:31 },
              { name:'June', days:30 },
              { name:'July', days:31 },
              { name:'August', days:31 },
              { name:'September', days:30 },
              { name:'October', days:31 },
              { name:'November', days:30 },
              { name:'December', days:31 }];

select.addEventListener('change', changeMonth);

function changeMonth() {
  var choice = select.value;
  let i = 0;
  let days = months[0].days;
  let name = months[0].name;
  while (i < months.length) {
    if (months[i].name === choice){
      name = months[i].name;
      days = months[i].days;
      break;
    }
    i++;
  }
  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}
