const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  rl.question('WHAT is your name?\n', (name) => {
      rl.question('WHAT is your quest?\n', (quest) => {
          rl.question('WHAT is your favourite color?\n', (color) => {
            rl.question('WHAT is the capital of Assyria?\n', (Assyria) => {
              rl.question('WHAT is the airspeed velocity of an unladen swallow?\n', (swallow) => {
                console.log(`${name} is questing for: ${quest}. Their favourite color is ${color}. They know the capital of Assyria was ${Assyria}, and if you ask them the airspeed velocity of an unladen swallow would say to you, ${swallow}`);
            rl.close();
          });
        });
      });
    });
  });

/*
Instead of asking the user about what they think of Node.js, we can ask them the following questions, in order:
    What's your name? Nicknames are also acceptable :)
    What's an activity you like doing?
    What do you listen to while doing that?
    Which meal is your favourite (eg: dinner, brunch, etc.)
    What's your favourite thing to eat for that meal?
    Which sport is your absolute favourite?
    What is your superpower? In a few words, tell us what you are amazing at!
*/