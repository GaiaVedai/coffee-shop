var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    checkDrink(drinkType);
  }
}

checkDrink = function (drinkType) {
  for (var key in coffeeShop.drinkRequirements) {
    if (drinkType === key) {
      checkBeans(drinkType, coffeeShop.drinkRequirements[key])
      return;
    }
  }
  console.log(`Sorry, we don't make ${drinkType}`); 
}

checkBeans = function (drinkType, numberOfBeans) {
  if (coffeeShop.beans >= numberOfBeans) {
    coffeeShop.beans -= numberOfBeans
    console.log(coffeeShop.beans)
    console.log("here is your " + drinkType);

  }
  else {
    console.log("sorry, we are out of beans!");
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");