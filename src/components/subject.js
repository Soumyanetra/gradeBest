class Subjects{
    constructor(){
        this.currentUser={
            "Biology_X": 0,
            "Chemistry_X": 1,
            "Computer_X": 2,
            "Mathematics_X": 3,
            "Physics_X": 4,
        }
    }
    getSubjects(){
        return this.currentUser;
    }

}
export default new Subjects()