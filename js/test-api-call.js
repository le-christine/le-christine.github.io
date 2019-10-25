function testApi() {
db.collection("messages").add({
  email: "email",
  username: "username",
  message: "message"
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});
}
