(function setupPinballPlayer(root) {
    class PinballPlayer extends root.Person {

        static checkTotal(name, value) {
            if (Number.isInteger(value)) {
                return true;
            }
            throw new Error(`${value} of ${name} is not a valid integer`);
        }

        static toInteger(value) {
            return Number(Number(value).toFixed(0));
        }

        set totalLosses(value) {
            PinballPlayer.checkTotal('totalLosses', value);
            this._totalLosses = PinballPlayer.toInteger(value);
        }
        get totalLosses() {
            return PinballPlayer.toInteger(this._totalLosses);
        }
        set totalWins(value) {
            PinballPlayer.checkTotal('totalLosses', value);
            this._totalWins = PinballPlayer.toInteger(value);
        }
        get totalWins() {
            return PinballPlayer.toInteger(this._totalWins);
        }

        get totalGames() {
            return this.totalLosses + this.totalWins;
        }

        get winRatio() {
            return ((this.totalWins / this.totalGames) * 100).toFixed(2) + '%';
        }

    }

    root.PinballPlayer = PinballPlayer;
}(this));

