interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework: () => string;
  displayName: () => string
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

const printTeacher: printTeacherFunction = function (firstName, lastName) {
  return `${firstName[0].toUpperCase()}. ${lastName}`;
};

class StudentClass implements StudentInterface {
  constructor(
    public firstName: string, public lastName: string
  ) { }
  
  workOnHomework(): string {
    return "Currently working"
  };
  
  displayName(): string {
    return this.firstName;
  }
}

const createSudent: StudentConstructor = StudentClass;


