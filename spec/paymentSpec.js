describe("Payment", function() {
    
    var payment1 = new Payment({amount: 100});
    
    it("payment object has the right type", function() {
        expect(typeof payment1).toBe('object'); 
    });

    it("get right amount", function() {
        expect(payment1.getAmount()).toBe(100);  
    });
    
    it("set new amount", function() {
        payment1.setAmount(199);
        expect(payment1.getAmount()).toBe(199);  
    });

    var payment2 = new Payment();

    it("get right amount", function() {
        expect(payment2.getAmount()).toBe(0);  
    });
    
    it("set new amount", function() {
        payment2.setAmount(300);
        expect(payment2.getAmount()).toBe(300);  
    });
    
});