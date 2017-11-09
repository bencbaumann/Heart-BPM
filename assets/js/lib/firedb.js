// Initialize Firebase
var config = {
  apiKey: "AIzaSyDsehiHoo9Y3zY2yzS5cdayNot4ISX7QjE",
  authDomain: "hello-world-3b2c5.firebaseapp.com",
  databaseURL: "https://hello-world-3b2c5.firebaseio.com",
  projectId: "hello-world-3b2c5",
  storageBucket: "hello-world-3b2c5.appspot.com",
  messagingSenderId: "721569458570"
};
firebase.initializeApp(config);

var db = firebase.database();

function snapshotToArray(snapshot) {
  var returnArr = [];

  snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
  });

  return returnArr;
};