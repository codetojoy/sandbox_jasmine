
describe("MyUtils", function() {
  it("should be able to detect palindrome", function() {
    let s = "racecar";

    // test
    let result = isPalindrome(s);

    expect(result).toEqual(true);
  });

  it("should be able to detect non-palindrome", function() {
    let s = "pacecar";

    // test
    let result = isPalindrome(s);

    expect(result).toEqual(false);
  });

  it("should be able to spy on callback", function() {
    let i = 10;
    let callbackSpy = jasmine.createSpy('callback');

    // test
    ifEven(i, callbackSpy);

    expect(callbackSpy).toHaveBeenCalledWith(i);
  });

  it("should be able to spy on implicit function?", function() {
    let i = 9;
    let callbackSpy = jasmine.createSpy('oddCallback');
    oddCallback = callbackSpy;

    // test
    ifOdd(i);

    expect(callbackSpy).toHaveBeenCalledWith(i);
  });
});
