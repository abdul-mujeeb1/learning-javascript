/*
Public: These members of the class and available to everyone that can access the (owner) class instance.
Private: These members are only accessible within the class that instantiated the object.
Protected: This keyword allows a little more access than private members but a lot less than the public. A protected member is accessible within the class (similar to private) and any object that inherits from it.
*/

// Private with using # (ES2019/ES10)

class ObjectCreator {
    #meaningOfLife;

    constructor(name) {
        this.#meaningOfLife = 42;
    }

    returnMeaningOfLife() {
        return this.#meaningOfLife;
    }

    #returnAMessage() {
        return "You will do great things in life";
    }
}


/**The language enforces encapsulation.
 *  It is a syntax error to refer to # names from out of scope. 
 * Public and private fields do not conflict. We can have both private #meaningOfLife and
 *  public meaningOfLife fields in the same class.
 */

