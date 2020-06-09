const { Client } = require('discord.js');
const { token } = require('./settings');
const client = new Client();
var facts = []
var waterFacts = []
var sunFacts = []
var languageFacts = []
var popeFacts = []

client.on("error", (e) => console.error(e));

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (facts.length > 6) {
		facts = facts.splice(facts.length - 5, 5)
	}
	if (waterFacts.length > 6) {
		waterFacts = waterFacts.splice(waterFacts.length - 5, 5)
	}
	if (sunFacts.length > 6) {
		sunFacts = sunFacts.splice(sunFacts.length - 5, 5)
	}
	if (languageFacts.length > 6) {
		languageFacts = languageFacts.splice(languageFacts.length - 5, 5)
	}
	if (popeFacts.length > 6) {
		popeFacts = popeFacts.splice(popeFacts.length - 5, 5)
	}

	if (msg.content.startsWith("-facts")) {
		var message = "thank you for helping me learn. Here is what I have learned recently:"
		for (index = 1; index < 6; index++) {
			if (facts.length >= index) {
				message = message.concat("\n - ", facts[facts.length - index]);
			}
		}
		msg.reply(message);
	}
	else if (msg.content.startsWith("-sun facts")) {
		var message = "thank you for helping me learn about the sun. Here is what I have learned recently:"
		for (index = 1; index < 6; index++) {
			if (sunFacts.length >= index) {
				message = message.concat("\n - ", sunFacts[sunFacts.length - index]);
			}
		}
		msg.reply(message);
	}
	else if (msg.content.startsWith("-water facts")) {
		var message = "thank you for helping me learn about water. Here is what I have learned recently:"
		for (index = 1; index < 6; index++) {
			if (waterFacts.length >= index) {
				message = message.concat("\n - ", waterFacts[waterFacts.length - index]);
			}
		}
		msg.reply(message);
	}
	else if (msg.content.startsWith("-language facts")) {
		var message = "thank you for helping me learn about language. Here is what I have learned recently:"
		for (index = 1; index < 6; index++) {
			if (languageFacts.length >= index) {
				message = message.concat("\n - ", languageFacts[languageFacts.length - index]);
			}
		}
		msg.reply(message);
	}
	else if (msg.content.startsWith("-pope facts")) {
		var message = "thank you for helping me learn about the pope. Here is what I have learned recently:"
		for (index = 1; index < 6; index++) {
			if (popeFacts.length >= index) {
				message = message.concat("\n - ", popeFacts[popeFacts.length - index]);
			}
		}
		msg.reply(message);
	}
	else {
		var fact = msg.content.toLowerCase().startsWith("fun fact:");
		fact = fact || msg.content.toLowerCase().startsWith("water fact:");
		fact = fact || msg.content.toLowerCase().startsWith("sun fact:");
		fact = fact || msg.content.toLowerCase().startsWith("language fact:");
		fact = fact || msg.content.toLowerCase().startsWith("pope fact:");
		if (fact) {
			console.log(`author id ${msg.author.id}!`);
			var messageList = msg.content.split(":");
			var factBody = messageList.splice(1, messageList.length).join(":").trim();
			console.log(factBody)
			if (msg.content.toLowerCase().startsWith("water fact:")) {
				msg.reply(`thank you for helping me learn about water`);
				waterFacts.push(factBody);
			}
			else if (msg.content.toLowerCase().startsWith("sun fact:")) {
				msg.reply(`thank you for helping me learn about the sun`);
				sunFacts.push(factBody);
			}
			else if (msg.content.toLowerCase().startsWith("language fact:")) {
				msg.reply(`thank you for helping me learn about language`);
				languageFacts.push(factBody);
			}
			else if (msg.content.toLowerCase().startsWith("pope fact:")) {
				msg.reply(`thank you for helping me learn about the pope`);
				popeFacts.push(factBody);
			}
			else {
				msg.reply(`thank you for helping me learn`);
				facts.push(factBody);
			}
		}
	}
});


client.login(token);
