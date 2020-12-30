"use strict";
function aaa() {
    //     const person : {
    //     name : string,
    //     age: number,
    //     hobbies: any[],
    //     role:'READ ONLY USER'
    // } 
    var Role;
    (function (Role) {
        Role[Role["ADMIN"] = 0] = "ADMIN";
        Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
        Role[Role["AUTHOR"] = 2] = "AUTHOR";
    })(Role || (Role = {}));
    var person = {
        name: 'asdasd',
        age: 23,
        hobbies: ['Sports', 'Swimming'],
        role: Role.AUTHOR
    };
    // person.role.push('admin');
    // person.role[1] = 10;
    // person.role = [0, 'admin']
    var favoriteActivities;
    favoriteActivities = ['Sports'];
    console.log(person.name);
    for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
        var hobby = _a[_i];
        console.log(hobby);
    }
    if (person.role === Role.AUTHOR) {
        console.log('Is Author');
    }
}
aaa();
