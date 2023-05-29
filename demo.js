function numGenerate(){
    var lottery =[];

    for(var i = 0;i <3; i++){
        var n = Math.floor(Math.random()*10)+1;
        if(lottery.indexOf(n) === -1){
            lottery.push(n);
        }
    }
    return lottery;
}

function matchNumCnt(input, winNum){
    var count = 0;
    for(var i = 0; i< input.length; i++){
        if(winNum.indexOf(input[i]) !== -1){
            count++;
        }
    }
    return count;
}

function reset(){
    document.getElementById('input1').value = "";
    document.getElementById('input2').value = "";
    document.getElementById('input3').value = "";
    document.getElementById('result').textContent = "";
}

function check() {
    var input1 = parseInt(document.getElementById('input1').value);
    var input2 = parseInt(document.getElementById('input2').value);
    var input3 = parseInt(document.getElementById('input3').value);

    if(isNaN(input1) || isNaN(input2) || isNaN(input3) || input1 < 1 || input1 > 10 || input2 < 1|| input2 > 10 || input3 < 1 || input3 > 10 || input1===input2 || input2 === input3 || input1 === input3){
        alert("invalid");
        reset();
        return;
    }

    var winNum = numGenerate();
    var matchNum = matchNumCnt([input1, input2, input3], winNum);
    var result = "";

    if(matchNum === 3){
        resultText = "Congratulations on First Price!!";
        document.write('<img src = "https://media.giphy.com/media/NfzERYyiWcXU4/giphy.gif">');
    }
    else if(matchNum === 2){
        resultText = "Well done! Second price is yours."
        document.write('<img src = "https://media.giphy.com/media/NfzERYyiWcXU4/giphy.gif">');
    }
    else if(matchNum === 1){
        resultText = "It's okay. You still got third price.";
        document.write('<img src = "https://media.giphy.com/media/NfzERYyiWcXU4/giphy.gif">');
    }
    else{
        resultText = "Poor. You won NOTHING.";
        document.write('<img src = "https://media.giphy.com/media/NfzERYyiWcXU4/giphy.gif">');
    }

    document.getElementById('result').textContent = resultText;
}