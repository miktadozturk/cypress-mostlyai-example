class MostlyAiPage {
    navigate() {
      cy.visit('/')
    }
  
    get getBookmarks() {
      return cy.get('li.oxy-mega-dropdown > a').should('be.visible')
    }

    get getBookmarksLength() {
      return cy.get('.oxy-mega-menu.main-menu > ul > li')
    }
  
    get getSearchInput() {
      return cy.get('div.oxy-header-right .oxy-header-search').should('be.visible')
    }

    get getTypeSearchInput() {
      return cy.get('input[type="search"]').should('be.visible')
    }
  
    getSearchResultsErrMessage(errMsgTxt) {
      return cy.get('.ct-div-block h1').eq(0).should('be.visible').contains(errMsgTxt)
    }

    getSearchResultsText(wrongWord) {
      return cy.get('.ct-div-block h1').eq(1).should('be.visible').contains(wrongWord)
    }

    get getCompanyFromBookmarks(){
      return cy.get('li.oxy-mega-dropdown > a')
    }
  
    get getContactLink() {
      return cy.get('a[href*="contact"]', {timeout:10000}).should('be.visible').first()
    }
  
    get getContactForm() {
      return cy.get('.ct-div-block.has-box-shadow').should('be.visible').click()
    }
  
    get getFirstNameInput() {
      return cy.get('[name="firstname"]').should('be.visible')
    }
  
    get getLastNameInput() {
      return cy.get('[name="lastname"]').should('be.visible')
    }
  
    get getEmailInput() {
      return cy.get('[name="email"]').should('be.visible')
    }
  
    get getMobilePhoneInput() {
      return cy.get('[name="mobilephone"]').should('be.visible')
    }
  
    get getCompanyInput() {
      return cy.get('[name="company"]').should('be.visible')
    }
  
    get getCountrySelect() {
      return cy.get('[name="country"]').should('be.visible')
    }
  
    get getHowDidYouHearAboutMostlyAiInput() {
      return cy.get('[name="how_did_you_hear_about_mostly_ai___free_text"]').should('be.visible')
    }
  
    get getShortMessageInput() {
      return cy.get('div.input textarea').should('be.visible')
    }
  
    get getLongMessageInput() {
      return cy.get('.input [type="checkbox"]').should('be.visible')
    }

    get acceptCookieBtn() {
      return cy.get('#CookieBoxSaveButton')
    }

    get getSendMessageBtn() {
      return cy.get('div.actions > input').should('be.visible')
    }
  }

  export default new MostlyAiPage();