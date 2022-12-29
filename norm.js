let time = {
  seconds: 1000000,
  h: function () {
    let val = Math.floor(time.seconds / 3600)
    if (val >= 24) {
      val -= Math.floor(val / 24) * 24
    }
    return val
  },
  m: function () {
    return Math.floor((time.seconds % 3600) / 60)
  },
  s: function () {
    return time.seconds % 60
  },
  show: function () {
    console.log(time.h().toString().padStart(2, 0) + ':' + time.m().toString().padStart(2, 0) + ':' + time.s().toString().padStart(2, 0))
  },
  shift: function (a, b) {
    switch(a) {
      case 'h':
        time.seconds += b * 3600
        break
      case 'm':
        time.seconds += b * 60
        break
      case 's':
        time.seconds += b
        break
    }
  }
}