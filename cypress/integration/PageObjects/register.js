class Register
{
    registerbtn()
    {
        const registerbtn=cy.get('.btn-success-outline')
        registerbtn.click()
    }

    fillUserName(value)
    { 
        const userName=cy.get('#username')
        userName.clear()
        userName.type(value)
        return this
    }

    fillFirstName(value)
    { 
        const firstName=cy.get('#firstName')
        firstName.clear()
        firstName.type(value)
        return this
        
    }

    fillLastName(value)
    { 
        const LastName=cy.get('#lastName')
        LastName.clear()
        LastName.type(value)
        return this
    }
    fillPassword(value)
    { 
        const password=cy.get('#password')
        password.clear()
        password.type(value)
        return this
    }
    fillConfirmPassword(value)
    { 
        const confirmpassword=cy.get('#confirmPassword')
        confirmpassword.clear()
        confirmpassword.type(value)
        return this
    }

    submit()
    {
        const button=cy.get('[type="submit"]')
        button.click( {multiple:true})
    }
    cancel()
    {
        const cancelbutton=cy.get('[role="button"]')
        cancelbutton.click()
    }

    


}
export default Register