/**
 * basic simple payment module
 * @module Payment
 */
'use strict';
/**
 * Description for payment class.
 *
 * @class Payment
 * @constructor
 * @param {Object} params
 */
function Payment (params) {
    params = params || {};
    /**
     * @property amount
     * @type {Number}
     * @default 0
     */
    var amount = params.amount || 0;
    /**
     * Get the amount
     * @method getAmount
     * @return {Number} amount
     */
    this.getAmount = function getAmount () {
        return amount;
    };
    /**
     * Set the amount
     * @method getName
     * @param {Number} param
     */
    this.setAmount = function setAmount (param) {
        amount = param;
    };
}
