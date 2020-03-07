// NOTE: DO NOT DEPLOY
// NOTE: CLOUD FUNCTIONS ARE NOT NEEDED

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
var functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
var admin = require('firebase-admin');
admin.initializeApp();

exports.deleteOldVisitors = functions.database.ref('/Visitors/{visitor}').onCreate(function(snapshot, context) {
    var bookedAt = snapshot.val().bookedAt;
    var bookedBy = snapshot.val().bookedBy;
    var visitorUID = context.params.visitor;

    // DELETE VISITOR AFTER 86400000ms (24 hours);
    setTimeout(function() {
        deleteVisitor(visitorUID, bookedBy);
    }, 86400000);
});

function deleteVisitor(uid, bookedBy) {
    // DELETE FROM GENERAL NODE
    firebase.database().ref('Visitors/' + uid).remove(function(err) {
        if (err) {
            console.log(err.message);
        }
    }).catch(function(err) {
        console.log(err.message);
    });
    // DELETE FROM RESIDENT NODE
    firebase.database().ref('resident/' + bookedBy + '/visitors/' + uid).remove(function(err) {
        if (err) {
            console.log(err.message);
        }
    }).catch(function(err) {
        console.log(err.message);
    });
}
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });