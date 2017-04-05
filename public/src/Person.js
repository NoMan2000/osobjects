let strValue = String.prototype.valueOf,
    tryStringObject = function tryStringObject(value) {
        try {
            strValue.call(value);
            return true;
        } catch (e) {
            return false;
        }
    },
    toStr = Object.prototype.toString,
    strClass = '[object String]',
    hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol',
    isString = function isString(value) {
        if (typeof value === 'string') {
            return true;
        }
        if (typeof value !== 'object') {
            return false;
        }
        return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
    },
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

class Person {

    constructor(firstname, lastname) {
        if (firstname) {
            this.firstname = firstname;
        }
        if (lastname) {
            this.lastname = lastname;
        }
    }

    get firstname() {
        return this._firstname;
    }

    set firstname(value) {
        if (isString(value)) {
            return this._firstname = capitalizeFirstLetter(value);
        }
        return Person.invalidNameError('firstname', value);
    }

    get lastname() {
        return this._lastname;
    }

    set lastname(value) {
        if (isString(value)) {
            return this._lastname = capitalizeFirstLetter(value);
        }
        return Person.invalidNameError('lastname', value);
    }

    fullname() {
        return `${this.firstname} ${this.lastname}`;
    }

    fullUpper() {
        return this.fullname().toLocaleUpperCase();
    }

    fullLesser() {
        return this.fullname().toLocaleLowerCase();
    }

    static invalidNameError(name, value) {
        throw new Error(`${value} of ${name} is a not a valid string.`);
    }
}
