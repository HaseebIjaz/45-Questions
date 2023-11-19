"use strict";
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var Transportation;
(function (Transportation) {
    Transportation[Transportation["PLANE"] = 0] = "PLANE";
    Transportation[Transportation["RAILWAY"] = 1] = "RAILWAY";
    Transportation[Transportation["CAR"] = 2] = "CAR";
    Transportation[Transportation["BIKE"] = 3] = "BIKE";
    Transportation[Transportation["CART"] = 4] = "CART";
})(Transportation || (Transportation = {}));
const favoriteVehicles = {
    "Honda 125": Transportation.BIKE,
    "Honda Civic": Transportation.CAR,
    "Bullet Train": Transportation.RAILWAY,
    "Boeing 747": Transportation.PLANE,
};
Object.keys(favoriteVehicles).forEach((vehicle) => {
    console.log(`I would like to own a ${vehicle} ${Transportation[favoriteVehicles[vehicle]]}`);
});
