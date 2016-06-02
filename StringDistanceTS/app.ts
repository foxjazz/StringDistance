console.log('Hello world');
import {TestStringDistance} from './testsd';
let tsd = new TestStringDistance();
tsd.testsd('kern');
let result: Array<Object>;
result = tsd.result;

let i: number;
for (i = 0; i < result.length; i++) {
    console.log(result[i]);
}