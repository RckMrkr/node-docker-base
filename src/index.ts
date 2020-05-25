import {createServer} from 'http'

createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write('{message:"This is just an example"}');
  res.end();
}).listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`));