describe("A demonstration of how extension works", () => {

    describe("Doctor Class ", () => {

        it("Can create a new object", () => {
            let obj = new Person();
            expect(obj).not.toBeUndefined();
        });

        it("Can create a new person and get the firstname from it", () => {
            let obj = new Person("Ryan");
            expect(obj.firstname).toEqual("Ryan");
        });

        it("Can create a basic object and assign a method on it", () => {
            let jackSmith = new Person('Jack', 'Smith'),
                janeDoe = new Person('Jane', 'Doe'),
                billJack = new Person("Bill", 'Jack');

            expect(jackSmith.fullname()).toEqual("Jack Smith");
            expect(janeDoe.fullname()).toEqual("Jane Doe");
            expect(billJack.fullname()).toEqual("Bill Jack");
        });

        it("Can capitalize the firstname and lastname even if they are not initially capitalized", () => {
            let samSmith = new Person('sam', 'smith');
            expect(samSmith.fullname()).toEqual('Sam Smith');
        });

        it("Can capitalize the entire name", () => {
            let jackSmith = new Person('jack', 'smith');
            expect(jackSmith.fullUpper()).toEqual("JACK SMITH");
        });

        it("Can lowercase the entire name", () => {
            let jackSmith = new Person('JACK', 'SMITH');
            expect(jackSmith.fullLower()).toEqual('jack smith');
        });

        it("Can set the first name and last name after the fact", () => {
            let johnDoe = new Person();
            johnDoe.firstname = 'john';
            johnDoe.lastname = 'doe';
            expect(johnDoe.fullname()).toEqual("John Doe");
        });

        it("Will throw an Error if the firstname is not correct", () => {
            expect( () => {
                let z = new Person(10);
            }).toThrow();
        });

        it("Will throw an Error if the lastname is not correct", () => {
            expect( () => {
                let z = new Person('john', 10);
            }).toThrow();
        });

    });
});
