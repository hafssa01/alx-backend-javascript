interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

const teacher: Teacher = {
    firstName: 'Zineb',
    fullTimeEmployee: false,
    lastName: 'Rafah',
    location: 'GAZA',
    contract: false,

};
console.log(teacher);