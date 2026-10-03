function evaluateScore(score) {

    if (isNaN(score) || score <= 0 || score > 100) {
        return "INVALID SCORE";
    }

    else if (score >= 90) {
        return "EXCELLENT";
    }

    else if (score >= 75) {
        return "PASSED";
    }

    else {
        return "FAILED";
    }
}


function startEvaluation() {

    alert("WELCOME TO THE SCORE EVALUATOR!!");

    let name = prompt("ENTER YOUR NAME: ");
    let score = prompt("ENTER YOUR SCORE: ");


    if (name === null || name.trim() === "") {

        document.getElementById("nameResult").innerHTML = "INVALID NAME";
        document.getElementById("gradeResult").innerHTML = "---";
        document.getElementById("remarkResult").innerHTML = "---";

        return;
    }


    if (score === null || score.trim() === "") {

        document.getElementById("nameResult").innerHTML = name.trim();
        document.getElementById("gradeResult").innerHTML = "INVALID INPUT";
        document.getElementById("remarkResult").innerHTML = "INVALID SCORE";

        return;
    }


    if (!confirm("Do still want to continue?")) {

        document.getElementById("remarkResult").innerHTML =
            "Evaluation Cancelled...";

        return;
    }


    let numericScore = Number(score);

    let remark = evaluateScore(numericScore);


    document.getElementById("nameResult").innerHTML = name.trim();

    document.getElementById("gradeResult").innerHTML = numericScore;

    document.getElementById("remarkResult").innerHTML = remark;
}