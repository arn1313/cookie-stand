'use strict';

var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allStores = [];
var theTable = document.getElementById('');

function Store(location, minCustomerPerHour, maxCustomerPerHour, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  allStores.push(this);
};
new Store('Pike Place Market', 23, 65, 6.3);
new Store('Alki', 2, 16, 4.6);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);

Store.prototype.calcCustomersThisHour = function(min, max) {
  for (var i = 0; i < hours.length; i++) {
    var numberCustomerPerHour = Math.ceil(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1)) + this.minCustomerPerHour;
    this.customersEachHour.push(this.customersEachHour);
  }
  return customersEachHour;
};
Store.prototype.cookiesPerHour = function() {
  for (var j = 0; j < hours.length; j++){
    var avgCookiesPerHour = Math.ceil(this.customersEachHour[j] * this.avgCookiesPerCustomer);
    this.cookiesEachHour.push(cookiesEachHour);
  }
  return cookiesEachHour;
};
// calcCookiesThisHour: function() {
//
// cookiesEachHour: [],

// var pikePlaceMarket = {
//   location: 'Pike Place Market',
//   minCustomerPerHour: 23,
//   maxCustomerPerHour: 65,
//   avgCookiesPerCustomer: 6.3,
//   calcCustomersEachHours: function(){},
//   customersEachHour: [],

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
//   }
// };
// pikePlaceMarket.calcCustomersThisHour();
// pikePlaceMarket.cookiesPerHour();
// pikePlaceMarket.render();
// //rinse and repeat
// var alkiStore = {
//   location: 'Alki',
//   minCustomerPerHour: 2,
//   maxCustomerPerHour: 16,
//   avgCookiesPerCustomer: 4.6,
//   calcCustomersEachHours: function(){},
//   customersEachHour: [],
//   calcCookiesThisHour: function(){},
//   cookiesEachHour: [], calcCustomersThisHour: function(min, max) {
//     for (var i = 0; i < hours.length; i++) {
//       var numberCustomerPerHour = Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1)) + this.minCustomerPerHour;
//       this.customersEachHour.push(numberCustomerPerHour);
//     }
//     return numberCustomerPerHour;
//   },
//   cookiesPerHour: function() {
//     for (var j = 0; j < hours.length; j++){
//       var avgCookiesPerHour = Math.floor(this.customersEachHour[j] * this.avgCookiesPerCustomer);
//       this.cookiesEachHour.push(avgCookiesPerHour);
//     }
//   },
//   render: function() {
//     var ulEl = document.getElementById('locationName2');
//     console.log(ulEl);
//     ulEl.textContent = this.location;
//     for (var f = 0; f < hours.length; f++){
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[f] + ' : ' + ' ' + this.cookiesEachHour[f] + ' cookies sold per hour.';
//       console.log(liEl);
//       ulEl.appendChild(liEl);
//     }
//   }
// };
// alkiStore.calcCustomersThisHour();
// alkiStore.cookiesPerHour();
// alkiStore.render();
// var seaTac = {
//   location: 'SeaTac Airport',
//   minCustomerPerHour: 3,
//   maxCustomerPerHour: 24,
//   avgCookiesPerCustomer: 1.2,
//   calcCustomersEachHours: function(){},
//   customersEachHour: [],
//   calcCookiesThisHour: function(){},
//   cookiesEachHour: [],
//   calcCustomersThisHour: function(min, max) {
//     for (var i = 0; i < hours.length; i++) {
//       var numberCustomerPerHour = Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1)) + this.minCustomerPerHour;
//       this.customersEachHour.push(numberCustomerPerHour);
//     }
//     return numberCustomerPerHour;
//   },
//   cookiesPerHour: function() {
//     for (var j = 0; j < hours.length; j++){
//       var avgCookiesPerHour = Math.floor(this.customersEachHour[j] * this.avgCookiesPerCustomer);
//       this.cookiesEachHour.push(avgCookiesPerHour);
//     }
//   },
//   render: function() {
//     var ulEl = document.getElementById('locationName3');
//     console.log(ulEl);
//     ulEl.textContent = this.location;
//     for (var f = 0; f < hours.length; f++){
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[f] + ' : ' + ' ' + this.cookiesEachHour[f] + ' cookies sold per hour.';
//       console.log(liEl);
//       ulEl.appendChild(liEl);
//     }
//   }
// };
// seaTac.calcCustomersThisHour();
// seaTac.cookiesPerHour();
// seaTac.render();
// var seattleCenter = {
//   location: 'Seattle Center',
//   minCustomerPerHour: 11,
//   maxCustomerPerHour: 38,
//   avgCookiesPerCustomer: 3.7,
//   calcCustomersEachHours: function(){},
//   customersEachHour: [],
//   calcCookiesThisHour: function(){},
//   cookiesEachHour: [],
//   calcCustomersThisHour: function(min, max) {
//     for (var i = 0; i < hours.length; i++) {
//       var numberCustomerPerHour = Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1)) + this.minCustomerPerHour;
//       this.customersEachHour.push(numberCustomerPerHour);
//     }
//     return numberCustomerPerHour;
//   },
//   cookiesPerHour: function() {
//     for (var j = 0; j < hours.length; j++){
//       var avgCookiesPerHour = Math.floor(this.customersEachHour[j] * this.avgCookiesPerCustomer);
//       this.cookiesEachHour.push(avgCookiesPerHour);
//     }
//   },
//   render: function() {
//     var ulEl = document.getElementById('locationName4');
//     console.log(ulEl);
//     ulEl.textContent = this.location;
//     for (var f = 0; f < hours.length; f++){
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[f] + ' : ' + ' ' + this.cookiesEachHour[f] + ' cookies sold per hour.';
//       console.log(liEl);
//       ulEl.appendChild(liEl);
//     }
//   }
// };
// seattleCenter.calcCustomersThisHour();
// seattleCenter.cookiesPerHour();
// seattleCenter.render();
// var capitolHill = {
//   location: 'Captitol Hill',
//   minCustomerPerHour: 20,
//   maxCustomerPerHour: 38,
//   avgCookiesPerCustomer: 2.3,
//   calcCustomersEachHours: function(){},
//   customersEachHour: [],
//   calcCookiesThisHour: function(){},
//   cookiesEachHour: [],
//   calcCustomersThisHour: function(min, max) {
//     for (var i = 0; i < hours.length; i++) {
//       var numberCustomerPerHour = Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1)) + this.minCustomerPerHour;
//       this.customersEachHour.push(numberCustomerPerHour);
//     }
//     return numberCustomerPerHour;
//   },
//   cookiesPerHour: function() {
//     for (var j = 0; j < hours.length; j++){
//       var avgCookiesPerHour = Math.floor(this.customersEachHour[j] * this.avgCookiesPerCustomer);
//       this.cookiesEachHour.push(avgCookiesPerHour);
//     }
//   },
//   render: function() {
//     var ulEl = document.getElementById('locationName5');
//     console.log(ulEl);
//     ulEl.textContent = this.location;
//     for (var f = 0; f < hours.length; f++){
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[f] + ' : ' + ' ' + this.cookiesEachHour[f] + ' cookies sold per hour.';
//       console.log(liEl);
//       ulEl.appendChild(liEl);
//     }
//   }
// };
// capitolHill.calcCustomersThisHour();
// capitolHill.cookiesPerHour();
// capitolHill.render();
// // // // 2. Calculate and  store amount of cookies sold each hour at each location.
// // // // 3. store results for each location in a seperate array-perhaps as a property of the object representing that location
// // // // 4. calculate the sum of these hourly totals-see example in lesson- display to the sales.html
