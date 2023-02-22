class SignupModel {
    public name: String;
    public password: String;
    public email: String;
    public cpf: String;

    constructor(name: String, password: String, email: String, cpf: String) {
        this.name = name
        this.email = email
        this.password = password
        this.cpf = cpf
    }
}

export default SignupModel