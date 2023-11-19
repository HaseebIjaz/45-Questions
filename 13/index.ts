// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

enum Transportation {
  PLANE,
  RAILWAY,
  CAR,
  BIKE,
  CART,
}

const favoriteVehicles: Record<string, Transportation> = {
  "Honda 125": Transportation.BIKE,
  "Honda Civic": Transportation.CAR,
  "Bullet Train": Transportation.RAILWAY,
  "Boeing 747": Transportation.PLANE,
};

Object.keys(favoriteVehicles).forEach((vehicle: string) => {
  console.log(
    `I would like to own a ${vehicle} ${
      Transportation[favoriteVehicles[vehicle]]
    }`
  );
});
