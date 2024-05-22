const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val:Type): Type {
    return val;
}

function identityFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string,
    type: number,
}

identityFour<Bottle>({brand:"nestle",type:4})

/* arrays & arrow func */

function getProducts<T>(products: T[]): T {
    // after operations
    const index = 5;
    return products[index];
}

// <T,> means to distinguish from html in jsx to mark generics tag
const getMoreProducts = <T,>(products: T[]): T => { 
    // after operations
    const index = 21;
    return products[index];
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, {connection:"ok",username:"sa",password:"test@123"});

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}



class Sellable<T>{

    public cart: T[] = [];

    addToCard(product: T) {
        this.cart.push(product);
    } 
}

