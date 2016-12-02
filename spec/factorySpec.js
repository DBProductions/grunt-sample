describe('Factory', function () {

    var factory = new Factory();

    it('Factory has the right type', function () {
        expect(typeof Factory).toBe('function');
    });

    it('Factory object has the right type', function () {
        expect(typeof factory).toBe('object');
    });

    var user1 = factory.create(User, {name: 'User', surname: 'Test'});

    it('user object has the right type', function () {
        expect(typeof user1).toBe('object');
    });

    it('user object gives accepted name back', function () {
        expect(user1.getName()).toBe('User');
    });

    it('user object gives accepted fullname back', function () {
        expect(user1.getFullName()).toBe('User Test');
    });

    it('current user is not adult', function () {
        expect(user1.isAdult()).toBe(false);
    });

    var user2 = factory.create(User, {name: 'User', surname: 'Test'}, [Payment]);

    it('user object has the right type', function () {
        expect(typeof user2).toBe('object');
    });

    it('user object gives accepted name back', function () {
        expect(user2.getName()).toBe('User');
    });

    it('user object gives accepted fullname back', function () {
        expect(user2.getFullName()).toBe('User Test');
    });

    it('current user is not adult', function () {
        expect(user2.isAdult()).toBe(false);
    });

    it('get right amount', function () {
        expect(user2.getAmount()).toBe(0);
    });

    it('set new amount', function () {
        user2.setAmount(199);
        expect(user2.getAmount()).toBe(199);
    });

});
