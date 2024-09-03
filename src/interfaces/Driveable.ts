import Driveable from "../interfaces/Driveable.ts";

class Car implements Driveable {
  started: boolean;
  currentSpeed: number;
  // other properties...

  constructor(/* parameters */) {
    this.started = false;
    this.currentSpeed = 0;
    // initialize other properties...
  }

  start(): void {
    this.started = true;
    console.log("Car started.");
  }

  accelerate(change: number): void {
    this.currentSpeed += change;
    console.log(`Accelerated to ${this.currentSpeed} mph.`);
  }

  decelerate(change: number): void {
    this.currentSpeed = Math.max(0, this.currentSpeed - change);
    console.log(`Decelerated to ${this.currentSpeed} mph.`);
  }

  stop(): void {
    this.currentSpeed = 0;
    console.log("Car stopped.");
  }

  turn(direction: string): void {
    console.log(`Car turning ${direction}.`);
  }

  reverse(): void {
    console.log("Car reversing.");
  }
}

export default Car;
