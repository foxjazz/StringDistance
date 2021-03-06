"use strict";
//interface Iorderdlist {
//    olist: Array<Iobj>;
//}
var tobeOrderedList = (function () {
    function tobeOrderedList() {
    }
    return tobeOrderedList;
}());
var orderedList = (function () {
    function orderedList() {
    }
    return orderedList;
}());
var stringdistance = (function () {
    function stringdistance(sdinput) {
        this.orderList(sdinput);
    }
    stringdistance.prototype.indexPropByPath = function (object, path) {
        var result = object;
        for (var _i = 0, _a = path.split("."); _i < _a.length; _i++) {
            var portion = _a[_i];
            result = result[portion];
        }
        return result;
    };
    stringdistance.prototype.orderList = function (data) {
        var arr;
        arr = data.list;
        if (arr == null || arr.length == 0 || !arr[0].hasOwnProperty(data.prop)) {
            throw ('invalid data');
        }
        var n;
        var tobeo = new tobeOrderedList();
        var i;
        for (i = 0; i < arr.length; i++) {
            var sresult = this.indexPropByPath(arr[i], data.prop);
            var nd = { distance: this.distance(data.input, sresult), o: arr[i] };
            tobeo.olist.push(nd);
        }
        this.result = tobeo.olist.sort(function (a, b) {
            if (a.distance < b.distance)
                return -1;
            if (a.distance > b.distance)
                return 1;
            return 0;
        });
        //Here we need to order the list and assign it to result.
    };
    stringdistance.prototype.distance = function (s1, s2) {
        /* return max value of data type Number on error */
        if (!s1 || !s2) {
            return Number.MAX_VALUE;
        }
        var m = s1.length;
        var n = s2.length;
        var i;
        var j;
        var cost = 0;
        var matrix = new Array();
        /*
         * for all i and j, matrix[i][j] holds the edit distance between the
         * first i characters of s and the first j characters of t.
         *
         * @note
         * Array has (m + 1) * (n + 1) values
         */
        for (i = 0; i <= m; i++) {
            matrix[i] = new Array();
            matrix[i][0] = i;
        }
        for (j = 0; j <= n; j++) {
            matrix[0][j] = j;
        }
        /* determine longest common substring sequence */
        for (j = 1; j <= n; j++) {
            for (i = 1; i <= m; i++) {
                /* subtract one to start, at zero index */
                cost = (s1.charAt(i - 1) == s2.charAt(j - 1)) ? 0 : 1;
                /* insert, delete, substitute */
                matrix[i][j] = Math.min(matrix[i][j - 1] + 1, Math.min(matrix[i - 1][j] + 1, matrix[i - 1][j - 1] + cost));
            }
        }
        /* return edit distance */
        return matrix[m][n];
    };
    return stringdistance;
}());
exports.stringdistance = stringdistance;
//# sourceMappingURL=stringdistance.js.map