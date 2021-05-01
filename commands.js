const replies = ['Hello there 🖖🖖', 'Yo Yo 🤳', 'Ding Dong❌❗❗❌']

const pnp = require('./commands/pnp.js');
const gif = require('./commands/gif.js');

const commands = { pnp, gif };

module.exports = async function (msg) {
    let tokens = msg.content.split(' ');
    let command = tokens.shift();
    if (command.charAt(0) === '&') {
        command = command.substring(1);
        commands[command](msg, tokens);
    }
    
};