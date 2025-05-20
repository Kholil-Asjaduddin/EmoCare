const { InferenceClient } = require('@huggingface/inference');

const huggingFaceAccessToken = process.env.HUGGINGFACE_ACCESS_TOKEN;
const inference = new InferenceClient(huggingFaceAccessToken);

const model = "tanusrich/Mental_Health_Chatbot";

const getResponse = async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Message cannot be empty" });
        }

        const response = await inference.textGeneration({
            model: model,
            inputs: message
        });

        res.json(response);
    } catch (error) {
        res.status(500).json({ error: "Error fetching AI response", details: error.message });
    }
};

module.exports = { getResponse };