const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


//TEST 7
describe("Rover class", function () {
  test("constructor sets position and default values for mode and generatorWatts", function () {

    let newRover = new Rover(98382);
    expect(newRover.position).toEqual(98382);
    expect(newRover.mode).toEqual('NORMAL');
    expect(newRover.generatorWatts).toEqual(110);

  });

});

//TEST 8
describe("Rover message contains name", function () {
  test("response returned by receiveMessage contains the name of the message", function () {

    let messageName = 'Test for neme message';
    let message = new Message(messageName, []);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);

    expect(response.message).toEqual(messageName);

  });

});

//TEST 9
describe("Rover message contains two commands", function () {
  test("response returned by receiveMessage includes two results if two commands are sent in the message", function () {

    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);   
    let results = rover.receiveMessage(message);

    expect(results.message).toEqual(message.name);
    expect(results.results).toEqual(message.commands);

  });

});



