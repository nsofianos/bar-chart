const formatNumber = (n) => {
  //gets n with 1 decimal place to the right. Example: 4232 = 4.232
  let dividedNum = n / 10 ** Math.floor(Math.log10(n));

  let numWithBuffer;
  //check if number is too close to the next integer
  if (Math.round(dividedNum) === Math.ceil(dividedNum)) dividedNum += 1;
  //round number up to something that will divide cleanly, with a buffer
  if (
    Math.ceil(dividedNum) % 7 === 0 ||
    Math.ceil(dividedNum) % 9 === 0 ||
    Math.ceil(dividedNum) % 11 === 0
  )
    numWithBuffer = Math.ceil(dividedNum) + 1;
  else {
    numWithBuffer = Math.ceil(dividedNum);
  }
  //move decimal place back, and return value
  return numWithBuffer * 10 ** Math.floor(Math.log10(n));
};

export const getBreakpoints = (n) => {
  const breakpoints = [];
  const formattedNumber = formatNumber(n);
  const dividedNumber = formattedNumber / 10 ** Math.floor(Math.log10(n));
  //depending on formattedNumber, break into 4 or 5 pieces and push into array
  for (let i = 0; i < 6; i++) {
    if (dividedNumber % 5 === 0) {
      breakpoints.push((formattedNumber / 5) * i);
    } else if (
      (dividedNumber % 4 === 0 ||
        dividedNumber % 2 === 0 ||
        dividedNumber % 3 === 0) &&
      breakpoints.length < 5
    ) {
      breakpoints.push((formattedNumber / 4) * i);
    }
  }
  return breakpoints;
};
