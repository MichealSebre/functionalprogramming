describe("Test", function(){

   it("Sum of the numbers [2,6,8,9] are: " , function(){
       assert.equal([2,6,8,9].reduce(sum),25);
   });

    it("Multiplication of the numbers [2,6,2] are: " , function(){
        assert.equal([2,6,8,9].reduce(mul),24);
    });

    it("the reversed string MICHEAL is:", function() {
        assert.equal(reverseWord("MICHEAL"), "LAEHCIM");
    });

    it("Longest Word:", function() {
        assert.equal(longword(["This", "is", "JavaScript"], 4), "JavaScript");
    });
});