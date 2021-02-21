//Mixed messages object
const mixedMessages = {
    
    //Fun messages stored inside an object ready for iteration.
    happy: ["have a wonderful day.", "have a great week.", "rise above it"],
    uplifting: ["achieve all your dreams.", "have a better day than yesterday.", "realize your true potential."],
    cruel: ["walk into a lamp post.", "stub your toe.", "trip up the curb, because you suck!"],
    //Message starter
    messStarter: ["I believe you will ", "I hope you ", " I sincerely wish you "],
   
    //Random number generator method 
    randNumGen () {
        return Math.floor(Math.random()*3);
    },

    //Returns a random concatenated message method
    build () {
        switch (this.randNumGen()) {
            case 0:
                return this.messStarter[this.randNumGen()] + this.happy[this.randNumGen()];
                break;
            case 1:
                return this.messStarter[this.randNumGen()] + this.uplifting[this.randNumGen()];
                break;
            case 2:
                return this.messStarter[this.randNumGen()] + this.cruel[this.randNumGen()];
                break;
            default:
                return "if this is broken then I strongly believe the universe may have ceased to exist as we know it";
                break;
        }
    },
    //message output method
    output () {
        return console.log(this.build());
    }
}

mixedMessages.output();
    

