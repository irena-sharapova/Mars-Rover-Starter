class Rover {
   constructor(position) {
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }

   receiveMessage(message) {
      let results = [];

      for (let i = 0; i < message.commands.length; i++) {
         let currentCommand = message.commands[i];

         if (currentCommand.commandType === "MOVE") {
            if (this.mode === "LOW_POWER") {
               results.push({ completed: false });
            } else {
               this.position = currentCommand.value;
               results.push({ completed: true });
            }

         } else if (currentCommand.commandType === "STATUS_CHECK") {
            results.push({
               completed: true,
               roverStatus: {
                  mode: this.mode,
                  generatorWatts: this.generatorWatts,
                  position: this.position
               }
            });

         } else if (currentCommand.commandType === "MODE_CHANGE") {
            if (currentCommand.value === "NORMAL") {
               this.mode = "NORMAL"
               results.push({ completed: true });

            } else if (currentCommand.value === "LOW_POWER") {
               this.mode = "LOW_POWER"
               results.push({ completed: true });
            }

         } else {
            results.push({ completed: false })
         };
      };

      return {
         message: message.name,
         results: results
      };
   }

}

module.exports = Rover;

