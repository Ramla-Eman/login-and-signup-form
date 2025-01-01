// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC472xWx5g67W5IJEtimNi6yjXavUiJj6U",
    authDomain: "login-signup-form-9ac1c.firebaseapp.com",
    projectId: "login-signup-form-9ac1c",
    storageBucket: "login-signup-form-9ac1c.firebasestorage.app",
    messagingSenderId: "432429253702",
    appId: "1:432429253702:web:489ea1f5df49de71b7b647"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up
function signUp(event) {
    event.preventDefault();
    // Get user input values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeatPassword").value;
    // Validate Input Fields
    if (!email || !password || !repeatPassword) {
        alert("Please fill out all fields.");
        return;
    }
    if (password !== repeatPassword) {
        alert(`Password does'nt match.`);
        return;
    }
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // Get account creation date
            const creationTime = user.metadata.creationTime;
            console.log("User signed up successfully:", user);
            alert(
                `Welcome, ${firstName} ${lastName}! Your account has been created.${creationTime}`
            );
            document.getElementById("firstName").value = "";
            document.getElementById("lastName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("repeatPassword").value = "";

            window.location.href = "./login.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error[${errorCode}]: ${errorMessage}`);
            alert(`Error: ${errorMessage}`);
        });
}
// Sign In
function signIn(event) {
    event.preventDefault();
    // Get user input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Validate Input Fields
    if (!email || !password) {
        alert("Please fill out all fields.");
        return;
    }
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            const creationTime = user.metadata.creationTime;
            console.log("User signed in successfully:", user);
            alert(
                `Welcome, Youre signed in. ${creationTime}`
            );
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error[${errorCode}]: ${errorMessage}`);
            alert(`Error: ${errorMessage}`);
        });
}


document.addEventListener("DOMContentLoaded", function () {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");

    if (signUpButton) {
        signUpButton.addEventListener("click", signUp);
    }

    if (signInButton) {
        signInButton.addEventListener("click", signIn);
    }
});