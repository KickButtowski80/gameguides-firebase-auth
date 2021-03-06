const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.addAdminRole = functions.https.onCall((data, context) => {
  // check request is made by admin
  if (context.auth.token.admin !== true) {
    return { error: "only admins can add other amdins, boy" };
  }
  // get user and add custom claim (admin)

  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      return {
        message: `Success! ${data.email} has been an admin ${context}`,
      };
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
});
