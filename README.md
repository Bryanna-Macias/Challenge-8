# Vehicle Management CLI

This project is a TypeScript-based command-line interface (CLI) application designed to manage various vehicles, with a specific focus on trucks. The application demonstrates object-oriented programming principles, such as inheritance and interface implementation, and includes a simple mechanism to simulate vehicle management tasks like starting a vehicle, checking if a truck can tow another vehicle, and printing vehicle details.

## Features

- **Vehicle Class**: The base class that represents a generic vehicle, with properties such as VIN, color, make, model, year, weight, top speed, and wheels.
- **Truck Class**: A specialized vehicle that extends the `Vehicle` class and implements the `AbleToTow` interface, adding functionality to check towing capacity.
- **AbleToTow Interface**: An interface that ensures any vehicle capable of towing implements the `tow` method.
- **CLI Interface**: A simple command-line interface to manage the creation and management of vehicles.

## Getting Started

### Prerequisites

- Node.js
- TypeScript

### Installation

1. Navigate to the project directory:
    ```bash
   cd vehicle-management-cli

2. Install the dependencies:
     ```bash
   npm install

3. Compile the TypeScript code:
     ```bash
   npm run build

4. Run the CLI application:
     ```bash
   npm start


# Usage
The CLI application allows you to create and manage vehicles. The main class is Truck, which extends the Vehicle class and implements the AbleToTow interface.

## Example Usage

1. Creating a Truck:
You can create a truck instance by calling the Truck constructor and passing the required parameters.
    ```bash
    const myTruck = new Truck('1HGCM82633A004352', 'Red', 'Ford', 'F-150', 2023, 4500, 120, wheelsArray, 10000);

2. Creating a Truck:
You can create a truck instance by calling the Truck constructor and passing the required parameters.
    ```bash
   const myTruck = new Truck('1HGCM82633A004352', 'Red', 'Ford', 'F-150', 2023, 4500, 120, wheelsArray, 10000);
   
3. Creating a Truck:
You can create a truck instance by calling the Truck constructor and passing the required parameters.
    ```bash
   const myTruck = new Truck('1HGCM82633A004352', 'Red', 'Ford', 'F-150', 2023, 4500, 120, wheelsArray, 10000);


## Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss your ideas.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
Inspired by the principles of object-oriented programming in TypeScript.


