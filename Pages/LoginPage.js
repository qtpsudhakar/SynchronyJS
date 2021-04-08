
class LoginPage{

    #username ="id"
    #password ="id"
    #loginbutton ="id"

    enterUserName(txt){
        this.#username.entertext(txt);
    }

    clickOnLogin(){
        this.#loginbutton.click();
    }
}