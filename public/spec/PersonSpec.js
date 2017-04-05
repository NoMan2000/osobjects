describe("A demonstration of how classes and object work", () => {

    describe("Can create basic ", () => {

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

        it("Can capitalize the entire name", function () {
            let jackSmith = new Person('jack', 'smith');
            expect(jackSmith.fullUpper()).toEqual("JACK SMITH");
        });

        it("Can use the Constructor Syntax", function () {
            /**
             *
             * @param {String} firstName
             * @param {String} lastName
             * @constructor
             */
            var PersonCreator = function (firstName, lastName) {
                this.firstName = firstName || "John";
                this.lastName = lastName || "Doe";
                this.greeting = function () {
                    return "Hello " + this.firstName + " " + this.lastName;
                }
            };
            var johnDoe = new PersonCreator();
            expect(johnDoe.greeting()).toEqual("Hello John Doe");
            johnDoe.firstName = "Bill";
            expect(johnDoe.greeting()).toEqual("Hello Bill Doe");
        });
        /**
         * This is the most verbose way to create a new object.  The advantage is you can define special properties.
         * The downside is that the verbosity of it makes it very difficult to read.
         */
        it("Can use the Object.create method to create an object", function () {
            var johnDoe = Object.create(null, {
                firstName: {
                    value: "John",
                    writable: true
                },
                lastName: {
                    value: "Doe",
                    writable: true
                },
                greeting: {
                    value: function () {
                        return "Hello " + this.firstName + " " + this.lastName;
                    }
                }
            });
            expect(johnDoe.greeting()).toEqual("Hello John Doe");
            johnDoe.firstName = "Bill";
            expect(johnDoe.greeting()).toEqual("Hello Bill Doe");

        });
    });
});
