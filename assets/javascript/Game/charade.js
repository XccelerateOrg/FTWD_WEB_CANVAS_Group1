$("#playGame").click(function () {
    getRandomWord(
        (wordSrc) => {
            console.log("Word----", wordSrc)
            alert(`Your word is "${wordSrc}" and you have 30 seconds to draw.`)
        }
    )
});

function getRandomWord(callback) {
    $.ajax({
            url: "https://random-word-form.herokuapp.com/random/noun",
            method: "GET",
        })
        .done(function (data) {
            callback(data)
        })
        .fail(function (data) {
            console.log(`get word failed`)
        })
}