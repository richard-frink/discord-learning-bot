const { Client } = require('discord.js');
const { token } = require('./settings');
const client = new Client();
var facts = []

client.on("error", (e) => console.error(e));

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (facts.length > 6){
	  facts = facts.splice(facts.length - 5, 5)
  }

  if (msg.content.startsWith("-facts")) {
	var message = "thank you for helping me learn. Here is what I have learned recently:"
	for (index = 1; index < 6; index++) {
		if (facts.length >= index) {
			message = message.concat("\n - ",facts[facts.length - index]);
		}
	}
	msg.reply(message);
  }
  else{
	var userMessage = msg.content;
	var fact = msg.content.toLowerCase().startsWith("fun fact:");
	if (fact) {
		console.log(`author id ${msg.author.id}!`);
		var messageList = msg.content.split(":");
		var factBody = messageList.splice(1,messageList.length).join(":").trim();
		console.log(factBody)
		msg.reply(`thank you for helping me learn`);
		facts.push(factBody);
	}
  }
});


client.login(token);
