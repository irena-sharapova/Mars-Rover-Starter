class Rover {
   constructor(position) {
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
    }

    receiveMessage(message) {
      let roverResponse = {
         message: message.name,
         results: message.commands
      };
      return roverResponse;
   
    }

   
}

module.exports = Rover;