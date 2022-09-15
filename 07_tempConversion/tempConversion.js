const ftoc = function(fahr) {
  let cels = 0;

  // formula: c = (f - 32) / 1.8
  cels = (fahr - 32) / 1.8;

  if (cels % 1 === 0)
    return cels;
  else
    return Number(cels.toFixed(1));
};

const ctof = function(cels) {
  let fahr = 0;

  // formula: f = (c * 1.8) + 32
  fahr = (cels * 1.8) + 32;

  if (fahr % 1 === 0)
    return fahr;
  else
    return Number(fahr.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
