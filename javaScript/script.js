var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  $('.js-lat').text(crd.latitude);
  $('.js-long').text(crd.longitude);
  $('.js-acc').text(crd.accuracy + 'm');

  $.ajax({
  	url;'https://api.forecast.io/forecast/116256c67b9efa6eee2e1bc747fa57e0/37.8267,-122.423',
  	dataType:'jsonp';
  	success: function(data){
  		console.log(data);
  	}
  });
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);