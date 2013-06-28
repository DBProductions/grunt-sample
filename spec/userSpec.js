describe("User", function() {
    
    var user = new User({name:'Peter', surname:'Test', age: 0});
    
    it("user object has the right type", function() {
        expect(typeof user).toBe('object'); 
    });

    it("user object gives accepted name back", function() {
        expect(user.getName()).toBe('Peter');
    });

    it("user object gives accepted fullname back", function() {
        expect(user.getFullName()).toBe('Peter Test');
    });

    it("current user is not adult", function() {
        expect(user.isAdult()).toBe(false);
    });
});