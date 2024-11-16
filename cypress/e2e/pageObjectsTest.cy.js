///<reference types="cypress"/>

const { homePage } = require("../support/pages/home.page");
const LoginPage = require("../support/pages/login.page");
const { email, senha } = require('../fixtures/data.json');
const {profilePage } = require("../support/pages/profile.page")

describe('teste de autenticação', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
    cy.visit('/');
  });

  it('fazer login com sucesso', () => {
    homePage.openMenu('Account');
    LoginPage.login(email, senha);
    homePage.openMenu('Account')
    profilePage.customerName().should('contain','Cliente EBAC')
  });
});
//cy.get('[href="/Tab/Account"] > .r-g6644c')