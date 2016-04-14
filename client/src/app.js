require('./stylesheets/animate.css');
require('./stylesheets/main.sass');
require('./stylesheets/style.css');
require('./stylesheets/skeleton.css');
require('./helpers/autocomplete_origin.js');
require('./helpers/autocomplete_destination.js');
require('./helpers/datepickk.js');

var populateFlightsView = require('./models/populateViews').populateFlightsView;
var changeBg = require('./helpers/slider.js');
var getFlickrImagesByTag = require('./models/flickr_api').getFlickrImagesByTag;
var getFlightData = require('./models/flight_api').getFlightData;
var mainPages = document.querySelectorAll('.page');
var origin = document.getElementById('origin');
var destination = document.getElementById('destination');

$(document).ready(function() {
  function showElement(id) {
    document.getElementById(id).style.display = 'block';
  }

  function hidePage() {
    for (var i = 0; i < mainPages.length; i++) {
      mainPages[i].style.display = 'none';
    }
  }

  function hideElement(id) {
    document.getElementById(id).style.display = 'none';
  }

  hideElement('slider');
  hidePage();
  showElement('home');
  // $('#slider').hide();
  // showElement('#flights-result-container');

  document.getElementById('get-started').onclick = function(e) {
    e.preventDefault();
    hidePage();
    showElement('where-to-go');
  }

  document.getElementById('where-to-go-button').onclick = function(e) {
    e.preventDefault();
    hideElement('video');
    getFlickrImagesByTag(document.getElementById('where-to-go-input').value, changeBg);
    showElement('slider');
    hidePage();
    showElement('flights-search-form');
  }

  document.getElementById('show-flight-results-button').onclick = function(e) {
    e.preventDefault();
    hidePage();
    getFlightData(origin.value.substring(0, 3), destination.value.substring(0, 3), departureDate, populateFlightsView);
    showElement('flights-result-container');
  }

});
