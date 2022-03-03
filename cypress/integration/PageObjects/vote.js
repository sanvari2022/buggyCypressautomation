class vote
{

votebutton()
{
    const votebtn= cy.contains(('a', 'View more'))
    votebtn.click()
}

  votetext(value)
  {
      const vote=cy.get('#comment')
      vote.type(value)
      return this
  }

}

export default vote