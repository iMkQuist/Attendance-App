interface Student {
    id: string;
    name: string;
}

interface CoursesData {
    [courseName: string]: Student[];
}

const coursesData: CoursesData = {
    "Course 1": [
        { id: "STD001", name: "Student A" },
        { id: "STD002", name: "Student B" },
        { id: "STD003", name: "Student C" },
    ],
    "Course 2": [
        { id: "STD004", name: "Student D" },
        { id: "STD005", name: "Student E" },
        { id: "STD006", name: "Student F" },
    ],
    "Course 3": [
        { id: "STD007", name: "Student G" },
        { id: "STD008", name: "Student H" },
        { id: "STD009", name: "Student I" },
    ],
    "Course 4": [
        { id: "STD010", name: "Student J" },
        { id: "STD011", name: "Student K" },
        { id: "STD012", name: "Student L" },
    ],
    "Course 5": [
        { id: "STD013", name: "Student M" },
        { id: "STD014", name: "Student N" },
        { id: "STD015", name: "Student O" },
    ],
    "Course 6": [
        { id: "STD016", name: "Student P" },
        { id: "STD017", name: "Student Q" },
        { id: "STD018", name: "Student R" },
    ],
    "Course 7": [
        { id: "STD019", name: "Student S" },
        { id: "STD020", name: "Student T" },
        { id: "STD021", name: "Student U" },
    ],
    "Course 8": [
        { id: "STD022", name: "Student V" },
        { id: "STD023", name: "Student W" },
        { id: "STD024", name: "Student X" },
    ],
    "Course 9": [
        { id: "STD025", name: "Student Y" },
        { id: "STD026", name: "Student Z" },
        { id: "STD027", name: "Student AA" },
    ],
};

export default coursesData;
