const Input = document.getElementById("input");
const Demo = document.getElementById("demo");

const Arrays = [
  ["bir", "ikki", "uch", `to'rt`, "besh", "olti", "yetti", "sakkiz", `to'qqiz`],
  [
    `o'n`,
    "yigirma",
    `o'ttiz`,
    "qirq",
    "ellik",
    "oltmish",
    "yetmish",
    "sakson",
    `to'qson`,
  ],
  ["yuz", "ming", "million", "milliard", "trillion"],
];

var Massive = [];
var maslen = [];
var chunks = [];

function Xisobchi(qiymat , x){
  let o = 0;
  if(qiymat.length === 3){
    Massive = []
    if(qiymat > 0){
      for (let i=qiymat.length;i > 0 ; i--){
        if(o === 0){
          Massive.push(Arrays[0][qiymat[o] - 1]);
          Massive.push( Arrays[i - 1][0]);
        }else{
          Massive.push(Arrays[i - 1][qiymat[o] - 1])
        }
        o++;
      }
    }
    
  }else if(qiymat.length == 2){
    Massive =[]
    if(qiymat > 0){
      for (let i=qiymat.length;i > 0 ; i--){
        Massive.push(Arrays[i - 1][qiymat[o] - 1])
        o++;
    }
    }
  }else{
    Massive = []
    if(qiymat > 0){
      Massive.push(Arrays[0][qiymat[o] - 1])
    }
  }

  if(x > 0){
    if(qiymat > 0){
      maslen.push(Massive.join(' '));
      maslen.push(Arrays[2][x]);
    }
  }else{
    maslen.push(Massive.join(' '));
  }
}

function MyFunction (x, value ) {
  let r = 0;
  maslen = [];
  chunks = [];

  ajratishFunksiyasi(value);

  function ajratishFunksiyasi(son) {
    const sonStr = son.toString();
    const chunks = [];
    let start = sonStr.length % 3;

    if (start === 0) start = 3;
    let chunk = sonStr.substring(0, start);
    while (chunk.startsWith('0')) {
        chunk = chunk.slice(1); 
    }
    chunks.push(chunk);

    for (let i = start; i < sonStr.length; i += 3) {
        chunk = sonStr.substring(i, i + 3);
        while (chunk.startsWith('0')) {
            chunk = chunk.slice(1);
        }
        chunks.push(chunk);
    }

    for (let i = 0; i < chunks.length; i++) {
      r++;
      maslen.push(Xisobchi(chunks[i], chunks.length - r));
      console.log(maslen);
      // document.getElementById('demo').innerHTML = maslen.join(', ');

      let result = maslen.filter(item => typeof item === 'string' && item !== ',').join(' ');
      console.log(result);
      document.getElementById('demo').innerHTML = result;

    }

    return chunks;

  }


}

function myFunction() {
  const x = Input.value.length;
  if (x > 15) {
    alert("kotta raqam kirgizdingiz 15 xonali raqam kirgizing !!!");
  } else {
    MyFunction(x, Input.value);
  }
  Massive = [];
}
