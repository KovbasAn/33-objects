let car = {
  make: 'Mazda',
  model: 'CX-5',
  year: 2016,
  speed: 80,
  tank: 50,
  consumption: 9.5,
  drivers: ['Andrew', 'Yana'],

  showInfo: function () {
    console.log(`${car.make} ${car.model}: year - ${car.year}, average speed - ${car.speed}km/h, fuel tank - ${car.tank}L, fuel consumption - ${car.consumption}L/100km, drivers - ${car.drivers}`)
  },
  addDriver: function (newDriver) {
    car.drivers.push(newDriver)
  },

  checkDriver: function (driver) {
    let output = `No, ${driver} can't drive` 
    for (let i = 0; i < car.drivers.length; i++) {      
      if (driver == car.drivers[i]) {
        output = `Yes, ${driver} can drive`
      }
    }     
    console.log(output)
  },

  calcTimeAndFuel: function (distance) {
    let time = 0, fuel = 0
    fuel = distance * car.consumption / 100
    time = distance / car.speed
    if (time > 4) {
      time += Math.floor(time / 4)
    }
    console.log(`For your jorney you'll spend ${time} hours and ${fuel}L of fuel`)
  }
}