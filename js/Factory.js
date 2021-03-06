/**
 * @module Factory
 */
'use strict';
/**
 * Factory
 *
 * @class Factory
 * @constructor
 */
function Factory () {
    /**
     * Create an object
     * @method create
     * @param {Object} Cls
     * @param {Object} params
     * @param {Array} clsList
     * @return {Element} element
     */
    this.create = function create (Cls, params, clsList) {
        var element = new Cls(params);
        if (clsList && clsList.length) {
            for (var i = 0; i < clsList.length; i += 1) {
                var obj = new clsList[i](params);
                for (var j in obj) {
                    element[obj[j].name] = obj[j];
                }
            }
        }
        return element;
    };
}
