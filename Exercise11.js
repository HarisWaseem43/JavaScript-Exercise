function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}
function FahrenheitTocelcius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
const celciusTemp = 60;
const Fahrenheit = celciusToFahrenheit(celciusTemp);
console.log(`${celciusTemp} °C is ${Fahrenheit} °F`);

const fahrenheitTemp = 45;
const Celcius = FahrenheitTocelcius(fahrenheitTemp);
console.log(`${fahrenheitTemp} °C is ${Celcius.toFixed(2)} °F`);
