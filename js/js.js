alert('Olá!')

cond = true
cond2 = true
while(cond==true){
    resposta = prompt("Qual é o seu nome?")
    if(resposta == "Emanuel"){
        cond=false
        while(cond2==true){
            resposta = prompt("Qual a sua idade?")
            if(resposta=="18"){
                alert("Acesso liberado!")
                cond2 = false
            }
        }
    }
}
