import mostlyAiPage from '../pageObject/mostlyAiPage'
const testData = require('../fixtures/testData.json')

describe('Mostly.ai Cypress test', {testIsolation:false}, () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        mostlyAiPage.navigate()
        cy.acceptCookie()
    })
    it('Verify if following bookmarks are being visible', () => {
        //-- Bookmarks and length verified --
        mostlyAiPage.getBookmarks
        .each(($el, index) => {
            cy.logBookmark(index, $el.text())
            cy.get($el).should('be.visible').contains($el.text())
        })
        .then(($value) => {
            length = $value.length
            mostlyAiPage.getBookmarksLength.its('length').should('eq', length)
        })
    });
    it('Search sythetic then get error message', () => {
        //-- Click on the Search icon and write "sythetic" --
        mostlyAiPage.getSearchInput.click()
        mostlyAiPage.getTypeSearchInput.type(testData.searchText + '{enter}', {delay: 0})   

        //-- Error message is displayed and verified --        
        mostlyAiPage.getSearchResultsErrMessage('Sorry, no results for:')
        mostlyAiPage.getSearchResultsText(testData.searchText)
    });
    it('Send message from Contact with Json file', () => {
        //-- Mouseover for Company from the bookmarks and click Contact --
        //-- Used custom commands --
        cy.selectBookmark("Company")

        //-- The form is filled and validated --
        //-- Used page object, testData.json, faker.js and custom commands --
        mostlyAiPage.getContactForm
        cy.fillTheContactFormWithJson()

        //-- Additional, If you want to work with fakerjs, you can use this command.
        // cy.fillTheContactFormWithFakerJs()
    })
});