function coletaDados(){
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value
    const idade = document.getElementById("idade").value
    if (altura === "" || peso === "" || isNaN(idade)) {
        alert("Informações faltando ou inválidas");
        return;
    }
    console.log(altura,peso,idade)
    return {altura,peso,idade}


}

function calculo_IMC(peso,altura){
    const IMC = peso / (altura * altura)
    return IMC
}

function operadoraA(){
    const {altura,peso,idade}=coletaDados()
    const IMC = calculo_IMC(peso,altura)
    console.log(IMC)
    const valorPlanoBasicoA = planoBasicoA(IMC,idade)
    const valorPlanoStandartA = planoStandartA(IMC,idade)
    const valorPlanoPremiumA = planoPremiumA(IMC,idade)

    console.log("Valor plano básico ",valorPlanoBasicoA)
    console.log("Valor plano standart",valorPlanoStandartA)
    console.log("Valor plano premium", valorPlanoPremiumA)
    return {valorPlanoBasicoA,valorPlanoStandartA,valorPlanoPremiumA}
}

function planoBasicoA(IMC,idade){
    const valorPlanoBasicoA=100 + (idade * 10 * (IMC /10))
    return valorPlanoBasicoA
}
function planoStandartA(IMC,idade){
    valorPlanoStandartA = (150 + (idade * 15)) * (IMC/10) 
    return valorPlanoStandartA
}
function planoPremiumA(IMC,idade){
    const valorPlanoPremiumA= (200 - (IMC*10) + (idade*20)) * (IMC/10)
    return valorPlanoPremiumA
}

function CalculoRiscoComorbidade(IMC){
    let fatorComobidade = undefined
    if (IMC <18.5){
        fatorComobidade = 10
    }
    else if (IMC<25){
        fatorComobidade = 1
    }
    else if (IMC<30){
        fatorComobidade = 6
    }
    else if (IMC<35){
        fatorComobidade = 10
    }
    else if(IMC<40){
        fatorComobidade = 20
    }
    else{
        fatorComobidade = 30
    }
    return fatorComobidade
}
function operadoraB(){
    const {altura,peso}=coletaDados()
    const IMC = calculo_IMC(peso,altura)
    const fatorComobidade = CalculoRiscoComorbidade(IMC)
    const valorPlanoBasicoB = planoBasicoB(IMC,fatorComobidade)
    const valorPlanoStandartB = planoStandartB(IMC,fatorComobidade)
    const valorPlanoPremiumB = planoPremiumB(IMC,fatorComobidade)

    console.log("Valor plano básico ",valorPlanoBasicoB)
    console.log("Valor plano standart",valorPlanoStandartB)
    console.log("Valor plano premium", valorPlanoPremiumB)
    return {valorPlanoBasicoB,valorPlanoStandartB,valorPlanoPremiumB}
}

function planoBasicoB(IMC,fatorComobidade){
    const valorPlanoBasicoB=100 + (fatorComobidade * 10 * (IMC /10))
    return valorPlanoBasicoB
}
function planoStandartB(IMC,fatorComobidade){
    valorPlanoStandartB = (150 + (fatorComobidade * 15)) * (IMC/10) 
    return valorPlanoStandartB
}
function planoPremiumB(IMC,fatorComobidade){
    const valorPlanoPremiumB= (200 - (IMC*10) + (fatorComobidade*20)) * (IMC/10)
    return valorPlanoPremiumB
}

function comparação() {
    const {
        valorPlanoBasicoA,
        valorPlanoStandartA,
        valorPlanoPremiumA
    } = operadoraA();
    const {
        valorPlanoBasicoB,
        valorPlanoStandartB,
        valorPlanoPremiumB
    } = operadoraB();

    let melhorPlanoBasico = undefined;
    let melhorPlanoStandart = undefined;
    let melhorPlanoPremium = undefined;
    let classeBasicoA = undefined;
    let classeBasicoB = undefined;
    let classeStandartA = undefined;
    let classeStandartB = undefined;
    let classePremiumA = undefined;
    let classePremiumB = undefined;
    const melhorPlano = 'melhorplano';
    const piorPlano = 'piorplano';

    if (valorPlanoBasicoA < valorPlanoBasicoB) {
        melhorPlanoBasico = "A";
        classeBasicoA = melhorPlano;
        classeBasicoB = piorPlano;
    } else {
        classeBasicoA = piorPlano;
        classeBasicoB = melhorPlano;
    }

    if (valorPlanoStandartA < valorPlanoStandartB) {
        melhorPlanoStandart = "A";
        classeStandartA = melhorPlano;
        classeStandartB = piorPlano;
    } else {
        melhorPlanoStandart = "B";
        classeStandartA = piorPlano;
        classeStandartB = melhorPlano;
    }

    if (valorPlanoPremiumA < valorPlanoPremiumB) {
        melhorPlanoPremium = "A";
        classePremiumA = melhorPlano;
        classePremiumB = piorPlano;
    } else {
        melhorPlanoPremium = "B";
        classePremiumA = piorPlano;
        classePremiumB = melhorPlano;
    }

    console.log(melhorPlanoBasico, melhorPlanoStandart, melhorPlanoPremium);

    let tabela = `<table class="table">
    <thead>
        <tr>
            <th scope="col" class="cabeçalhos alinhamento-vertical">Tipo de plano</th>


            <th scope="col" class="cabeçalhos">
            <img src="unimed-logo-1.png" class="imagem">
            
            </th>

            <th scope="col" class="cabeçalhos">
            <img src="Amil-logo.png" class="imagem2">
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Plano básico</th>
            <td class="${classeBasicoA}">R$${valorPlanoBasicoA.toFixed(2)}</td>
            <td class="${classeBasicoB}">R$${valorPlanoBasicoB.toFixed(2)}</td>
        </tr>
        <tr>
            <th scope="row">Plano Standart</th>
            <td class="${classeStandartA}">R$${valorPlanoStandartA.toFixed(2)}</td>
            <td class="${classeStandartB}">R$${valorPlanoStandartB.toFixed(2)}</td>
        </tr>
        <tr>
            <th scope="row">Plano premium</th>
            <td class="${classePremiumA}">R$${valorPlanoPremiumA.toFixed(2)}</td>
            <td class="${classePremiumB}">R$${valorPlanoPremiumB.toFixed(2)}</td>
        </tr>
    </tbody>
</table>`;
    document.getElementById("extrato").innerHTML = tabela;
}



