var topics = ["HTML", "CSS", "GIT", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random()*topics.length)];

function selectTopic() {
    if (randomTopic==="HTML") {
        console.log("Let's study HTML!")
    } else if(randomTopic==="CSS") {
        console.log("Let's study CSS!")
    } else if (randomTopic==="GIT") {
        console.log("Let's study GIT!")
    } else if (randomTopic==="JavaScript") {
        console.log("Let's study JAvaScript!")
    } else {
        console.log("Please try again!")
    }
}



function listTopics() {
    for (var topic=0; topic<topics.length; topic++) {
        console.log(topics[topic]);
    }
    
}
console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();