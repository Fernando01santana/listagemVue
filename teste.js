/*XMLHttpRequest = transferir dados entre o cliente eo servidor
var xht = new XMLHttpRequest();
//metodo open inicia uma nova requisição
xht.open('GET','index.php');
//se o metodo onload for carregado com sucesso dispara o XMLHttpRequest
xht.onload = function(){
    //verificando se deu certo usando o indicativo de codigo do http
    if (xht.status === 200) { 
        //variavel json recebe o texto enviado pelo servidor a apos o envio da  solicitação
        var json = JSON.parse(xht.responseText)
        console.log(json);
    }else{
        console.log("deu erro "+XPathResult.status);
    }
}
//envia a solicitação ao servidor e aguarda se for assincrona vem atravez de eventos
//caso contrario nao retorna nada
xht.send();*/