describe('Login Test Cases',function()
{

beforeEach(function(){
  cy.visit('/');
})

it('should verify login button',function(){
//cy.visit('/');
cy.get('div > input').click();

cy.get(':nth-child(4) > td > input')
  .should('have.value', 'Login')

})


it('Should have username and password textboxes',function(){

})

it('Should NOT have register option',function(){

})
})