var pikePlace = {
  location: 'Pike Place Market',
  minCustHour: 17,
  maxCustHour: 88,
  avgCookiesCust: 5.2,
  cookiesHour: 0,
  totalCookies: 0,
  randCustHour: function(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randCustHour(this.maxCustHour, this.minCustHour) * this.avgCookiesCust);
  },
  makeUL: function(array) {
    for (var i = 0; i < array.length; i++) {
      this.cookiesHour = this.totalCookiesHour();
      this.totalCookies += this.cookiesHour;
      var locationList = document.getElementById('pike');
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

var seaTac = {
  location: 'SeaTac Airport',
  minCustHour: 17,
  maxCustHour: 88,
  avgCookiesCust: 5.2,
  cookiesHour: 0,
  totalCookies: 0,
  randCustHour: function(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randCustHour(this.maxCustHour, this.minCustHour) * this.avgCookiesCust);
  },
  makeUL: function(array) {
    for (var i = 0; i < array.length; i++) {
      this.cookiesHour = this.totalCookiesHour();
      this.totalCookies += this.cookiesHour;
      var locationList = document.getElementById('sea');
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

var southCenter = {
  location: 'Southcenter Mall',
  minCustHour: 17,
  maxCustHour: 88,
  avgCookiesCust: 5.2,
  cookiesHour: 0,
  totalCookies: 0,
  randCustHour: function(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randCustHour(this.maxCustHour, this.minCustHour) * this.avgCookiesCust);
  },
  makeUL: function(array) {
    for (var i = 0; i < array.length; i++) {
      this.cookiesHour = this.totalCookiesHour();
      this.totalCookies += this.cookiesHour;
      var locationList = document.getElementById('mall');
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

var bellSquare = {
  location: 'Bellevue Square',
  minCustHour: 17,
  maxCustHour: 88,
  avgCookiesCust: 5.2,
  cookiesHour: 0,
  totalCookies: 0,
  randCustHour: function(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randCustHour(this.maxCustHour, this.minCustHour) * this.avgCookiesCust);
  },
  makeUL: function(array) {
    for (var i = 0; i < array.length; i++) {
      this.cookiesHour = this.totalCookiesHour();
      this.totalCookies += this.cookiesHour;
      var locationList = document.getElementById('bell');
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

var alkiBeach = {
  location: 'Southcenter Mall',
  minCustHour: 17,
  maxCustHour: 88,
  avgCookiesCust: 5.2,
  cookiesHour: 0,
  totalCookies: 0,
  randCustHour: function(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  totalCookiesHour: function() {
    return Math.floor(this.randCustHour(this.maxCustHour, this.minCustHour) * this.avgCookiesCust);
  },
  makeUL: function(array) {
    for (var i = 0; i < array.length; i++) {
      this.cookiesHour = this.totalCookiesHour();
      this.totalCookies += this.cookiesHour;
      var locationList = document.getElementById('alki');
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

pikePlace.makeUL(time);
seaTac.makeUL(time);
southCenter.makeUL(time);
bellSquare.makeUL(time);
alkiBeach.makeUL(time);
