import commands from './utils/commands';

//Check to see if browser supports webkitSpeechRecognition
if(!('webkitSpeechRecognition' in window)) {
     alert('Your browser does not support speech recognition, please download Google Chrome.');
} 
else {
    const recognition = new webkitSpeechRecognition();
    
    //Keep listening for commands
    recognition.continuous = true;
    recognition.lang = 'en-GB';
    recognition.start();
    
    //Append spoken commands to "Commands called list"
    let ul = document.querySelector('.commands');
    
    //Called each time a phrase has been spoke
    recognition.onresult = function(event) { 
        let result = event.results[event.results.length - 1][0].transcript;
        result = result.replace(/(^\s+|\s+$)/g,'');

        //Create li and append to top of page
        let element = document.createElement('li');
        element.innerText = result;
        ul.appendChild(element);
        
        //Action command if it exists on commands object
        let command = result.split(" ");
        let method = command[0];
        command.shift();
        command = command.join(" ");
        
        //Checks if method called exists in object, if so executes it with params
        if(method in commands) {
            console.log('true', method);
            commands[method](command.toLowerCase());
        } else {
            console.log('Command doesn\'t exist');
        }
    };
}