
function aaa():void {
//     const person : {
//     name : string,
//     age: number,
//     hobbies: any[],
//     role:'READ ONLY USER'
// } 
enum Role { ADMIN, READ_ONLY, AUTHOR }
const person= {
        name : 'asdasd',
        age : 23,
        hobbies : ['Sports', 'Swimming'],
        role: Role.AUTHOR
    }

    // person.role.push('admin');
    // person.role[1] = 10;

    // person.role = [0, 'admin']

    let favoriteActivities: string[];
    favoriteActivities = ['Sports'];

    console.log(person.name);

    for (const hobby of person.hobbies) {
        console.log(hobby);
    }

    if (person.role === Role.AUTHOR) {
        console.log('Is Author');
    }
}

aaa();
