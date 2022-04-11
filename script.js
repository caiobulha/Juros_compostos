function selic(){
        var inputInicial = document.getElementById("preco")
        var inputInicialval = Number((inputInicial.value))

        var inputMensal = document.getElementById("valorMensal")
        var inputMensalval = Number((inputMensal.value))


        var inputQntMes = document.getElementById('par')
        var inputMesVal = Number((inputQntMes.value))

        var calc = 11.75 / 100 + 1;
        
        var imp = ""

        for(juros = 1; juros <= inputMesVal; juros++ ) {
        inputInicialval = inputInicialval * calc;
        inputInicialval = inputInicialval + inputMensalval;

        imp = imp + "Mês ......" + juros + " .......  R$ " + inputInicialval.toFixed(2) +  "<br>"
        }

        alert(inputInicialval.toFixed(2))

        document.getElementById('res').innerHTML = imp;
    }

function Calcular(){
        var inputInicial = document.getElementById("preco")
        var inputInicialval = Number((inputInicial.value))

        var inputMensal = document.getElementById("valorMensal")
        var inputMensalval = Number((inputMensal.value))

        var inputPorcentagem = document.getElementById('jur')
        var inputPor = Number((inputPorcentagem.value))

        var inputQntMes = document.getElementById('par')
        var inputMesVal = Number((inputQntMes.value))

        var calc = inputPor / 100 + 1;

        var imp = ""

        for(juros = 1; juros <= inputMesVal; juros++ ) {
        inputInicialval = inputInicialval * calc;
        inputInicialval = inputInicialval + inputMensalval;

        imp = imp + "Mês ......" + juros + " .......  R$ " + inputInicialval.toFixed(2) +  "<br>"

        }

        document.getElementById('res').innerHTML = imp;
        alert(inputInicialval.toFixed(2))

}

        // var calc = jur / 100 + 1;
        //     for(juros = 1; juros <= par; juros++ ) {
        //             preco = preco * calc;
        //             preco = preco + valorMensal;
        //             console.log(preco.toFixed(2))
        //     }

        //  var juros = 1
        //  do {
        //      var preco = (preco + valorMensal) * calc;
        //      juros++;
        //  } while (juros <= par);



        