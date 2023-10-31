// const path = require('path');

// module.exports = (app) =>
//   app.get('/', (req, res) =>
//     res.sendFile(path.join(__dirname, '../client/index.html'))
//   );


const path = require('path');

module.exports = (app) => {
 const filePath = path.join(__dirname, '../client/index.html');
 
 console.log(`File path: ${filePath}`);

 app.get('/', (req, res) =>
   res.sendFile(filePath)
 );
};