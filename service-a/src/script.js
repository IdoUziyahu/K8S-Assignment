const ITERATIONS_TO_CALC_AVERAGE = 10;
const ITERATION_TIME_IN_MS = 60 * 1000;

const htmlElement = document.getElementById("main");

let bitcoinValues = [];

const getAndPrintBitcoinValue = async () => {
  // get data from API
  const response = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice/USD.json"
  );
  const data = await response.json();
  const currentBitCoinValue = data.bpi.USD.rate_float;
  const updateTime = new Date(data.time.updatedISO);

  // append data to html
  bitcoinValues.push(currentBitCoinValue);

  const paragraph = document.createElement("p");
  paragraph.textContent = `Date: ${updateTime}, Bitcoin value: ${currentBitCoinValue} USD`;

  // add average if we got 10 values
  if (bitcoinValues.length === ITERATIONS_TO_CALC_AVERAGE) {
    const sum = bitcoinValues.reduce((a, b) => a + b, 0);
    const average = sum / bitcoinValues.length;

    bitcoinValues = [];
    paragraph.textContent += `, Average value of last 10 minutes: ${average} USD`;
  }

  htmlElement.appendChild(paragraph);
};

// loop the process every minute
getAndPrintBitcoinValue();
setInterval(getAndPrintBitcoinValue, ITERATION_TIME_IN_MS);
