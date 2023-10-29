module.exports = 
function check(str, conf) {
  const obj = {};
  const res = [];
  conf.forEach(([open, close]) => obj[close] = open);
  for (const x of str) {
  if (res.length && res.at(-1) === obj[x]) {res.pop(x)}
  else {res.push(x)}
  } 
  return !res.length;
}


