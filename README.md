# Pizza Shop

<h3>By Ermek Abdrazakov</h3>

<p>This is a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc.), a size to order a pizza, and see the final cost.</p>

_Open [gh-page site]()_

## Technologies Used
* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_

## Description

_This website created  using HTML, CSS, Bootstrap and JavaScript technologies._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory._
* _Right-click on `index.html` and select `Open with Live Server`._

## Test

```
Describe: Pizza()

Test: "It should return a Pizza object with two or more properties for toppings, size and cost"
Code: let Cheese = new Pizza(["Cheese Pizza (Marinara, Mozzarella)"], ["Small, Med, Large"], 12.99);
Expected Output: Pizza { toppings: ["Cheese Pizza (Marinara, Mozzarella)"], size: ["Small, Med, Large"], cost: 12.99}

Test: "It should return selected section with ingredients"
Code: "let Veggie = new Pizza(["Veggie Pizza (Fresh broccoli, tomatoes, green bell pepper)"], ["small, med, large"], 10.99);"
Expected Output: Pizza { You've selected: Veggie Pizza (Fresh broccoli, tomatoes, green bell pepper). Size: small, med, large. Cost: 10.99 }

```

## Known Bugs
* _No known issues._

## License

_[MIT](https://en.wikipedia.org/wiki/MIT_License)_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

Copyright (c) _2023_ _Ermek Abdrazakov_