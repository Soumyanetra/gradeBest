class Auth{
    constructor(){
        this.currentUser={
            id:'',
            type:''
        }
    }
    login(cb,id, type){
        const pr=this.currentUser;
        pr.id=id;
        pr.type=type;
        cb();
    }
    logout(){
        const pr=this.currentUser;
        pr.id='';
        pr.type='';
    }
    isAuthenticated(){
        return this.currentUser;
    }

}
export default new Auth()