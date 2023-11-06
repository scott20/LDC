function calculateScore() {
    var score = 0;
    var correctAnswers = ["b", "b", "b", "b", "a"]; // Adicione as respostas corretas aqui

    for (var i = 0; i < correctAnswers.length; i++) {
        var question = "q" + (i + 1);
        var selectedOption = document.querySelector('input[name="' + question + '"]:checked');

        if (selectedOption && selectedOption.value === correctAnswers[i]) {
            score++;
        }
    }

    document.getElementById("score").innerHTML = "Você acertou " + score + " de " + correctAnswers.length + " perguntas!";
}