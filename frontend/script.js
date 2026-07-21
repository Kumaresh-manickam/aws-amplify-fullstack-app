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