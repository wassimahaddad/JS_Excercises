function nb_year(p0, percent, newp, pt) {
  let counter = 0;
  while (p0 <= pt) {
    p0 = p0 * (1 + percent / 100) + newp;
    counter++;
  }
  return counter;
}
