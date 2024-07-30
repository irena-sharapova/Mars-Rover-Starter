const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

//TEST 4
describe("Message class", function() {
    test("throws error if a name is NOT passed into the constructor as the first parameter", function() {
        expect(function () { new Message(); }).toThrow(new Error('Name required.'));

    });

});

//TEST 5
describe("constructor sets name", function() {
    test("constructor correctly set the name property", function() {
        let newName = new Message('Test message name check');
        expect(newName.name).toEqual('Test message name check');
    });

});

//TEST 6
describe("contains a commands array passed into the constructor as the 2nd argument", function() {
    test("confirms that the commands property of a new message object contains the data passed in from the Message", function() {
        let commands =  [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 100)];
        let message = new Message('Test message ', commands);
        expect(message.commands).toEqual(commands);
  });

});





