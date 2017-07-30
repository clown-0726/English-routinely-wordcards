$(function () {
    var fileNameList = ['11-amphibians.html', '11-birds.html', '11-fish.html', '11-insect.html', '11-mammal.html',
        '22-flower.html', '22-trees.html',
        '33-fruits.html', '33-grain.html', '33-vegetables.html',
        '44-others.html','55-garment.html'
    ];
    var categoryNameList = ['amphibians', 'birds', 'fish', 'insect', 'mammal',
        'flower', 'trees',
        'fruits', 'grain', 'vegetables',
        'others','garment'
    ];

    for (var i = 0; i < fileNameList.length; i++) {
        getCategoryStatus(fileNameList[i], categoryNameList[i]);
    }
});

function getCategoryStatus(fileName, categoryName) {
    $.get(fileName, function (data, status) {
        var pendingNumber = 0;
        var finishedNumber = 0;
        var totalNumber = 0;

        var sectionArray = [];
        var jQueryObject = $('<div></div>').html(data).children();
        $(jQueryObject).each(function (index, data) {
            if ($(data)[0].nodeName == "SECTION") {
                sectionArray.push($(data));
            }
        });
        totalNumber = sectionArray.length;

        for (var j = 0; j < sectionArray.length; j++) {
            var printedElement = $(sectionArray[j]).find("div[class='cardStade']");
            if (printedElement.length)
                finishedNumber++;
        }
        pendingNumber = totalNumber - finishedNumber;
        $("#" + categoryName).find("small").append(" (Total: " + totalNumber + ", Finished: " + finishedNumber + ",Pending: " + pendingNumber + ".)");
    });
}