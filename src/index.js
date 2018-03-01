// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) return {"error": "You are rich, my friend! We don't have so much coins for exchange"};
var h = 0; 
var q = 0; 
var d = 0;
var n = 0;
var p = 0; 
while (currency >= 50) {
    currency -= 50;
    h += 1;
};
while (currency >= 25) {
    currency -= 25;
    q += 1;
};
while (currency >= 10) {
    currency -= 10;
    d += 1;
};
while (currency >= 5) {
    currency -= 5;
    n += 1;
};
while (currency >= 1) {
    currency -= 1;
    p += 1;
};
var KolMoney = {};
if (h != 0) KolMoney.H = h;
if (q != 0) KolMoney.Q = q;
if (d != 0) KolMoney.D = d;
if (n != 0) KolMoney.N = n;
if (p != 0) KolMoney.P = p;
return KolMoney;  
}
