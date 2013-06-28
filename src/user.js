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
    var name = params.name || '';
    var surname = params.surname || '';
    var age = params.age || 0;
    /**
     * get name of the user
     * @method getName
     * @return {String} name
     */
    this.getName = function getName() {
        return name;
    };
    /**
     * get full name of the user
     * @method getFullName
     * @return {String} name and surname
     */
    this.getFullName = function getFullName() {
        return name + ' ' + surname;
    };
    /**
     * get boolean if user is adult
     * @method isAdult
     * @return {Integer} age
     */
    this.isAdult = function isAdult() {
        return age >= 18;
    };
}