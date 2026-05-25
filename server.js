const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/merndb')
  .then(() => console.log('✅ MongoDB Connected!'))
  .catch((err) => console.log('❌ Error:', err.message));

app.get('/', (req, res) => {
  res.send('Backend is Running! ✅');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});