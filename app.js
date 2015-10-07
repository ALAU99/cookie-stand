function Cookies(location, minCustHour, maxCustHour, avgCookiesCust, cookiesHour, totalCookies, ul) {
  this.location = location;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookiesCust = avgCookiesCust;
  this.cookiesHour = cookiesHour;
  this.totalCookies = totalCookies;
  this.ul = ul;

  this.randCustHour = function(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  this.totalCookiesHour = function() {
    return Math.floor(this.randCustHour(this.maxCustHour, this.minCustHour) * this.avgCookiesCust);
  },
  this.makeUL = function(array) {
    for (var i = 0; i < array.length; i++) {
      this.cookiesHour = this.totalCookiesHour();
      this.totalCookies += this.cookiesHour;

      var locationList = document.getElementById(this.ul);
      var item = document.createElement('li');

      item.appendChild(document.createTextNode(array[i] + this.cookiesHour + ' Cookies'));
      locationList.appendChild(item);

      if (i === 7) {
        var item = document.createElement('li');

        item.appendChild(document.createTextNode('Total: ' + this.totalCookies + ' Cookies'));
        locationList.appendChild(item);
      }
    }
  }
}

//====================================================================

var time = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];

var pikePlace = new Cookies('Pike Place Market', 17, 88, 5.2, 0, 0, 'pike');
pikePlace.makeUL(time);

var seaTac = new Cookies('SeaTac Airport', 6, 44, 1.2, 0, 0, 'sea');
seaTac.makeUL(time);

var southCenter = new Cookies('Southcenter Mall', 11, 38, 1.9, 0, 0, 'mall');
southCenter.makeUL(time);

var bellSquare = new Cookies('Bellevue Square', 20, 48, 3.3, 0, 0, 'bell');
bellSquare.makeUL(time);

var alkiBeach = new Cookies('Alki', 3, 24, 2.6, 0, 0, 'alki');
alkiBeach.makeUL(time);
