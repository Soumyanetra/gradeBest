class Tests{
    constructor(){
        this.currentTest = {
            name: '',
            subject:'',
            testDetails: '',
            total:''
        }
    }
    setTest(tesName, test,subject,exam) {
        this.currentTest.name = tesName;
        this.currentTest.subject = subject;
        this.currentTest.testDetails = test;
        this.currentTest.total = exam;
    }
    getTest(){
        return this.currentTest;
    }

}
export default new Tests()