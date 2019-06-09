if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../../serviceWorker.js", { scope: "./" })
    .then(function(registration) {
      console.log("Service Worker Registered");
    })
    .catch(function(err) {
      console.log("Service Worker Failed to Register", err);
    });
}

// Function to perform HTTP request

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    // There is an issue with the image being pulled from the API, so using a different one instead
    console.log("response----------------------------", response);
  })
  .catch(function(err) {
    console.log("Error", err);
  });
