// This function demonstrates asynchronous programming in JavaScript using setTimeout.
// It takes a name as an argument and logs a greeting message after a 2-second delay.
// This approach is useful for simulating delayed operations, such as network requests.
// Example: delayedGreeting('Alice') will log 'Hello, Alice!' after 2 seconds.

function delayedGreeting(name) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
    }, 2000);
}


delayedGreeting("Alice");