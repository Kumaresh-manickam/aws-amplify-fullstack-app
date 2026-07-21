function checkBackend() {
    document.getElementById("status").innerHTML =
        "Backend connection will be added using AWS Amplify API";
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