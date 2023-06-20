const path = require('path')
console.log(path.sep)

var filepath = path.join('/content','subfolder','test.txt');
  
console.log(filepath)

var basename = path.basename(filepath)
console.log(basename)