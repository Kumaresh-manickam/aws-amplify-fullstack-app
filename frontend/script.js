async function checkBackend() {

    const url = "https://j5f6wdfwxojtzaix3o5u2ap2my0ddfwu.lambda-url.us-east-1.on.aws/";

    try {

        const response = await fetch(url);

        const data = await response.json();

        document.getElementById("status").innerHTML = data.message;

    } catch (error) {

        console.error(error);

        document.getElementById("status").innerHTML = error.message;

    }

}

function loadEmployees() {

    const employees = [
        "Kumaresh",
        "Prem",
        "Likhith"
    ];

    const list = document.getElementById("employees");

    list.innerHTML = "";

    employees.forEach(employee => {

        const li = document.createElement("li");
        li.textContent = employee;
        list.appendChild(li);

    });

}

function loadProducts() {

    const products = [
        "Laptop",
        "Mouse",
        "Keyboard"
    ];

    const list = document.getElementById("products");

    list.innerHTML = "";

    products.forEach(product => {

        const li = document.createElement("li");
        li.textContent = product;
        list.appendChild(li);

    });

}