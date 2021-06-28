// random word
$("#playGame").click(function () {
    getRandomWord(
        (wordSrc) => {
            console.log("Word----", wordSrc)
            alert(`Your word is "${wordSrc}"`)
        }
    )
});

function getRandomWord(callback) {
    $.ajax({
            // CODE HERE
            url: "https://random-word-form.herokuapp.com/random/noun",
            method: "GET",
        })
        .done(function (data) {
            // CODE HERE
            callback(data)
            // console.log(response)
            // console.log("This function will be run if the ajax is successful.")
        })
        .fail(function (data) {
            // CODE HERE
            // console.log("This function will be run if the ajax is failed.")
        })
        .always(function (data) {
            // CODE HERE
            // console.log("This functions runs no matter what.")
        });
}