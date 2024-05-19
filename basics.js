// https://www.youtube.com/watch?v=30LWjhZzg50
// startNext = (2:39:08) 
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var users = [];
var user = {
    name: "John",
    age: 30,
    email: "john@example.com",
    isLoggedIn: false
};
users.push(user);
var greetings = "Hello Hamza";
var userID = 334455.3;
var aVarToRecvType; //:string ;
function aFunctionThatReturnAType() {
    return -1;
}
aVarToRecvType = aFunctionThatReturnAType();
function addTwo(num) {
    return num + 2;
}
addTwo(2);
function signUp(name, email, age, isLoggedIn) {
    if (isLoggedIn === void 0) { isLoggedIn = true; }
    return {
        name: name,
        email: email,
        age: age,
        isLoggedIn: isLoggedIn
    };
}
function logOutUser(user) {
    if (user === undefined) {
        return handleError("User not found");
    }
    return __assign(__assign({}, user), { isLoggedIn: false });
}
var newUserIndex = users.push(signUp("Hamza", "hamza@example.com", 22)) - 1;
// console.log(users[newUserIndex]);
// console.log(logOutUser(users[newUserIndex]));
users[newUserIndex] = logOutUser(users[newUserIndex]);
console.log("Printing users");
var consoleError = function (error) { return console.log("Error: ", error); };
var handleError = function (error) { throw new Error(error); };
var anotherUserIndex = users.push(signUp("Hyam", "hyam@example.com", 25)) - 1;
try {
    users[anotherUserIndex] = logOutUser(users[anotherUserIndex]);
}
catch (error) {
    consoleError(error);
}
users.forEach(function (u) { return console.log(u); });
var myCard = {
    cardNumber: "1234567890",
    cardType: "Visa",
    expiryMonth: 12,
    expiryYear: 2022,
    cvv: 123,
    bankName: "Bank of America",
    bankBranch: "Downtown",
    branchAddress: "1234 Main St, Anytown",
    bankAccountNumber: "1234567890",
    bankAccountName: "John Doe"
};
var userWithCard = __assign(__assign({}, users[anotherUserIndex]), myCard);
var newUser = {
    role: "Employee",
    employeeId: 1234567890
};
// console.log(newUser);
newUser = {
    role: "Admin",
    adminLevel: 1
};
console.log(newUser);
function getDBID(id) {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    return id;
}
// console.log(`${getDBID("a1234567890")} typeof ${typeof getDBID("a1234567890")}`);
// console.log(`${getDBID(1234567890)} typeof ${typeof getDBID(1234567890)}`);
var arr1 = ["a", "b", "c"];
var arr2 = [1, 2, 3];
var arr4 = [1, 2, 3];
var arr3 = ["a", "b", "c", 1, 2, 3];
var arr5 = ["a", "b", "c", 1, 2, 3, true];
// literal assignment of variables
var pi = 3.14;
var e = 2.71;
var phi = 1.618;
// pi = 3.142;  // would not allow 
var seatAllocation = "middle";
seatAllocation = "aisle";
// seatAllocation = "fourth"; // would not allow 
// tuples - precise order
var tuple1 = ["a", 1, true];
var tuple2 = ["a", 1, true];
console.log(tuple1 === tuple2);
/*
    The comparison tuple1 === tuple2 returns false
    because tuple1 and tuple2 are objects,
    and the === operator compares object references,
    not their contents.

    In JavaScript,
    arrays and objects are compared by their references.
    This means that two different arrays or objects are considered equal
    only if they reference the exact same instance in memory.
    
    The === operator checks for strict equality,
    which for objects (including arrays) means checking
    if they reference the same instance.

    Each let statement allocates a new array in memory.
    As a result, tuple1 and tuple2 point to different memory locations.
    Therefore, tuple1 === tuple2 returns false.

    // function to compare each corresponding element of the tuples
    function compareTuples(tuple1: [string, number, boolean], tuple2: [string, number, boolean]): boolean {
        return tuple1[0] === tuple2[0] && tuple1[1] === tuple2[1] && tuple1[2] === tuple2[2];
    }
*/
var apiResponse = [200, "OK"];
var apiResponse2 = [404, "Not Found"];
var student = ["Hamza", 22, "Software Engineering"];
var student2 = ["Hyam", 25, "Computer Engineering"];
student2[2] = "Computer System Engineering";
// console.log(student); console.log(student2);
var rgb = [255, 0, 0];
var mySeat = 0 /* SeatChoice.NoSeat */;
var firstWebUser = {
    dbID: 1,
    email: 'firstUser@website',
    userName: '@firstUser',
    startTrial: function () { return "trial started on ".concat(new Date().toLocaleDateString('ur')); },
    //getCoupon: (name:'hyam10') => `${10} via coupon code: '${name}'`
    getCoupon: function (name) { return 10; },
    /* extended later */
    githubToken: 'someToken'
};
firstWebUser.email = 'firstUser@website.com';
firstWebUser.googleID = 'firstUser@gmail.com';
console.log(firstWebUser);
// explore documentation for further info on interface vs type
