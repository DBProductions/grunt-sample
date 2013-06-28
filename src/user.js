/**
 * user object
 */
function User(params) {
    if (!params) { params = {}; }
    var name = params.name || '';
    var surname = params.surname || '';
    var age = params.age || 0;
    /**
     * get name of the user
     */
    this.getName = function getName() {
        return name;
    };
    /**
     * get full name of the user
     */
    this.getFullName = function getFullName() {
        return name + ' ' + surname;
    };
    /**
     * get boolean if user is adult
     */
    this.isAdult = function isAdult() {
        return age >= 18;
    };
}