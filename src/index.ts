
//delcaration with types 
let sales: number = 123_512;
let course: string = 'TypeScript';
let is_published: boolean = true;
let my_document: {name: string, level: number} = {name: 'jason', level: 55}
let my_array: number[] = []
let user: [number, string] = [1, "Jason"]

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
function doSomethhing(param: number): void {
    console.log(param);

    
}


render(my_document)