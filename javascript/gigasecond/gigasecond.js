var Gigasecond = function(date) {
  this.iDate = date;
};

Gigasecond.prototype.date = function() {
  let gigasecond = Math.pow(10, 12);
  let newTime = this.iDate.getTime();
  return new Date(newTime + gigasecond);
}

module.exports = Gigasecond;
