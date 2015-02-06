/**
 * basic simple user module
 * @module User
 */
"use strict";
/**
 * Description for user class.
 *
 * @class User
 * @constructor
 * @param {Object} name, surname, age
 */
function User(params) {
    if (!params) { params = {}; }
    /**
     * @property name
     * @type {String}
     * @default ""
     */
    var name = params.name || '',
    /**
     * @property surname
     * @type {String}
     * @default ""
     */
    surname = params.surname || '',
    /**
     * @property age
     * @type {Integer}
     * @default 0
     */
    age = params.age || 0;
    /**
     * Get the name of the user
     * @method getName
     * @return {String} name
     */
    this.getName = function getName() {
        return name;
    };
    /**
     * Get the full name of the user
     * @method getFullName
     * @return {String} name and surname
     */
    this.getFullName = function getFullName() {
        return name + ' ' + surname;
    };
    /**
     * Get boolean if user is adult
     * @method isAdult
     * @return {Integer} age
     */
    this.isAdult = function isAdult() {
        return age >= 18;
    };
}
