let express = require('express');
let app = express();
let path = require('path');
let __dirname = "YelpCamp";

app.set("view engine", "ejs");
app.set('views', __dirname + '/views');  

app.get('/', (req,res) =>{
	res.render("landing");
});

app.get('/campgrounds', (req, res) => {
	let campgrounds = [
		{name: "Brotherhood camp fire", image: "https://pixabay.com/get/e83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104497f6c179a0ecbdb0_340.jpg"},
		{name: "Colors collection", image: "https://pixabay.com/get/ea36b7062bf6093ed1584d05fb1d4e97e07ee3d21cac104497f6c179a0ecbdb0_340.jpg"},
		{name: "Night stars", image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104497f6c179a0ecbdb0_340.jpg"}
	];
	res.render('campgrounds', {campgrounds: campgrounds});
});

app.listen(3000, () => {
	console.log('app is started');
});
