describe("User", function() {

    var user1 = new User({name:'Peter', surname:'Test', age: 0});
    
    it("user object has the right type", function() {
        expect(typeof user1).toBe('object'); 
    });

    it("user object gives accepted name back", function() {
        expect(user1.getName()).toBe('Peter');
    });

    it("user object gives accepted fullname back", function() {
        expect(user1.getFullName()).toBe('Peter Test');
    });

    it("current user is not adult", function() {
        expect(user1.isAdult()).toBe(false);
    });

    var user2 = new User();

    it("user object gives accepted name back", function() {
        expect(user2.getName()).toBe('');
    });

    it("user object gives accepted fullname back", function() {
        expect(user2.getFullName()).toBe(' ');
    });

    it("current user is not adult", function() {
        expect(user2.isAdult()).toBe(false);
    });

});