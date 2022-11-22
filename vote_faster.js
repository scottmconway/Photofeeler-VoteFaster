// ==UserScript==
// @name         VoteFaster
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Simple interface for quickly voting on photofeeler attributes - simply type the number of the currently highlighted score to vote on it. The last attribute voted on will advance the page.
// @author       Scott Conway
// @match        https://www.photofeeler.com/vote/*
// @grant        none
// ==/UserScript==

(function() {
    //var karmaValue = document.getElementsByClassName("karma-value")[0].textContent;
    //var numCredits = Number(document.getElementsByClassName("credit-value")[0].textContent);
    var voteButton = document.getElementsByClassName("vote-button", "btn", "btn-primary")[0];
    var votableAttributes = Array.from(document.getElementsByClassName("score-column"));
    var currentAttributeIndex = 0;

    // grab the column names so we can highlight them
    // and the votables scores below them so we can click them
    var columnNames = votableAttributes.slice(0, votableAttributes.length / 2);
    votableAttributes = votableAttributes.slice(votableAttributes.length / 2);

    // kickoff to highlight the left-most attribute
    var defaultStyle = columnNames[currentAttributeIndex].getAttribute("style");
    columnNames[currentAttributeIndex].style.backgroundColor = "pink";

    window.onkeypress = function(keyId) {
        var score = Number(String.fromCharCode(keyId.keyCode));
        if (score != NaN && score >= 0 && score <= 3) {
            Array.from(votableAttributes[currentAttributeIndex].getElementsByClassName("score-value")).reverse()[score].click();
            columnNames[currentAttributeIndex].style = defaultStyle;
            currentAttributeIndex += 1;

            if (currentAttributeIndex >= votableAttributes.length) {
                voteButton.click();
                currentAttributeIndex = 0;
            }

            columnNames[currentAttributeIndex].style.backgroundColor = "pink";
        }
    };
})();
