$(document).ready(function () {
    var score = 0;
    $(".false").one('click', function () {
        $(this).css("background", '#B26755');
    });
    $(".good").one('click', function () {
        score++;
        $(this).css("background", '#55B270');
        $(".Felicitations").html('Vous avez     ' + score + '/10');

    });

    var numero_ID = 1;
    var nom_ID = "#question";
    var numero_nom_ID = nom_ID + numero_ID;

    $(".suivant").click(function () {
        $(numero_nom_ID).css("display", "none");
        numero_ID++;
        numero_nom_ID = nom_ID + numero_ID;
        $(numero_nom_ID).css("display", "block");
    });

    $(".precedent").click(function () {
        $(numero_nom_ID).css("display", "none");
        numero_ID--;
        numero_nom_ID = nom_ID + numero_ID;
        $(numero_nom_ID).css("display", "block");
    });
});


