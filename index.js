require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
	return res.status(200).json({"status":"okay"});
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log('Server started on PORT = ' + PORT));