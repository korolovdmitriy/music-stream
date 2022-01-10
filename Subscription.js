"use strict";

function Subscription() {
  this.__status = false;
}

Subscription.prototype.getStatus = function () {
  return this.__status;
};

Subscription.prototype.changeStatus = function () {
  this.__status = !this.__status;
};
