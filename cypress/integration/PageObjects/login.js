class login {

    visit() {
        cy.visit("https://buggy.justtestit.org/")

    }

    fillLogin(value) {
        const login = cy.get('[name="login"]')
        login.type(value)
        return this
    }

    fillPassword(value) {
        const password = cy.get('[name="password"]')
        password.type(value)
        return this
    }

    submit() {
        const button = cy.get('[type="submit"]')
        button.click()
    }
}
export default login

