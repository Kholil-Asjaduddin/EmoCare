const express = require('express');
const app = express();
const educationRoutes = require('./routes/educationRoutes');

app.use(express.json()); // Middleware untuk parsing JSON

app.use('/api/education', educationRoutes); // Prefix endpoint

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
