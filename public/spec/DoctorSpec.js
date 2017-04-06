describe("A demonstration of how extension works", () => {
    describe("Doctor Class ", () => {
        it("Can create extend a method", () => {
            let janeAustin = new Doctor('jane', 'austin');
            expect(janeAustin.fullname()).toEqual('Dr. Jane Austin');
        });
    });
});
