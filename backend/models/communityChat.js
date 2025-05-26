class CommunityChat {
    constructor(messageId, communityId, senderId, text, timestamp) {
        this.messageId = messageId;
        this.communityId = communityId;
        this.senderId = senderId;
        this.text = text;
        this.timestamp = timestamp;
    }
}

module.exports = CommunityChat;