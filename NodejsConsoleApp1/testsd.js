"use strict";
var stringdistance_ts_1 = require('./stringdistance.ts');
var itemtypes_1 = require('./itemtypes');
exports.ItemTypeDescriptor = {
    id: Number, id_str: String,
    marketGroup: { href: String, id: Number, id_str: String, },
    Type: { id_str: String, href: String, id: Number, name: String }
};
var TestStringDistance = (function () {
    function TestStringDistance() {
    }
    TestStringDistance.prototype.testsd = function (inp) {
        var xx = new itemtypes_1.ItemTypesService();
        var obj = {
            prop: 'item.name', list: xx.getItemTypes(), input: inp
        };
        var sd = new stringdistance_ts_1.stringdistance(obj);
        this.result = sd.result;
    };
    return TestStringDistance;
}());
//# sourceMappingURL=testsd.js.map