module.exports = function (app) {
	app.get('/', function(req, res) {
		res.render('home.html', {
			home: 'class="current"',
			partials: {
				head: 'partials/head.html',
				header: 'partials/header.html',
				footer: 'partials/footer.html'
			}
		});
	});
	app.get('/wiki', function(req, res) {
		res.render('wiki.html', {
			wiki: 'class="current"',
			partials: {
				head: 'partials/head.html',
				header: 'partials/header.html',
				footer: 'partials/footer.html'
			}
		});
	});
	app.get('/reviews', function(req, res) {
		res.render('reviews.html', {
			reviews: 'class="current"',
			partials: {
				head: 'partials/head.html',
				header: 'partials/header.html',
				footer: 'partials/footer.html'
			}
		});
	});
	app.get('/forum', function(req, res) {
		res.render('forum.html', {
			forum: 'class="current"',
			partials: {
				head: 'partials/head.html',
				header: 'partials/header.html',
				footer: 'partials/footer.html'
			}
		});
	});
	app.get('/about', function(req, res) {
		res.render('about.html', {
			about: 'class="current"',
			partials: {
				head: 'partials/head.html',
				header: 'partials/header.html',
				footer: 'partials/footer.html'
			}
		});
	});
	app.get('/change-log', function(req, res) {
		res.render("change-log.html");
	});
};
