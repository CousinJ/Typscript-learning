
//delcaration with types 
let sales: number = 123_512;
let course: string = 'TypeScript';
let is_published: boolean = true;
let my_document: {name: string, level: number} = {name: 'jason', level: 55}
let my_array: number[] = []
let user: [number, string] = [1, "Jason"]
//special types
let variable1: unknown = undefined;
let variable2: any = undefined;
let variable3: never;
let variable4: null = null;
let variable5: undefined = undefined;
//enum practice
enum Size { SMALL = 's', MEDIUM = 'm', LARGE = 'l' }

let mySize = Size.MEDIUM;

console.log(mySize)

//note the methods you can use on data types.
my_array.forEach( n => n.toString)

function render(doc: object) {
    console.log(doc);
}


//parameter types and return types 
function doSomething(param: number): void {
    console.log(param);

    
}


render(my_document)


//type aliases
type startingClass = string;
type startingLevel = number;
//using a type alias with type alias
type startingCharacter = {
    class: startingClass,
    level: startingLevel
}

const my_character: startingCharacter = {
    class: 'Mage',
    level: 1
}

//interfaces  (only apply to objects)

interface triangle {
    sideALength: number,
    sideBLength: number,
    sideCLength: number
}

const my_triangle: triangle = {

    sideALength: 3,
    sideBLength: 3,
    sideCLength: 3
    
}

//extending interfaces

interface sqaure extends triangle {
    sideDLength: number

}

const my_square: sqaure = {
    sideALength: 3,
    sideBLength: 3,
    sideCLength: 3,
    sideDLength: 3,
}