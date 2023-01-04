require('dotenv').config();
const express = require('express');
const app = express();

const mainConfig = {
	links: {
		android:process.env.ANDROID_URL,
		ios:process.env.IOS_URL,
		mac: process.env.MAC_URL,
		windows: process.env.WINDOWS_URL,
		official: process.env.OFFICIAL_DOMAIN
	},
	title: 'Pi Network Portal',
	invitationCode: process.env.INVITATION_CODE,
}

app.use(express.static('public'))

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('pages/index', mainConfig);
});

app.get('/about', function(req, res) {
	res.render('pages/about', mainConfig);
});

app.get('/faq', function(req, res) {
	res.render('pages/faq', mainConfig);
});

app.get('/node', function(req, res) {
	res.render('pages/node', mainConfig);
});

app.get('*', function(req, res){
  res.render('pages/404', mainConfig);
});


const PORT = process.env.PORT;
app.listen(PORT, () => console.log('Server started on PORT = ' + PORT));