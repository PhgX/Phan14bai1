function reply(answer){
    let traloi='';
    if(answer) {
        traloi="Tôi đói quá rồi";
    }
    else {
        traloi="Tôi không đói";
    }
    return traloi;
}

question = confirm("Ông có đói không")
result = reply(question);
alert(result);

// function processConfirm(answer) {
//     let result = "";
//     if (answer) {
//         result = "Excellent. We'll play a nice game of chess.";
//     } else {
//         result = "Maybe later then.";
//     }
//     return result;
// }

// let confirmAnswer = confirm("Shall we play a game?");
// let theAnswer = processConfirm(confirmAnswer);
// alert(theAnswer);