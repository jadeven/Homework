
  // //   Open the new homework directory in VS Code and create a new
  //JavaScript file - name it something that indicates it is homework for Week 2
  // // Inside your JS file, create two variables: pizzaPlace and
  // numberOfToppings
  // // Have the variables reference the name of your
  // Pizza Place and the number of toppings your Pizza Place offers.
  // // Print the variables and their types.
  // // Print a template literal that uses both variables
  //  to construct a short sentence about your Pizza Place.
  // // Construct an if statement that prints "Quality, not quantity."
  // if you offer less than 10 toppings, or "A whole lot of pizza." if
  // you offer 10 or more toppings.
  // // Add, commit, and push your JS file to your GitHub repo.
  // // Send your TA a link to your GitHub Homework repo when finished.

  const pizzaPlace = "Pizza Hut";
  const numberOfToppings = 3;
  console.log(pizzaPlace);
  console.log(numberOfToppings);
  console.log(`${pizzaPlace} ${numberOfToppings}`);
  console.log(
    `${pizzaPlace} is cheap if you only get ${numberOfToppings} toppings`
  );

  if (numberOfToppings < 10) {
    console.log("Quality, not quantity");
  } else {
    console.log("A whole lot of pizza");
  }


