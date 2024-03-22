function equalPT(str) {
  var strp = str.replace(/[^p]/g, "");

  var strt = str.replace(/[^t]/g, "");

  let plen = strp.length;
  let tlen = strp.length;

  return plen === tlen;
}
console.log(equalPT("paatpss"));
console.log(equalPT("paaatps"));
