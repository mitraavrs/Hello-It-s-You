// This file contains the JavaScript code for the website. It may include functions to handle user interactions and manipulate the DOM.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');

    // Example function to handle a button click
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button was clicked!');
        });
    }
});