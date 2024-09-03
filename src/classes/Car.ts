// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.ts';
import Wheel from './Wheel.ts';

// Car class that extends Vehicle class
class Car extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    // Call the constructor of the parent class, Vehicle
    super();

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // Check if the wheels array has 4 elements; if not, create 4 new Wheel objects
    if (wheels.length !== 4) {
      this.wheels = [
        new Wheel(17, 'DefaultBrand'), // Assuming 17 inch and DefaultBrand as default values
        new Wheel(17, 'DefaultBrand'),
        new Wheel(17, 'DefaultBrand'),
        new Wheel(17, 'DefaultBrand'),
      ];
    } else {
      this.wheels = wheels;
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();

    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);

    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter()} inch with a ${this.wheels[0].getTireBrand()} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter()} inch with a ${this.wheels[1].getTireBrand()} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter()} inch with a ${this.wheels[2].getTireBrand()} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter()} inch with a ${this.wheels[3].getTireBrand()} tire`
    );
  }
}

// Export the Car class as the default export
export default Car;
