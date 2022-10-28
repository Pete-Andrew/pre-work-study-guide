var Topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var RandomTopic = Topics[Math.floor(Math.random() * Topics.length)];

function ListTopics() {

    for (var x = 0; x < Topics.length; x++) 
    {
        console.log (Topics[x]);    
    }
} //prints out the list of var Topics

function SelectTopic() {
if (RandomTopic === 'HTML') 
    {
    console.log("Let's study HTML!");
    } else if (RandomTopic === 'CSS') {
    console.log("Let's study CSS!");
    } else if (RandomTopic === 'Git') {
    console.log("Let's study Git!");
    } else if (RandomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through prework:')
ListTopics()
console.log('Which topic should we study first?');
SelectTopic();
