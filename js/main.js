function start(){
    $("#inicio").hide()

    $("#fundoGame").append("<div id='jogador' class='anima1'></div>")
    $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>")
    $("#fundoGame").append("<div id='inimigo2'></div>")
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>")

    
    var jogo = {}

    jogo.timer = setInterval(loop, 30)

    function loop(){
        moveFundo()
        moveJogador()
    }

    function moveFundo(){
        esquerda = parseInt($("#fundoGame").css("background-position"))
        $("#fundoGame").css("background-position", esquerda-1)
    }

    var tecla = {
        W: 87,
        S: 83,
        D: 68
    }

    jogo.pressionou = []

    $(document).keydown(function(e){
        jogo.pressionou[e.which] = true
    })

    $(document).keyup(function(e){
        jogo.pressionou[e.which] = true
    })

    function moveJogador(){
        if (jogo.pressionou[tecla.W]){
            var topo = parseInt($("#jogador").css("top"))
            $("#jogador").css("top", topo-10)
        }

        if (jogo.pressionou[tecla.S]){
            var topo = parseInt($("#jogador").css("top"))
            $("#jogador").css("top", topo+10)
        }
    }
}
