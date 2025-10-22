
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut,GoogleAuthProvider , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyAKFEH914njD9IV8FnG7LPEzqNvg7dwWUM",
    authDomain: "authentication-db00a.firebaseapp.com",
    projectId: "authentication-db00a",
    storageBucket: "authentication-db00a.firebasestorage.app",
    messagingSenderId: "79160807777",
    appId: "1:79160807777:web:de92876adca1f6aa557520",
    measurementId: "G-MF4D0E5K2F"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

//   signup code:

document.getElementById('SignUp-btn')?.addEventListener('click', ()=>{
    const signupEmail =document.getElementById('SignUp-email').value;
    const signupPassword =document.getElementById('SignUp-password').value;
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
    .then(()=>{
        alert('SignUp Successfully✔');
        window.location.href= 'welcome.html';
    })
    .catch(error => alert(error.message));
})

// login code

document.getElementById('Login-btn')?.addEventListener('click', ()=>{
    const loginEmail = document.getElementById('Login-email').value;
    const loginPassword = document.getElementById('login-password').value;
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then(() => {
        alert('logIn Successfully✔');
        window.location.href = 'welcome.html'
    })
    .catch(error => alert(error.message))
})

//Google Auth code 

document.getElementById('google-btn')?.addEventListener('click', ()=>{
    signInWithPopup(auth,provider)
    .then(()=>{
        alert('Login succesFully');
        window.location.href = 'welcome.html';
    })
    .catch(error => alert(error.message))
})

//logout || signout

document.getElementById('Logout-btn')?.addEventListener('click', ()=>{
    signOut(auth)
    .then(()=>{
        alert('Logged Out Successfully');
        window.location.href = 'index.html';
    })
    .catch((error) => {
        alert(error.message);
    })
})

// Show User Email on Welcome Page

onAuthStateChanged(auth, (user) => {
if (user && window.location.pathname.includes("welcome.html")) {
document.getElementById("user-email").textContent = user.email;
} else if (!user && window.location.pathname.includes("welcome.html")) {
window.location.href = "index.html";
}
});