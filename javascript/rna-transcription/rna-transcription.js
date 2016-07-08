var RNATranscript = function() {};

RNATranscript.prototype.toRna = function(strandToRNA) {
  rnaStrand = strandToRNA.split('');
  newStrand = rnaStrand.map((e) => {
    switch (e){
      case 'G':
       e = 'C';
      break;
      case 'C':
       e = 'G';
      break;
      case 'T':
       e = 'A';
      break;
      case 'A':
       e = 'U';
      break;
      default:
      break;
    }
    return e;
  });
  const finalStrand = newStrand.join('');
  return finalStrand;
}

module.exports = RNATranscript;
