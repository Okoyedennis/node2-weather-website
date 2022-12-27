const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=88cb84e2246d4f1f7cb195204ae72dde&query=${
    (latitude, longitude)
  }&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      console.log(body);

      callback(undefined, {
        result: `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degress out. The humidity is ${body.current.humidity}`,
      });
    }
  });
};

module.exports = forecast;
