// Helper function to format currency numbers. Used by tipCalculator
const formatter = (locale = "en-US", currency = "USD", value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  
    return formattedValue;
  };
  
  // Callback receives finalTip object, creates and outputs table on the DOM.
  const printHTML = (final) => {
    const tipTable = document.createElement("table");
    tipTable.innerHTML = `
      <tr>
        <td>Sum before tip:</td>
        <td>${final.sum}</td>
      </tr>
      <tr>
        <td>Tip percentage:</td>
        <td>${final.percentage}</td>
      </tr>
      <tr>
        <td>Tip:</td>
        <td>${final.tip}</td>
      </tr>
      <tr>
        <td>Total:</td>
        <td>${final.total}</td>
      </tr>
    `;
    document.querySelector("main").append(tipTable);
  };
  
  // Create a finalTip object with all the data. Send it to the printHTML callback.
  const tipCalculator = (sum, percentage, locale, currency, callback) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;
  
    const finalTip = {
      sum: formatter(locale, currency, sum),
      percentage: percentage + "%",
      tip: formatter(locale, currency, tip),
      total: formatter(locale, currency, total),
    };
    callback(finalTip)
  };
  
  tipCalculator(239.49, 29, "de-DE", "BRL", printHTML);

let fruitsList = document.createElement("ul");
const array = ["Apple", "Orange", "Grape", "Strawberry", "Banana"];
array.forEach((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  fruitsList.append(listItem);
});

document.querySelector("footer").append(fruitsList);

let computerList = document.createElement("ol")
const computerObjects = {
  obj1: {
    name: "Keyboard",
    price: 32,
    hasRGB: false,
  },
  obj2: {
    name: "Monitor",
    price: 400,
    hasRGB: true,
  },
  obj3: {
    name: "Motherboard",
    price: 240,
    hasRGB: true,
  },
  obj4: {
    name: "Processor",
    price: 380,
    hasRGB: true,
  },
  obj5: {
    name: "Mouse",
    price: 50,
    hasRGB: false,
  },
}

for (const singleObject in computerObjects) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `Name: ${computerObjects[singleObject].name}, Price: $${computerObjects[singleObject].price}`;
  computerList.append(listItem);
}

document.querySelector("footer").prepend(computerList);

const mapItems = array.map((item) => {
  let list = document.createElement("li");
  list.innerHTML = item;
  return list;
});

mapItems.forEach((item) => {
  fruitsList.append(item);
})

console.log("map", mapItems)