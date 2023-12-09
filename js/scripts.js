//Business Logic

function Pizza(topping, size, cost) {
    this.topping = topping;
    this.size = size;
    this.cost = cost;
}

let Cheese = new Pizza(["Cheese Pizza (Marinara, Mozzarella)"]);
let Pepperoni = new Pizza(["Pepperoni Pizza (Marinara, Mozzarella, Liguria Pepperoni)"]);
let Veggie = new Pizza(["Veggie Pizza (Fresh broccoli, tomatoes, green bell pepper)"]);

let CheeseSize1 = new Pizza("cheese", "small", 10.99);
let CheeseSize2 = new Pizza("cheese", "med", 12.99);
let CheeseSize3 = new Pizza("cheese", "large", 14.85);

let Pepperoni1 = new Pizza("pepperoni", "small", 11.99);
let Pepperoni2 = new Pizza("pepperoni", "med", 13.99);
let Pepperoni3 = new Pizza("pepperoni", "large", 14.85);

let Veggie1 = new Pizza("veggie", "small", 9.99);
let Veggie2 = new Pizza("veggie", "med", 11.99);
let Veggie3 = new Pizza("veggie", "large", 13.85);


Pizza.prototype.ingredient = function () {
    return "You've selected: " + this.topping;
};


Pizza.prototype.sizeAndCost = function () {
    return "Size: " + this.size + ". Cost: " + this.cost.toFixed(2) + " $";
}


//UI Logic

function getPizzaValue() {
    const checkBox = document.getElementsByName("pizza");

    for (let i = 0; i < checkBox.length; i++) {
        if (checkBox[i].checked) {
            return checkBox[i].value;
        }
    }
    return null;
}

function getData() {
    const selected = getPizzaValue();
    let getAllInfo = null;
    if (selected === "cheese") {
        getAllInfo = Cheese.ingredient();
    } else if (selected === "pepperoni") {
        getAllInfo = Pepperoni.ingredient();
    } else if (selected === "veggie") {
        getAllInfo = Veggie.ingredient();
    } else {
        alert("Please select, what would you like to order!");
        getAllInfo = "";
    }
    return getAllInfo;
}


function getSizeValue() {
    const sizeValue = document.getElementsByName("size");

    for (let i = 0; i < sizeValue.length; i++) {
        if (sizeValue[i].checked) {
            return sizeValue[i].value;
        }
    }
    return null;
}


function selectData() {
    const selected = getSizeValue();
    let getAllInfo = null;
    if (selected === "small") {
        getAllInfo = CheeseSize1.sizeAndCost();
    } else if (selected === "med") {
        getAllInfo = CheeseSize2.sizeAndCost();
    } else if (selected === "large") {
        getAllInfo = CheeseSize3.sizeAndCost();
    } else if (selected === "small1") {
        getAllInfo = Pepperoni1.sizeAndCost();
    } else if (selected === "med2") {
        getAllInfo = Pepperoni2.sizeAndCost();
    } else if (selected === "large3") {
        getAllInfo = Pepperoni3.sizeAndCost();
    } else if (selected === "small4") {
        getAllInfo = Veggie1.sizeAndCost();
    } else if (selected === "med5") {
        getAllInfo = Veggie2.sizeAndCost();
    } else if (selected === "large6") {
        getAllInfo = Veggie3.sizeAndCost();
    } else {
        alert("Select size to get how much cost.");
        getAllInfo = "";
    }
    return getAllInfo;
}

function farmHandler() {
    const form = document.getElementById("form");
    const result = document.getElementById("result");
    const result1 = document.getElementById("result1");
    const payment = document.getElementById("buyer1");
    const reset = document.getElementById("reset");
    const form2 = document.getElementById("form2");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const getInfo = getData();
        const getInfo2 = selectData();
        result.classList.remove("hidden");
        result1.classList.remove("hidden");
        payment.classList.remove("hidden");
        reset.classList.remove("hidden");

        result.innerText = getInfo;
        result1.innerText = getInfo2;

        reset.addEventListener("click", () => {
            form.removeAttribute("class");
            document.getElementById("menu").removeAttribute("class", "hidden");

            result.classList.add("hidden");
            result1.classList.add("hidden");
            payment.classList.add("hidden");
            reset.classList.add("hidden");
            form2.classList.add("hidden");
            confirm2.classList.add("hidden");

            form.addEventListener("reset", () => {
                form.reset();
            })

        })

        payment.addEventListener("click", () => {
            form2.classList.remove("hidden");

            const confirm = document.getElementById("confirm");
            const confirm2 = document.getElementById("confirm2");

            confirm.addEventListener("click", (e) => {
                e.preventDefault();
                confirm2.classList.remove("hidden");
                reset.removeAttribute("class", "hidden");

                document.getElementById("pizza").setAttribute("class", "hidden");
                result.innerText = "";
                result1.innerText = "";
                form2.setAttribute("class", "hidden");
            })

            payment.classList.add("hidden");
        })

        form.setAttribute("class", "hidden");
        document.getElementById("menu").setAttribute("class", "hidden");
    });
}

document.addEventListener("DOMContentLoaded", farmHandler);