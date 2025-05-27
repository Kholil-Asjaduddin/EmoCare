class Consultation {
    constructor(consultationId, clientId, psychologistId, date, time, status) {
        this.consultationId = consultationId;
        this.clientId = clientId;
        this.psychologistId = psychologistId;
        this.date = date;
        this.time = time;
        this.status = status || "scheduled";
    }
}

module.exports = Consultation;