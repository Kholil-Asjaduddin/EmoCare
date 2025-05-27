const { db } = require("../config/firebaseAdmin");

const findUserById = async (userId) => {
    const clientSnapshot = await db.ref(`users/clients/${userId}`).once("value");
    const psychologistSnapshot = await db.ref(`users/psychologists/${userId}`).once("value");

    if (clientSnapshot.exists()) {
        return { user: clientSnapshot.val(), role: "client" };
    } else if (psychologistSnapshot.exists()) {
        return { user: psychologistSnapshot.val(), role: "psychologist" };
    } else {
        return null;
    }
};

module.exports = { findUserById };