'use strict';

module.exports = {
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if (!(event in this)) this[event] = new Map();
        if (!this[event].has(subscriber)) this[event].set(subscriber, []);
        this[event].set(subscriber, [...this[event].get(subscriber), handler.bind(subscriber)]);
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if (event in this && this[event].has(subscriber)) {
            this[event].delete(subscriber);
        }
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if (event in this) {
            [...this[event].values()].forEach((v) => v.forEach((v2) => v2()));
        }
        return this;
    }
};
