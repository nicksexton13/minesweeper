const express = require('express');
var cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;
// const knex = require('knex')(
// 	require('./knexfile.js')[process.env.NODE_ENV || 'development']
// );
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send('This is the splashpage for the database');
});

app.listen(`${PORT}`, () => {
	console.log(`Your app is listening on port ${PORT}`);
});
