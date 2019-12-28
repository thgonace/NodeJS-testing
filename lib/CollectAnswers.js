const readline = require("readline");
const {EventEmitter} = require("events");
const rl  = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




// default done function
module.exports = (questions,done = f => f)  => {
    const answers=[];
    const [firstQuestion] = questions;
    const emitter = new EventEmitter();
    const questionsAnswered = answer => {
        emitter.emit("answer",answer);
        answers.push(answer);
        if(answers.length < questions.length){
            rl.question(questions[answers.length], questionsAnswered);
        }
        else{
            done(answers);
        }


    }
    rl.question (firstQuestion, questionsAnswered);
    return emitter;
    //done(answers);
}



