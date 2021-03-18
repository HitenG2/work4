
function getRNA(){
  let DNA = document.getElementById('DNA').value;
  let RNA = '';
  for(let i = 0; i < DNA.length; ++i){
    if (DNA[i] == 'G') RNA += 'C';
    else if(DNA[i] == 'C') RNA += 'G';
    else if(DNA[i] == 'T') RNA += 'A';
    else if(DNA[i] == 'A') RNA += 'U';
    else RNA += DNA[i];
  }
  document.getElementById('RNA').innerHTML = RNA;
}

function HandlerDNA_oninput() {
  let DNA = document.getElementById('DNA').value;
  document.getElementById('validSymb').innerHTML = '';
  let length = DNA.length;
  var trulyDNA;
  if (DNA == '') return '';
  else if (DNA[length - 1] == 'A') return '';
  else if (DNA[length - 1] == 'C') return '';
  else if (DNA[length - 1] == 'G') return '';
  else if (DNA[length - 1] == 'T') return '';
  else if (DNA[length - 1] == 'U') return '';
  else {
    if (length == 1) trulyDNA = '';
    else trulyDNA = DNA.substring(0, length - 1);
    document.getElementById('validSymb').innerHTML = "*Valid symbols: A-C-G-T-U";
  }
  document.getElementById('DNA').value = trulyDNA;
}

function HandlerDNA_onpaste() {
  setTimeout(function(){
    let DNA = document.getElementById('DNA').value;
    let length = DNA.length;
    var cleanerDNA = [];
    var trulyDNA = '';
    for (let i = 0; i < length; ++i){
      if (DNA[i] == 'A' || DNA[i] == 'C') cleanerDNA.push(DNA[i]);
      else if (DNA[i] == 'G' || DNA[i] == 'T') cleanerDNA.push(DNA[i]);
      else if (DNA[i] == 'U') cleanerDNA.push(DNA[i]);
    }
    for (let i = 0; i < cleanerDNA.length; ++i){
      trulyDNA += cleanerDNA[i];
    }
    document.getElementById('DNA').value = trulyDNA;
}, 4);
}