// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: 'AIzaSyBUTUCpZn8vEq1k38CRAZ-qtpOlPOaJdfU',
    authDomain: "my-personal-portfolio-b92bd.firebaseapp.com",
    projectId: "my-personal-portfolio-b92bd"
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

const postAnEmail = () => {
  const email = document.querySelector('.userEmail').value;
  const username = document.querySelector('.userName').value;
  const message = document.querySelector('.userMsg').value;
  console.log('my email is ' + email);

  db.collection("messages").add({
    email: email,
    username: username,
    message: message
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

}
