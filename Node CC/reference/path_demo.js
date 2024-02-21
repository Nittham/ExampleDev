const path = require('path');

//basename - base file name
console.log(__filename);
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

//file extension
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename));

//concatenate path objects
console.log(path.join(__dirname,'test','hello.html'));