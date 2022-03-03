class Profile
{

    

    login(value)
    {
        const Login=cy.get('#username')
        Login.type(value)
        return this
    }

    firstName(value)
    {
        const firstName=cy.get('#firstName')
        firstName.type(value)
        return this
    }
    lastName(value)
    {
        const lastName=cy.get('#lastName')
        lastName.type(value)
        return this
    }

    
    Gender(value)
    {
        const gender=cy.get('#gender')
        gender.clear()
        gender.type(value)
        return this
    }
    Age(value)
    {
        const age=cy.get('#age')
        age.clear()
        age.type(value)
        return this
    }
    Address(value)
    {
        const address=cy.get('#address')
        address.clear()
        address.type(value)
        return this
    }
    Phone(value)
    {
        const phone=cy.get('#phone')
        phone.clear()
        phone.type(value)
        return this
    }
    // Hobby(value)
    // {
    //     const hobby=cy.get('#hobby')
    //     hobby.select(value)
    //     return this
    // }

    
    currentPassword(value)
    {
        const currentpassword=cy.get('#currentPassword')
        currentpassword.type(value)
        return this
    }
    NewPassword(value)
    {
        const newPassword=cy.get('#newPassword')
        newPassword.type(value)
        return this
    }
    ConfirmPassword(value)
    {
        const confirmPassword=cy.get('#newPasswordConfirmation')
        confirmPassword.type(value)
        return this
    }
 

}
export default Profile