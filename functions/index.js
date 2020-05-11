const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.AddAdminRole = functions.https.onCall((data, context) => {
  // get user and add custom claim
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
        message: `SUccess! ${data.email} has been made an admin`,
      };
    }).catch(error =>{
       return error 
    })
});
