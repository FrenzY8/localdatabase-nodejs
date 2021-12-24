// Now import all module 
const readline = require('readline');
const Cryptr = require('cryptr');
const fs = require('fs');
const cryptr = new Cryptr('myTotalySecretKey');
// Ok done.
var rl = readline.createInterface({ input: process.stdin, output: process.stdout })

// Now give them question, so we can make the database
rl.question("What is your name? : ", name => {
// Ask one mores.
rl.question("What is your discord password? : ", discord => {
	//Ok now create the filees and encrypt it.
	const discordenc = cryptr.encrypt(discord); // Already encrypted!!
	// Now create the file
	fs.writeFileSync(
		"database.json",
		`{
"name": "${name}",
"discordpassword": "${discordenc}"
}`
		);
	console.log(`registered! ${name}`) // design :D
})
});
