const { db } = require("../config/firebaseAdmin");

const findUserById = async (userId) => {
    const clientSnapshot = await db.ref(`users/clients/${userId}`).once("value");
    const psychologistSnapshot = await db.ref(`users/psychologists/${userId}`).once("value");

    if (clientSnapshot.exists()) {
        return clientSnapshot.val().username;
    } else if (psychologistSnapshot.exists()) {
        return psychologistSnapshot.val().username;
    } else {
        return null;
    }
};

module.exports = { findUserById };