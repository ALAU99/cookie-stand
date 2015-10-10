// Global Variables
var time = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

//=================================================================

//Object including properties
function Cookies(storeLocation, minCustHour, maxCustHour, avgCookiesCust) {
  this.storeLocation = storeLocation;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookiesCust = avgCookiesCust;
  this.cookiesHour = 0;
  this.totalCookies = 0;

//=================================================================

  // Calculations
  this.randCustHour = function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  };
  this.totalCookiesHour = function() {
    return Math.floor(this.randCustHour(this.maxCustHour, this.minCustHour) * this.avgCookiesCust);
  };

//=================================================================
  
  // Transfer data into table
  this.createData = function(time) {
    var pullTable = document.getElementById('tableId');
    var tableRow = pullTable.insertRow(1);
    var tableLocation = tableRow.insertCell(0);
    tableLocation.innerHTML = this.storeLocation;

    for (var i = 0; i < time.length; i++) {
      var tableData = tableRow.insertCell(1);

      this.cookiesHour = this.totalCookiesHour();
      this.totalCookies += this.cookiesHour;

      tableData.innerHTML = this.cookiesHour;

      if (i === 7) {
        var tableData2 = tableRow.insertCell(9);
        tableData2.innerHTML = this.totalCookies;
      };
    };
  };
};

//=================================================================

// Object data
var pikePlace = new Cookies('Pike Place Market', 17, 88, 5.2);
pikePlace.createData(time);

var seaTac = new Cookies('SeaTac Airport', 6, 44, 1.2);
seaTac.createData(time);

var southCenter = new Cookies('Southcenter Mall', 11, 38, 1.9);
southCenter.createData(time);

var bellSquare = new Cookies('Bellevue Square', 20, 48, 3.3);
bellSquare.createData(time);

var alkiBeach = new Cookies('Alki Beach', 3, 24, 2.6);
alkiBeach.createData(time);

//==================================================================

// Store new data into table
var newData = function(e) {
  e.preventDefault();

  var newLocation = document.getElementById('store');
  var newMinCust = document.getElementById('minhour');
  var newMaxCust = document.getElementById('maxhour');
  var newAvgCookies = document.getElementById('avgcookies');

  var loadData = new Cookies(newLocation.value, newMinCust.value, newMaxCust.value, newAvgCookies.value);

  // Console log debugging
  console.log(newLocation);
  console.log(newMinCust);
  console.log(newMaxCust);
  console.log(newAvgCookies);
  console.log(loadData);

  // Placeholders
  store.value = null;
  minhour.value = null;
  maxhour.value = null;
  avgcookies.value = null;

  // New object data
  loadData.createData(time);
};

//==================================================================

// Button listener
var buttonClick = document.getElementById("button");
buttonClick.addEventListener('click', newData);
