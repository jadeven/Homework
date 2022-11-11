//HW3 

  // //   Create an array of pizzaToppings with at least four different toppings
  const pizzaToppings = ["cheese", "pepporoni", "sausage", "olives"];

  // // Create a greetCustomer function that prints a message that // welcomes a guest, then informs them of the available toppings by
  // looping over pizzaToppings (don't worry about perfect grammar here// yet, i.e. "a, b, and c", see Bonus Challenge #9)
  const greetCustomer = (arr) => {
      console.log(`Welcome to Pizza House, our toppings are ${arr}`)

  };

  greetCustomer(pizzaToppings);

  //   Create a getPizzaOrder function that
  // has the parameters size, crust, and an indefinite amount of toppings as inputs
  // prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
  // outputs a list with the size, crust, and toppings
  const getPizzaOrder = (size, crust, ...args) => {
    args.map((el) =>
      console.log(
        `One ${size} ${crust} crust pizza with ${el} toppings coming up!`
      )
    );
    return [size, crust, ...args];
  };

  const getPizzaOrderVar = getPizzaOrder("large", "thick", [
    "sausage",
    "cheese",
    "peperoni"
  ]);

  //   Create a preparePizza function that
  // has an array as its parameter with three items: a size, a crust, and a list
  //of toppings
  // prints something like "...Cooking pizza..."
  // outputs a pizza Object with appropriate key-value pairs for size,
  //crust, and toppings
  const preparePizza = ([size, crust, [...toppingsArr]]) => {
    let pizzaObjFilled = {}
    pizzaObjFilled.pizzaSize = size;
    pizzaObjFilled.pizzaCrust = crust;
    pizzaObjFilled.pizzaToppings = [...toppingsArr]
    
    console.log("...cooking pizza...");
    return pizzaObjFilled;
  };

  const newOrder = preparePizza(getPizzaOrderVar );
//   console.log( newOrder);

//   Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e.
// "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in

  const servePizza = (pizzaObjOrder) => {
    const {pizzaToppings} = pizzaObjOrder
    //Bonus Challenge 9
    const addAnd = pizzaToppings.map( (el, id) => id === pizzaToppings.length-1 ? `and ${el}` : `${el}`)
     console.log(`Order up! Here's your ${pizzaObjOrder.pizzaSize}   
    ${pizzaObjOrder.pizzaCrust} pizza with ${addAnd}, ... Enjoy!`)

    return pizzaObjOrder;
  };

  servePizza(newOrder);



