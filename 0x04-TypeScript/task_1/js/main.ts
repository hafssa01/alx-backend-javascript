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

interface Directories extends Teacher {
    numberOfReports:number;
}

const director1: Directories = {
    firstName: 'Zineb',
    lastName: 'saber',
    location: 'Egypt',
    fullTimeEmployee: true,
    numberOfReports: 17

};
console.log(teacher);
console.log(director1);