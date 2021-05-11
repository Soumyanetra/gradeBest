class Students{
    constructor(){
        this.currentUser=[]
    }
    setStudents(students) {
        this.currentUser=Object.keys(students).map(student => (
            student
        ))
    }
    getStudents(){
        return this.currentUser;
    }

}
export default new Students()