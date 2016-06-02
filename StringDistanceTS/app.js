"use strict";
console.log('Hello world');
var testsd_1 = require('./testsd');
var tsd = new testsd_1.TestStringDistance();
tsd.testsd('kern');
var result;
result = tsd.result;
var i;
for (i = 0; i < result.length; i++) {
    console.log(result[i]);
}
//# sourceMappingURL=app.js.map