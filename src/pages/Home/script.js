
document.converte.addEventListener("submit",async (event)=>{
    event.preventDefault(); // não faça ação padrão
    
    let origin = document.querySelector("#fromCurrency").options[document.querySelector("#fromCurrency").selectedIndex].value;
    let destino = document.querySelector("#toCurrency").options[document.querySelector("#toCurrency").selectedIndex].value;
    let api = `https://v6.exchangerate-api.com/v6/0c7c1ea82b96a019b9f0acf6/latest/${origin}`;
    let input = document.querySelector("#amount").value;
    let  results = await fetch(api);
    let dados = await results.json();
    
    try{
        if(!results.ok){
        throw new Error('erro na requisição:' + results.status)
        }

        if (dados.result=="success"){
            
            let taxa = dados.conversion_rates[destino];
            let valorConvertido = input * taxa;
            let resultado = document.querySelector(".conversionResult")
            resultado.innerHTML=`O valor convertido de ${input} ${origin} para ${destino} é ${valorConvertido.toFixed(2)}`;
       }else{
        console.error('A resposta da API não indica sucesso:', dados);
    }
    }catch(error){
         console.error('Erro ao buscar dados:', error);}











})


