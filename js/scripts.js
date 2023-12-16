//Business Logic

function Pizza(topping, size) {
    this.topping = topping;
    this.size = size;
    this.cost = this.calculateCost();
}
Pizza.prototype.calculateCost = function () {
    const baseCost = 10.0;
    let sizeMultiplier;

    switch (this.size) {
        case "small":
            sizeMultiplier = 1.0;
            break;
        case "med":
            sizeMultiplier = 1.2;
            break;
        case "large":
            sizeMultiplier = 1.5;
            break;
        default:
            sizeMultiplier = 1.0;
    }

    return baseCost * sizeMultiplier;
};

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


function getSizeValue() {
    const sizeValue = document.getElementsByName("size");

    for (let i = 0; i < sizeValue.length; i++) {
        if (sizeValue[i].checked) {
            return sizeValue[i].value;
        }
    }
    return null;
}

function createPizza() {
    const selectedTopping = getPizzaValue();
    const selectedSize = getSizeValue();

    if (selectedTopping && selectedSize) {
        return new Pizza(selectedTopping, selectedSize);
    }

    return null;
}

function displayPizzaInfo(pizza) {
    if (pizza) {
        return `You've selected: ${pizza.topping}.`;
    }

    return "";
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
        const pizza = createPizza();

        if (pizza) {
            result.classList.remove("hidden");
            result1.classList.remove("hidden");
            payment.classList.remove("hidden");
            reset.classList.remove("hidden");

            result.innerText = displayPizzaInfo(pizza);
            result1.innerText = `Size: ${pizza.size}. Cost: ${pizza.cost.toFixed(2)} $`;
        } else {
            alert("Please select both topping and size.");
        }

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
    })
};


document.addEventListener("DOMContentLoaded", farmHandler);