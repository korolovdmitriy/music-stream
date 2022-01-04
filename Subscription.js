'use strict';

class Subscription {
    #status;
    constructor() {
        this.#status = false;
    }

    get status() {
        return this.#status;
    }

    changeStatus() {
        this.#status = !this.#status;
    }
}




// =====================================================
// function Subscription () {
//     this.__status = false;
// }

// Subscription.prototype.getStatus = function () {
//     return this.__status;
// };

// Subscription.prototype.changeStatus = function () {
//    this.__status = !this.__status;
// };

