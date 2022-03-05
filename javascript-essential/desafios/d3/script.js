var rando = 0

const test1 = function (a, b){
    rando = Math.round(Math.random());
    let c = Math.round(Math.sqrt(a) + Math.sqrt(b));
    if(rando == 0 && c >= 21){
        rando = Math.round(Math.random());
    }
    console.log("Test1:", c);
    console.log("Rando:", rando);
    return c;
}

const test2 = function(a, b){
    rando += Math.round(Math.random());
    let c = Math.pow(a, b);
    let d = Math.round(Math.sqrt(c));
    if(rando == 1 && d < 9999){
        rando = Math.round(Math.random() + 1);
    }
    console.log("Test2:", d);
    console.log("Rando:", rando);
    return d;
}

const test3 = function(a, b){
    rando += Math.round(Math.random());
    let c = a + b;
    console.log("Test3:", c);
    console.log("Rando:", rando);
    if(rando == 3){
        console.log("End");
    }
    return c;
}

const calc = (sum, percentage, currency, prefix) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;
    if (prefix == true){
        console.log(`
        Sum before tip: ${currency}${sum.toFixed(2)}
        Tip percentage: ${percentage}%
        Tip: ${currency}${tip.toFixed(2)}
        Total: ${currency}${total.toFixed(2)}`);
    } else {
        console.log(`
        Sum before tip: ${sum.toFixed(2)}${currency}
        Tip percentage: ${percentage}%
        Tip: ${tip.toFixed(2)}${currency}
        Total: ${total.toFixed(2)}${currency}`);
    }
}

const formatterCalc = (locale, currency, value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
    }).format(value);
    return formattedValue;
};

const calcUpgrade = (sum, percentage, locale, currency) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;
    console.log(`
        Sum before tip: ${formatterCalc(locale, currency, sum)}
        Tip percentage: ${percentage}%
        Tip: ${formatterCalc(locale, currency, tip)}
        Total: ${formatterCalc(locale, currency, total)}
    `);
};


test1(144, 9);
test2(31, 13);
test3(2, 20);
calc(15, 12, "€", false);
calc(39, 27, "$", true);
calcUpgrade(85, 24, "nb-NO", "NOK");