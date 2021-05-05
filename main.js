let nome = prompt('Olá! Seja bem vindo ao jogo. Qual o seu nome?');
document.write('Veja seu resultado ' + nome);


let iniciar = prompt('Quer iniciar o jogo? \n 1-Sim \n 2-Não'); 
console.log(iniciar);

if( iniciar === '1') {  
    let iniciar = alert ('Vamos lá! O assunto é Música!');

    
    let questao1 = prompt('Quem canta a música "pais e filhos" \n A - Bon Jovi \n B- Legião Urbana');
    console.log(questao1);
        if(questao1 ==='b'){
            alert ('Você acertou! Vamos para a próxima.');
        } else {
            alert ('Quase! Vamos para a próxima.');
        }

    let questao2 = prompt('Em que ano a banda "Mamonas Assassinas" sofreu a queda de avião? \n A- 2020 \n B-1996');
    console.log(questao2);
        if(questao2 === 'b'){
            alert ('Você acertou! Vamos para a próxima.');
        } else {
            alert ('Quase! Vamos para a próxima.');
        }
        
    let questao3 = prompt('Qual dessas musicas é da cantora Pitty? \n A- Equalize \n B- Tempo perdido');
    console.log(questao3);
        if(questao3 === 'a'){
            alert ('Você acertou! Veja seus resultados.');
        } 
        else {
            alert ('Quase! Veja seus resultados.');
        }

} else {  
        alert ('Volte sempre!');
    
}

