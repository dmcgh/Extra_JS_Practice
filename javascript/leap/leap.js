var Leap = function(year) {
  this.iYear = year;
};

Leap.prototype.isLeap = function() {
  if(this.iYear % 4 === 0){
    if(this.iYear % 100 == 0){
      if(this.iYear % 400 == 0){
        return true;
      }
      return false
    }
    return true;
  }
  return false;
  

}

module.exports = Leap;
