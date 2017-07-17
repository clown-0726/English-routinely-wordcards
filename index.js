$(function () {
    var pendingNumber = 0;
    var finishedNumber = 0;

    $("section").each(function (index) {
        var printedElement = $(this).find("div[class='cardStade']");
        if (printedElement.length)
            finishedNumber++;
    });
    var totalNumber = $("section").length;
    pendingNumber = totalNumber - finishedNumber;

    var bulletBoardText = "Totally have " + totalNumber + " pieces. ";
    bulletBoardText += finishedNumber + " piece/pieces finished. ";
    bulletBoardText += pendingNumber + " piece/pieces pending. ";
    $("#bulletBoard").text(bulletBoardText);
});