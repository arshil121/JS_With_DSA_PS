function calculateAverage(arr) {
  return arr.reduce((sum, value) => sum + value, 0) / arr.length;
}

function analyzeCarMileage(cars) {
  if (cars.length === 0) {
    return {
      total: 0,
      average: 0,
      highest: null,
      lowest: null,
    };
  }

  const totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0);
  const averageMileage = calculateAverage(cars.map((car) => car.mileage));

  const highestMileage = cars.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest),
    cars[0]
  );

  const lowestMileage = cars.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
    cars[0]
  );

  return {
    total: parseFloat(totalMileage.toFixed(2)),
    average: parseFloat(averageMileage.toFixed(2)),
    highest: highestMileage,
    lowest: lowestMileage,
  };
}

module.exports = analyzeCarMileage;
