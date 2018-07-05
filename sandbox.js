strContent ="USD 210";
let regexp2 = /(\d|\.)+/;
let lll2 = strContent.match(regexp2)[0];
let aa = strContent.match(/(\d|\.)+/)[0];
console.log(aa);