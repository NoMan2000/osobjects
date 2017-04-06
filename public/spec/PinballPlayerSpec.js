describe("A demonstration of how extension works", () => {
    describe("Pinball Class ", () => {
        it("Can get and set total Wins", () => {
            let janeAustin = new PinballPlayer('jane', 'austin');
            janeAustin.totalWins = 12;
            expect(janeAustin.fullname()).toEqual('Jane Austin');
            expect(janeAustin.totalWins).toEqual(12);
        });

        it("Can get and set total losses", () => {
           let johnDoe = new PinballPlayer('john', 'doe');
           johnDoe.totalLosses = 100;
           expect(johnDoe.totalLosses).toEqual(100);
        });

        it("Can get total Games from values", () => {
           let jamesDoe = new PinballPlayer('james', 'doe');
           jamesDoe.totalLosses = 15;
           jamesDoe.totalWins = 20;
           expect(jamesDoe.totalGames).toEqual(35);
        });

        it("Can get the win/loss ratio as a percent", () => {
            let jamesDoe = new PinballPlayer('james', 'doe');
            jamesDoe.totalLosses = 15;
            jamesDoe.totalWins = 20;
            expect(jamesDoe.winRatio).toEqual('57.14%');
        });

    });
});
