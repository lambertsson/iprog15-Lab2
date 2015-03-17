//DinnerModel Object constructor
var DinnerModel = function () {

    //Fields
    var numberOfGuests = 1;
    var menu = [];
    var observers = [];
    var selectedDishID = 1;

    this.getSelectedDishID = function () {
        return selectedDishID;
    }

    this.setSelectedDIshID = function (ID) {
        selectedDishID = ID;
    }

    //Sets the number of guests
    this.setNumberOfGuests = function (num) {
        numberOfGuests = num;
    }

    //Returns the number of guests
    this.getNumberOfGuests = function () {
        return numberOfGuests;
    }

    //Returns the dish that is on the menu for selected type 
    this.getSelectedDish = function (type) {
        for (i in menu) {
            if (menu[i].type == type) {
                return menu[i];     // Only returns a menu item if found, otherwise nothing is returned.
            }
        }
    }

    //Returns all the dishes on the menu (or the selected type, nothing if selected type not found).
    this.getFullMenu = function () {
        return menu;
    }

    //Returns all ingredients for all the dishes on the menu.
    this.getAllIngredients = function (type) {
        var ingredients = [];
        for (i in menu) {
            if (type == undefined) {
                for (var j = 0; j < menu[i].ingredients.length; j++) {
                    ingredients.push(menu[i].ingredients[j]);
                }
            }
            if (menu[i].type == type) {
                for (var j = 0; j < menu[i].ingredients.length; j++) {
                    ingredients.push(menu[i].ingredients[j]);
                }
            }
        }
        return ingredients;     // Returns an empty list if no item of that type on menu, or a list with all the ingredients for that item on the menu.
    }

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    this.getTotalMenuPrice = function (type) {
        var totalPrice = 0;
        var ingredients = this.getAllIngredients(type);
        for (var i = 0; i < ingredients.length; i++) {
            totalPrice += ingredients[i].price;
        }
        return (totalPrice * numberOfGuests);  // Returns the total cost of all ingredients, is >= 0.
    }

    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    this.addDishToMenu = function (id) {
        console.log("1. Adding a dish")
        var found = false;
        for (i in menu) {
            if (menu[i].type == this.getDish(id).type) {
                menu.pop(menu[i]);
                menu.push(this.getDish(id))
                found = true;
                console.log("2. Added the dish (already existed) ", this.getDish(id))
            }
        }
        if (!found) {
            console.log(menu)
            menu.push(this.getDish(id));
            console.log("2. Added the dish (newly added)", this.getDish(id))
            console.log(menu)
        }
    }

    //Returns the number of items in menu
    this.getLengthOfMenu = function () {
        return menu.length;
    }

    //Removes dish from menu
    this.removeDishFromMenu = function (id) {
        menu.pop(dishes[id]);
    }

    //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
    //you can use the filter argument to filter out the dish by name or ingredient (use for search)
    //if you don't pass any filter all the dishes will be returned
    this.getAllDishes = function (type, filter) {
        return $(dishes).filter(function (index, dish) {
            var found = true;
            if (filter) {
                found = false;
                $.each(dish.ingredients, function (index, ingredient) {
                    if (ingredient.name.indexOf(filter) != -1) {
                        found = true;
                    }
                });
                if (dish.name.indexOf(filter) != -1) {
                    found = true;
                }
            }
            return dish.type == type && found;
        });
    }

    //function that returns a dish of specific ID
    this.getDish = function (id, callback, view) {
        var apiKey = "dvxkRYZj71vL8irJQo33bFG3o6U34O8K";
        var url = "http://api.bigoven.com/recipe/"
                  + id
                  + "?api_key=" + apiKey;
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
                //run callback
                console.log(data);
                return callback(data, view);
                //console.log(typeof callback);
            }
        });
        //for (key in dishes) {
        //    if (dishes[key].id == id) {
        //        return dishes[key];
        //    }
        //}
    }

    this.addObserver = function (observer) {
        observers.push(observer);
        //console.log("added " + observer)
    }

    this.update = function (arg) {
        //if (arg == undefined) {
        //    for (var i = 0; i < observers.length; i++) {
        //        observers[i].update();
        //    }
        //}
        //else {
        //    //G�r en massa med en lista! =D
        //}
        for (var i = 0; i < observers.length; i++) {
            observers[i].update(arg);
        }
    }


/*in the "success" callback of the AJAX call we want to call "notifyObservers" 
so that the views can update themselves with the correct data. 
Even if you didn't pass any arguments to notifyObservers in the previous labs, 
now it is time to do so. We want to pass the data we received from the service. */

//title. category �r type - main dish, desserts, appetizers. 

//getRecipeJson h�mtar nu ut recipe beroende p� vad anv�ndaren skriver f�r s�kterm och vald food type. 

    this.getRecipeJson = function (term,type,callback,view) {
               
        var category = type;
        var apiKey = "dvxkRYZj71vL8irJQo33bFG3o6U34O8K";
        var titleKeyword = term;
        var url = "http://api.bigoven.com/recipes?pg=1&rpp=10&title_kw="
                  + titleKeyword 
                  + "&any_kw"
                  + category
                  + "&api_key="+apiKey;
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
                //alert('success');
                //run callback
                return callback(data.Results,view);
                //console.log(typeof callback);
            }
        });
    }


    // the dishes variable contains an array of all the 
    // dishes in the database. each dish has id, name, type,
    // image (name of the image file), description and
    // array of ingredients. Each ingredient has name, 
    // quantity (a number), price (a number) and unit (string 
    // defining the unit i.e. "g", "slices", "ml". Unit
    // can sometimes be empty like in the example of eggs where
    // you just say "5 eggs" and not "5 pieces of eggs" or anything else.
    var dishes = [{
        'id': 1,
        'name': 'French toast',
        'type': 'starter',
        'image': 'toast.jpg',
        'description': "In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
        'ingredients': [{
            'name': 'eggs',
            'quantity': 0.5,
            'unit': '',
            'price': 10
        }, {
            'name': 'milk',
            'quantity': 30,
            'unit': 'ml',
            'price': 6
        }, {
            'name': 'brown sugar',
            'quantity': 7,
            'unit': 'g',
            'price': 1
        }, {
            'name': 'ground nutmeg',
            'quantity': 0.5,
            'unit': 'g',
            'price': 12
        }, {
            'name': 'white bread',
            'quantity': 2,
            'unit': 'slices',
            'price': 2
        }]
    }, {
        'id': 2,
        'name': 'Sourdough Starter',
        'type': 'starter',
        'image': 'sourdough.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'active dry yeast',
            'quantity': 0.5,
            'unit': 'g',
            'price': 4
        }, {
            'name': 'warm water',
            'quantity': 30,
            'unit': 'ml',
            'price': 0
        }, {
            'name': 'all-purpose flour',
            'quantity': 15,
            'unit': 'g',
            'price': 2
        }]
    }, {
        'id': 3,
        'name': 'Baked Brie with Peaches',
        'type': 'starter',
        'image': 'bakedbrie.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'round Brie cheese',
            'quantity': 10,
            'unit': 'g',
            'price': 8
        }, {
            'name': 'raspberry preserves',
            'quantity': 15,
            'unit': 'g',
            'price': 10
        }, {
            'name': 'peaches',
            'quantity': 1,
            'unit': '',
            'price': 4
        }]
    }, {
        'id': 100,
        'name': 'Meat balls',
        'type': 'main dish',
        'image': 'meatballs.jpg',
        'description': "Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
        'ingredients': [{
            'name': 'extra lean ground beef',
            'quantity': 115,
            'unit': 'g',
            'price': 20
        }, {
            'name': 'sea salt',
            'quantity': 0.7,
            'unit': 'g',
            'price': 3
        }, {
            'name': 'small onion, diced',
            'quantity': 0.25,
            'unit': '',
            'price': 2
        }, {
            'name': 'garlic salt',
            'quantity': 0.7,
            'unit': 'g',
            'price': 2
        }, {
            'name': 'Italian seasoning',
            'quantity': 0.6,
            'unit': 'g',
            'price': 3
        }, {
            'name': 'dried oregano',
            'quantity': 0.3,
            'unit': 'g',
            'price': 3
        }, {
            'name': 'crushed red pepper flakes',
            'quantity': 0.6,
            'unit': 'g',
            'price': 3
        }, {
            'name': 'Worcestershire sauce',
            'quantity': 6,
            'unit': 'ml',
            'price': 7
        }, {
            'name': 'milk',
            'quantity': 20,
            'unit': 'ml',
            'price': 4
        }, {
            'name': 'grated Parmesan cheese',
            'quantity': 5,
            'unit': 'g',
            'price': 8
        }, {
            'name': 'seasoned bread crumbs',
            'quantity': 15,
            'unit': 'g',
            'price': 4
        }]
    }, {
        'id': 101,
        'name': 'MD 2',
        'type': 'main dish',
        'image': 'bakedbrie.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ingredient 1',
            'quantity': 1,
            'unit': 'pieces',
            'price': 8
        }, {
            'name': 'ingredient 2',
            'quantity': 15,
            'unit': 'g',
            'price': 7
        }, {
            'name': 'ingredient 3',
            'quantity': 10,
            'unit': 'ml',
            'price': 4
        }]
    }, {
        'id': 102,
        'name': 'MD 3',
        'type': 'main dish',
        'image': 'meatballs.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ingredient 1',
            'quantity': 2,
            'unit': 'pieces',
            'price': 8
        }, {
            'name': 'ingredient 2',
            'quantity': 10,
            'unit': 'g',
            'price': 7
        }, {
            'name': 'ingredient 3',
            'quantity': 5,
            'unit': 'ml',
            'price': 4
        }]
    }, {
        'id': 102,
        'name': 'MD 4',
        'type': 'main dish',
        'image': 'meatballs.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ingredient 1',
            'quantity': 1,
            'unit': 'pieces',
            'price': 4
        }, {
            'name': 'ingredient 2',
            'quantity': 12,
            'unit': 'g',
            'price': 7
        }, {
            'name': 'ingredient 3',
            'quantity': 6,
            'unit': 'ml',
            'price': 4
        }]
    }, {
        'id': 200,
        'name': 'Chocolat Ice cream',
        'type': 'dessert',
        'image': 'icecream.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ice cream',
            'quantity': 100,
            'unit': 'ml',
            'price': 6
        }]
    }, {
        'id': 201,
        'name': 'Vanilla Ice cream',
        'type': 'dessert',
        'image': 'icecream.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ice cream',
            'quantity': 100,
            'unit': 'ml',
            'price': 6
        }]
    }, {
        'id': 202,
        'name': 'Strawberry',
        'type': 'dessert',
        'image': 'icecream.jpg',
        'description': "Here is how you make it... Lore ipsum...",
        'ingredients': [{
            'name': 'ice cream',
            'quantity': 100,
            'unit': 'ml',
            'price': 6
        }]
    }
    ];

}