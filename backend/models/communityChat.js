class CommunityChat {
    constructor(messageId, communityId, senderName, text, timestamp) {
        this.messageId = messageId;
        this.communityId = communityId;
        this.senderName = senderName;
        this.text = text;
        this.timestamp = timestamp;
    }
}

module.exports = CommunityChat;