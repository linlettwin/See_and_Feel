function changeColor(name) {
  var n1 = parseInt(document.getElementById('num1').innerHTML);
  var n2 = parseInt(document.getElementById('num2').innerHTML);
  console.log(document.getElementById(name).style.background == 'lightgray');
  if (document.getElementById(name).style.background == 'lightgray') {
    if (n1 >= n2) {
      alert("Query is full. Please Deselect one!");
    }
    else {
      document.getElementById(name).style.background = '#0BCE07';
      n1++;
      document.getElementById('num1').innerHTML = n1;
    }
  }
  else {
    document.getElementById(name).style.background = 'lightgray';
    if (n1 >= 1) n1--;
    document.getElementById('num1').innerHTML = n1;
  }
}
let idn;
function FromCheck() {
  var fr = document.getElementById('fplace').value;
  fr = fr.toLowerCase();
  switch (fr) {
    case 'yangon': idn = 'ygn1'; break;
    case 'mandalay': idn = 'mdy1'; break;
    case 'naypyitaw (bawga)': idn = 'npt1'; break;
    case 'bagan/nyaung-u': idn = 'bgn1'; break;
    case 'taunggyi': idn = "tgy1"; break;
    default: idn = "other1"; 
  }
  console.log(idn);
}
