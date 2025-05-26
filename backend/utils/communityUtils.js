const { db } = require("../config/firebaseAdmin");

const findCommunityById = async (communityId) => {
    const communitySnapshot = await db.ref(`communities/${communityId}`).once("value");

    if (!communitySnapshot.exists()) {
        return null;
    }

    return communitySnapshot.val();
};

module.exports = { findCommunityById };