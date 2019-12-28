//const readline = require("readline");
const collectAnswers = require("./lib/CollectAnswers");



/*const rl  = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});*/



const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with node js? "
];


/*const collectAnswers = (questions,done) => {
    const answers=[];
    const [firstQuestion] = questions;

    const questionsAnswered = answer => {
        answers.push(answer);
        if(answers.length < questions.length){
            rl.question(questions[answers.length], questionsAnswered);
        }
        else{
            done(answers);
        }


    }
    rl.question (firstQuestion, questionsAnswered);
    //done(answers);
}
*/

// call to function collect answers
/*
collectAnswers(questions, answers => {
    console.log("Thank you for your answers. ")
    console.log(answers);
    process.exit();

});
*/


collectAnswers(questions);