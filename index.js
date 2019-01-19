const server = require('./server');
const port = process.env.PORT || 5959;

//routes
server.get('/', (req, res) => {
  res.send(`API working.\n Sanity Check\n Test Route!`);
});



server.listen(port, function() {
  console.log(`\n=== Web API Listening on === \n=== http://localhost:${port} ===\n`);
});


