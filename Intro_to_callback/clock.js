class Clock {
  constructor() {
    // 1. Create a Date object.
    let currentDate = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = currentDate.getHours();
    this.minutes = currentDate.getMinutes();
    this.seconds = currentDate.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
    // setInterval(_tick[, delay[, ...args]])
  }
  
  
  printTime() {
    // Format the time in HH:MM:SS
    let array = [];
    array.push(this.hours);
    array.push(this.minutes);
    array.push(this.seconds);
    console.log(array.join(":"));
    // Use console.log to print it.
  }
  
  _tick() {
    // 1. Increment the time by one second.
    this.seconds += 1;
    if (this.seconds === 60) {
      this.minutes += 1
      this.seconds = 0
    }
    if (this.minutes === 60) {
      this.hours += 1
      this.minutes = 0
    }
    if (this.hour === 24) {
      this.hours = 0
      this.minutes = 0
      this.seconds = 0
    }
    // this.currentDate.setSeconds(this.seconds += 1);
    // 2. Call printTime.
    this.printTime();
    // this._tick();
  }
}

const clock = new Clock();