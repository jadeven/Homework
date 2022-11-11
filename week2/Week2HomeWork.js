
  const pizzaPlace = "Pizza Hut";
  const numberOfToppings = 3;

  // // Print the variables and their types.
  console.log(pizzaPlace, numberOfToppings, typeof pizzaPlace, typeof numberOfToppings);

  // // Print a template literal that uses both variables
  //  to construct a short sentence about your Pizza Place.
  console.log(
    `${pizzaPlace} is cheap if you only get ${numberOfToppings} toppings`
  );

   // // Construct an if statement that prints "Quality, not quantity."
  // if you offer less than 10 toppings, or "A whole lot of pizza." if
  // you offer 10 or more toppings.

  if (numberOfToppings < 10) {
    console.log("Quality, not quantity");
  } else {
    console.log("A whole lot of pizza");
  }


