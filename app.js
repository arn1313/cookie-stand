'use strict';

var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allStores = [];
var theTable = document.getElementById('cookiestores');
// var fishInput = document.getElementById('fishInput');

function Store(location, minCustomerPerHour, maxCustomerPerHour, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.totalSales = 0;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.calcCookiesPerHour();
  // this.render();
  allStores.push(this);
};

Store.prototype.calcCustomersThisHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var numberCustomerPerHour = Math.ceil(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1)) + this.minCustomerPerHour;
    this.customersEachHour.push(numberCustomerPerHour);
  }
  return this.customersEachHour;
};
Store.prototype.calcCookiesPerHour = function() {
  this.calcCustomersThisHour();
  for (var j = 0; j < hours.length; j++) {
    var avgCookiesPerHour = Math.ceil(this.customersEachHour[j] * this.avgCookiesPerCustomer);
    this.cookiesEachHour.push(avgCookiesPerHour);
    this.totalSales += avgCookiesPerHour;
  }
  return this.cookiesEachHour;
};

Store.prototype.render = function() {
  // console.log('render');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);

  for(var a = 0; a < hours.length; a++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[a];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalSales;
  trEl.appendChild(tdEl);
  theTable.appendChild(trEl);
};

new Store('Pike Place Market', 23, 65, 6.3);
new Store('Alki', 2, 16, 4.6);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);

function makeHeader() {
  // console.log('render header');

  var thEl = document.createElement('th');
  var trEl = document.createElement('tr');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for ( var i = 0; i < hours.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Total Sales';
  trEl.appendChild(thEl);
  theTable.appendChild(trEl);
}

function renderTable() {
  // console.log('render table');
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}

function makeFooter() {
  // console.log('make footer');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals For All Locations';
  trEl.appendChild(thEl);

  var totallyTotals = 0;
  var hourlyTotal = 0;

  for (var i = 0; i < hours.length; i++) {
    hourlyTotal = 0;
    for (var j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].cookiesEachHour[i];
      totallyTotals += allStores[j].cookiesEachHour[i];
    }
    thEl = document.createElement('th');
    thEl.textContent = hourlyTotal;
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = totallyTotals;
  trEl.appendChild(thEl);

  theTable.appendChild(trEl);
}

function createUserEvent(event) {
  event.preventDefault();
  var loc = event.target.newStore.value;
  var min = parseInt(event.target.minCust.value);
  var max = parseInt(event.target.maxCust.value);
  var avg = parseInt(event.target.avgCookie.value);
  new Store(loc, min, max, avg);
  allStores.push();
  // console.log('first call');
  theTable.innerHTML = '';

  clearForm();
  makeHeader();
  renderTable();
  makeFooter();
}
function clearForm(){
  event.target.newStore.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgCookie.value = null;
}

makeHeader();
renderTable();
makeFooter();

fishInput.addEventListener('submit', createUserEvent);
