// Your code goes here

var vinElem = document.getElementById('vin');
gm.info.getVehicleConfiguration(function(data) {
  vinElem.innerHTML = gm.info.getVIN();
  
var signalFilter = ['wipers_on', 'light_level']
gm.info.getVehicleData(function(data) {
  vinElem.innerHTML = gm.info.getVIN();
});
