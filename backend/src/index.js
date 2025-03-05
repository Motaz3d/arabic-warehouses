require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('🚀 API يعمل بنجاح!');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 السيرفر يعمل على المنفذ ${PORT}`));