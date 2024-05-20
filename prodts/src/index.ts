// console.log("Typescript is still here");
// console.log("ain't it amazing");

// class User {
//     public email : string
//     private name : string
//     readonly city : string = "Isl"
//     constructor(email : string, name : string) {
//         this.email  = email;
//         this.name = name;
//     }
// }

class User {
    
    // private _courseCount = 1;
    protected _courseCount = 1;
    
    readonly city: string = "Isl";
    
    constructor(
        public email: string,
        public name: string,
        private dbID: number
    ) { 
        // haha :D
    }
    
    private deleteToken() {
        console.log(`token deleted`);
    }
    
    get getAppleEmail(): string {
        return `${this.name}@apple.co`;
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) throw new Error("Course count should be greater than 1.");
        this._courseCount = courseNum;
    }
    
}

const hamza = new User("hamza@hxmz.com","hamza",1);
// hamza.city = 'khi'; // 2 - won't allow

class SubUser extends User {
    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 4
    }
}

const hyam = new SubUser("hyam@hzrp.net","hyam",2);
console.log(hyam.courseCount);
hyam.changeCourseCount();
console.log(hyam.courseCount);
