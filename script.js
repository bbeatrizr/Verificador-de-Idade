function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 4){
                //bebe
                img.setAttribute ('src' , 'bebemenino02.png')
            }else if (idade >= 5 && idade <= 15) {
                //criança
                img.setAttribute('src', 'criancamenino.png')
            } else if (idade >= 16 && idade <= 21){
                //jovem
                img.setAttribute('src', 'jovemmenino.png')
            }else if (idade <= 50){
                //adulto
                img.setAttribute('src', 'adultohomem.png')
            }else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 4){
                //bebe
                img.setAttribute('src', 'bebemenina.png')
            }else if (idade >= 5 && idade <= 15){
                //criança
                img.setAttribute('src', 'criancamenina.png')
            } else if (idade >=16 && idade <= 21){
                //jovem
                img.setAttribute ('src', 'meninajovem.png')
            }else if (idade <= 59){
                //adulto
                img.setAttribute('src', 'meninaadulta.png')
            }else {
                //idoso
                img.setAttribute('src', 'idosa.pnj.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    
    }

}