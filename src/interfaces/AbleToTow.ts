import AbleToTow from "../interfaces/AbleToTow.ts";
import Truck from "../classes/Truck.ts";
import Motorbike from "../classes/Motorbike.ts";
import Car from "../classes/Car.ts";

class Truck implements AbleToTow {
  towingCapacity: number;
  // other properties...

  constructor(towingCapacity: number, /* other parameters */) {
    this.towingCapacity = towingCapacity;
    // initialize other properties...
  }

  tow(vehicle: Truck | Motorbike | Car): void {
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Towing ${vehicle.make} ${vehicle.model}.`);
      // logic to tow the vehicle...
    } else {
      console.log(`Cannot tow ${vehicle.make} ${vehicle.model}. It's too heavy.`);
    }
  }
}

export default Truck;
