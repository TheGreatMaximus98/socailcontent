const firebaseConfig = {
  apiKey: "AIzaSyCuYXfAsSUQP-1gNRXXDetCU-KDdPDnpwY",
  authDomain: "socialcontent-db.firebaseapp.com",
  projectId: "socialcontent-db",
  storageBucket: "socialcontent-db.appspot.com",
  messagingSenderId: "488254523586",
  appId: "1:488254523586:web:071e852334555ebcbb135b",
  measurementId: "G-HYD48R46J9"
};
const app = firebase.initializeApp(firebaseConfig);
function login(){
  firebase.auth().signInWithEmailAndPassword(document.querySelector(".email").value, document.querySelector(".pswwrd").value)
  .then((userCredential) => {
    var user = userCredential.user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
}