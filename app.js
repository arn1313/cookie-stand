'use strict';

var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allStores = [];
var theTable = document.getElementById('cookiestores');

function Store(location, minCustomerPerHour, maxCustomerPerHour, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.totalSales = 0;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.calcCookiesPerHour();
  this.render();
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

for ( var i = 0; i < allStores.length; i++){
  allStores[i].render();
}

var pike = new Store('Pike Place Market', 23, 65, 6.3);
var alki = new Store('Alki', 2, 16, 4.6);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var center = new Store('Seattle Center', 11, 38, 3.7);
var caphill = new Store('Capitol Hill', 20, 38, 2.3);

// function printAllStores() {
//   for(var b = 0; b < allStores.length; b++) {
//     console.log(allStores[b]);
//     allStores[b].render();
//   }
// }
// function myHeader() {
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('th');
//   thEl.textContent = 'Location';
//   trEl.appendChild(thEl);
//   for(var c = 0; c < hours.length; c++) {
//     var thEl = document.createElement('th');
//     thEl.textContent = hours[c];
//     trEl.appendChild(thEl);
//   }
//   // theTable.appendChild(trEl);
//   var thEl = document.createElement('th');
//   thEl.textContent = 'Daily Location Total';
//   trEl.appendChild(thEl);
// }

// printAllStores();
// myHeader();

// create an element
// give it content
// append it
// tdEl = document.createElement('td');
// tdEl.textContent = this.totalsales;
// trEl.appendChild(tdEl);
