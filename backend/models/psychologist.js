class Psychologist {
    constructor(userId, username, specialization, experience, photoBase64) {
        this.userId = userId;
        this.username = username;
        this.specialization = specialization;
        this.experience = experience;
        this.photoBase64 = photoBase64;
    }
}

module.exports = Psychologist;