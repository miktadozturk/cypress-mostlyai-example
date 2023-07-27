// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import mostlyAiPage from "../pageObject/mostlyAiPage"

const testData = require('../fixtures/testData.json')

const { faker } = require('@faker-js/faker')
let firstName = faker.person.firstName()
let lastName = faker.person.lastName()
let email = faker.internet.email()
let mobilePhone = faker.phone.number()
let company = faker.company.name()
let longMessage = faker.lorem.sentences()
let shortMessage = faker.lorem.sentence()

Cypress.Commands.add("logBookmark", (index, text) => { 
    cy.log(`Bookmark ${index}: ${text}`) 
})

Cypress.Commands.add("selectBookmark", (text) => { 
    mostlyAiPage.getCompanyFromBookmarks.each(($el) => {
        if ($el.text().includes(text)) {
            cy.get($el)
            .trigger('mouseover')                                    
            mostlyAiPage.getContactLink.click()
        }  
    })
})

Cypress.Commands.add('acceptCookie', () => {
    mostlyAiPage.acceptCookieBtn.then(($el) => { 
        if ($el.is('visible')) {
            cy.log('For cookies')
        } else { 
            cy.get($el).click({force:true}) 
        }
    })
})

Cypress.Commands.add("fillTheContactFormWithJson", () => {
    mostlyAiPage.getFirstNameInput.type(testData.firstName, {delay: 0})
    mostlyAiPage.getLastNameInput.type(testData.lastName, {delay: 0})
    mostlyAiPage.getEmailInput.type(testData.email, {delay: 0})
    mostlyAiPage.getMobilePhoneInput.type(testData.mobilePhone, {delay: 0})
    mostlyAiPage.getCompanyInput.type(testData.company, {delay: 0})
    mostlyAiPage.getCountrySelect.select('Germany')
    mostlyAiPage.getHowDidYouHearAboutMostlyAiInput.type(testData.shortMessage, {delay: 0})
    mostlyAiPage.getShortMessageInput.type(testData.longMessage, {delay: 0})
    mostlyAiPage.getLongMessageInput.check().should('be.checked')
    mostlyAiPage.getSendMessageBtn.realHover().should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
})

Cypress.Commands.add("fillTheContactFormWithFakerJs", () => {
    mostlyAiPage.getFirstNameInput.type(firstName, {delay: 0})
    mostlyAiPage.getLastNameInput.type(lastName, {delay: 0})
    mostlyAiPage.getEmailInput.type(email, {delay: 0})
    mostlyAiPage.getMobilePhoneInput.type(mobilePhone, {delay: 0})
    mostlyAiPage.getCompanyInput.type(company, {delay: 0})
    mostlyAiPage.getCountrySelect.select('Germany')
    mostlyAiPage.getHowDidYouHearAboutMostlyAiInput.type(shortMessage, {delay: 0})
    mostlyAiPage.getShortMessageInput.type(longMessage, {delay: 0})
    mostlyAiPage.getLongMessageInput.check().should('be.checked')
    mostlyAiPage.getSendMessageBtn.realHover().should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
})