let c1;
let c2;
let preçoF;
let marca=document.getElementById("marca");
let modelo=document.getElementById("modelo");
let preçoAquisição=document.getElementById("preçoAquisição");
let anoAquisição=document.getElementById("anoAquisição");
let quilometragem=document.getElementById("quilometragem");
let IdadeAutomóvel;
let PreçoMauE;
let PreçoMBE;
let ImagemFundo=document.getElementById("sidebar").style.backgroundImage;
let Output=document.getElementById("Output");
let EntradaInicial=document.getElementById("EntradaInicial");
let seleção;
let MauE=document.getElementById("MauE");
let BomE=document.getElementById("BomE");
let MtBE=document.getElementById("MtBE");

//Escolha Tipo de veículo
function select(i) {
  if (i == 1) {
    document.getElementById("Carros").classList.add("selected");
    document.getElementById("Motas").classList.remove("selected");
    document.getElementById("Barcos").classList.remove("selected");
    ImagemFundo=url("assets/imgs/carheader.jpg");
  } else {
    if (i == 2) {
      document.getElementById("Carros").classList.remove("selected");
      document.getElementById("Motas").classList.add("selected");
      document.getElementById("Barcos").classList.remove("selected");
      ImagemFundo=url("assets/imgs/bikeheader.jpg");
    }
    else{
      document.getElementById("Carros").classList.remove("selected");
      document.getElementById("Motas").classList.remove("selected");
      document.getElementById("Barcos").classList.add("selected");
      ImagemFundo=url("assets/imgs/boatheader.jpg");

    }
  }
}

//Cálculo da Idade do automóvel
IdadeAutomóvel=2023-anoAquisição.value;

//Cálculo c2 e c1
if (IdadeAutomóvel <= 10) {
    c1 = 0.05;
  } else {
    c1=0.04;
  }
if (quilometragem.value <= 30000) {
    c2 = 1;
  } else {
      if (quilometragem.value <= 70000) {
        c2 = 0,95;
      }
      else{
        c2=0.9;
      }
  }

  //função de cálculo do Preço Final 3 estados
let x=preçoAquisição.value;

function PreçoFinal(){
    preçoF=x*(1-IdadeAutomóvel*c1)*c2;
    PreçoMauE=preçoF*0.6;
    PreçoMBE=preçoF*1.1;
    document.getElementById("preço1").innerHTML=preçoF+"€";
    document.getElementById("preço2").innerHTML=PreçoMauE+"€";
    document.getElementById("preço3").innerHTML=PreçoMBE+"€";
    document.getElementById("Marca").innerHTML=marca.value;
    document.getElementById("Marca2").innerHTML=marca.value;
    document.getElementById("Marca3").innerHTML=marca.value;
    document.getElementById("Modelo").innerHTML=modelo.value;
    document.getElementById("Modelo2").innerHTML=modelo.value;
    document.getElementById("Modelo3").innerHTML=modelo.value;
    document.getElementById("AnoMatricula").innerHTML="ano:"+anoAquisição.value;
    document.getElementById("AnoMatricula2").innerHTML="ano:"+anoAquisição.value;
    document.getElementById("AnoMatricula3").innerHTML="ano:"+anoAquisição.value;
    document.getElementById("Quilometragem").innerHTML=quilometragem.value+" kms";
    document.getElementById("Quilometragem2").innerHTML=quilometragem.value+" kms";
    document.getElementById("Quilometragem3").innerHTML=quilometragem.value+" kms";
    Output.style.display= "grid";
}

//Evento cálculo 3 estados
let btn = document.getElementById("btn");


btn.addEventListener("click", PreçoFinal);


//Escolha do Estado do Automóvel
MauE.addEventListener("click", function(){
  seleção=1;
  document.getElementById("Financiamento").style.display="block";
}
)

BomE.addEventListener("click", function(){
  seleção=2;
  document.getElementById("Financiamento").style.display="block";
}
)

MtBE.addEventListener("click", function(){
  seleção=3;
  document.getElementById("Financiamento").style.display="block";
}
)
//Cálculo Spread e Taxa de Juro-------------------------------------------------------------------------------------------------------




//Cálculo Duração???-------------------------------------------------------------------------------------------------------


//Cálculo Valor Empréstimo?????-------------------------------------------------------------------------------------------------------



//Cálculo Valor Mensal????-------------------------------------------------------------------------------------------------------


//Cálculo do Financiamento
let btnFinanciamento= document.getElementById("btn2");
let t=0;
let spr = [], tx = [],l;
let MontanteFinanciado=document.getElementById("MontanteFinanciado");


btnFinanciamento.addEventListener("click", function() {
  document.getElementById("ValorEmpréstimo").innerHTML= "Valor de empréstimo €"+MontanteFinanciado.value;
  document.getElementById("ValorEmpréstimo2").innerHTML= "Valor de empréstimo €"+MontanteFinanciado.value;
  document.getElementById("ValorEmpréstimo3").innerHTML= "Valor de empréstimo €"+MontanteFinanciado.value;

  if(t==0){
    t++;
  document.getElementById("Resultado").style.display="block";
  }
  else{
    t--;
    document.getElementById("Resultado").style.display="none";
  }
  document.getElementById("ValorEntrada").innerHTML= EntradaInicial.value+"€";
  document.getElementById("ValorEntrada2").innerHTML= EntradaInicial.value+"€";
  document.getElementById("ValorEntrada3").innerHTML= EntradaInicial.value+"€";
  if(seleção==1){
    document.getElementById("MontanteTotal").innerHTML= PreçoMauE+"€";
    document.getElementById("MontanteTotal2").innerHTML= PreçoMauE+"€";
    document.getElementById("MontanteTotal3").innerHTML= PreçoMauE+"€";
  }
  else{
    if(seleção==2){
      document.getElementById("MontanteTotal").innerHTML= preçoF+"€";
      document.getElementById("MontanteTotal2").innerHTML= preçoF+"€";
      document.getElementById("MontanteTotal3").innerHTML= preçoF+"€";
    }
    else{
      document.getElementById("MontanteTotal").innerHTML= PreçoMBE+"€";
      document.getElementById("MontanteTotal2").innerHTML= PreçoMBE+"€";
      document.getElementById("MontanteTotal3").innerHTML= PreçoMBE+"€";
    }
  }
  for (l = 0; l < 3; l++) {
    spr[l] = (Math.floor(Math.random() * 5) + 1);
    document.getElementById("spread" + (l + 1)).textContent = spr[l]+"%";
  }
  for (l = 0; i < 3; l++) {
    tx[l] = 0.5 + spr[l];
    document.getElementById("taxa" + (l + 1)).textContent = tx[l]+"%";
  }
}
);



 