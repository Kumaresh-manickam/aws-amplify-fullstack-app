 async function checkBackend() {

    const url = "https://j5f6wdfwxojtzaix3o5u2ap2my0ddfwu.lambda-url.us-east-1.on.aws/";

    try {

        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("status").innerHTML = data.body;

    } catch (error) {

        document.getElementById("status").innerHTML =
            "Backend connection failed";

        console.error(error);

    }

}

function loadEmployees() {

    let employees = [
        "Kumaresh",
        "Prem",
        "Likhith"
    ];

    let list = document.getElementById("employees");

    list.innerHTML = "";

    employees.forEach(employee => {

        let li = document.createElement("li");
        li.textContent = employee;
        list.appendChild(li);

    });
}

function loadProducts() {

    let products = [
        "Laptop",
        "Mouse",
        "Keyboard"
    ];

    let list = document.getElementById("products");

    list.innerHTML = "";

    products.forEach(product => {

        let li = document.createElement("li");
        li.textContent = product;
        list.appendChild(li);

    });
}