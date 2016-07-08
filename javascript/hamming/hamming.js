var Hamming = function(year) {
  this.iYear = year;
};

Hamming.prototype.compute = function(strand1, strand2) {
  if(strand1.length != strand2.length)
    throw new Error('DNA strands must be of equal length.');

  if(strand1 === strand2){
    return 0;
  }
  else{
    if(strand1.length === 1)
    {
      return 1;
    }
    else{
      const strandA = strand1.split('');
      const strandB = strand2.split('');
      const hammingArr = strandA.filter((e,i)=>{
        if(e === strandB[i]){
          return false;
        }
        return true;
      });
      return hammingArr.length;
    }
  }
}

module.exports = Hamming;
