'use strict';

var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allStores = [];
var theTable = document.getElementById('CookiesStores');

function Store(location, minCustomerPerHour, maxCustomerPerHour, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.totalSales = 0;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.calcCookiesPerHour();
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
new Store('Pike Place Market', 23, 65, 6.3);
new Store('Alki', 2, 16, 4.6);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);

Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  tdEl = document.createElement('td');
  tdEl.textContent = this.customersEachHour;
  trEl.appendChild(tdEl);
  tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesEachHour;
  trEl.appendChild(tdEl);
  theTable.appendChild(trEl);
  console.log(theTable);
};

function myHeader(){
  var tHead = document.getElementById('Hours');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  tHead.appendChild(thEl);
  var thEl = document.createElement('th');
  thEl.textContent = 'Hours';
  tHead.appendChild(thEl);
  var thEl = document.createElement('th');
  thEl.textContent = 'Total Sales';
  tHead.appendChild(thEl);
}

function renderallStores() {
  for (var l = 0; l < allStores.length; l++);
  allStores[0].render();
}

myHeader();
renderallStores();
//   render: function() {
//     var ulEl = document.getElementById('locationName');
//     console.log(ulEl);
//     ulEl.textContent = this.location;
//     for (var f = 0; f < hours.length; f++){
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[f] + ' : ' + ' ' + this.cookiesEachHour[f] + ' cookies sold per hour.';
//       console.log(liEl);
//       ulEl.appendChild(liEl);
//     }
//     }
//   },
