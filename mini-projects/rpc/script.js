var compPickArr = ['Rock', 'Paper', 'Scissors'],
    userPick,
    compPick,
    winnerStr,
    userScore = 0,
    compScore = 0,
    areYouAWinner,
    $userScoreText = $('.user-score-text'),
    $compScoreText = $('.comp-score-text'),
    $winnerText = $('.winner-text'),
    $compText = $('.comp-text'),
    $playAgainBtn = $('.play-again');

function compChoice(item) {
    compPick = compPickArr[Math.floor(Math.random() * compPickArr.length)];
}

function winner(userPick, compPick) {

    if (userPick === compPick) {
        winnerStr = 'Tie';
        areYouAWinner = null;
    } else if (userPick === 'Rock' && compPick === 'Scissors') {
        winnerStr = 'Win';
        areYouAWinner = true;
    } else if (userPick === 'Paper' && compPick === 'Rock') {
        winnerStr = 'Win';
        areYouAWinner = true;
    } else if (userPick === 'Scissors' && compPick === 'Paper') {
        winnerStr = 'Win';
        areYouAWinner = true;
    } else {
        winnerStr = "loser";
        areYouAWinner = false;
    }

}

function makePick() {
    $('.play').on('click', function() {
        userPick = $(this).val();
        compChoice();

        winner(userPick, compPick);
        $winnerText.text(winnerStr)
        $compText.text('Computer picked: ' + compPick);

        if ($compText.text().length > 0) {
            $('.play').attr('disabled', 'disabled');
            $playAgainBtn.fadeIn();
            compChoice();
        }
    })
}

$(function() {

    makePick();

    $playAgainBtn.on('click', function() {
        $('.play').removeAttr('disabled');
        $compText.text('');
        $(this).hide();

        if (areYouAWinner) {
            ++userScore;
            $winnerText.text('Nice Win. Keep it going.');
            $userScoreText.text(userScore);
        } else if (areYouAWinner === false) {
            ++compScore;
            $winnerText.text('Tough loss. Get a win this time.');
            $compScoreText.text(compScore);
        } else {
            $winnerText.text('Ties are okay. Get \'em this time');
        }

        makePick();
    })

})
