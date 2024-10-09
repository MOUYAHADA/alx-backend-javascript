interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workDirectorTasks: () => string;
}

interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  };
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  };
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  };
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  };
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  };
  workTeacherTasks(): string {
    return 'Getting to work';
  };
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'string') salary = Number(salary.replace('$', ''));
  if (salary >= 500) return new Director();
  else return new Teacher();
}

function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks()
  }
  else {
    return employee.workTeacherTasks();
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math" || todayClass === "History") {
    return `Teaching ${todayClass}`;
  }
}