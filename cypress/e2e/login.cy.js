describe('Тестирование форма логина', function () {
    it('проверка на позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.wait(1000);
         cy.contains('Авторизация прошла успешно').should('be.visible');
     })
     it('проверка на позитивный кейс восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.wait(1000);
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
    })
     it('проверка на негативный кейс авторизации: Ввести НЕ правильный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); //кнопка входа не активна
        cy.get('#mail').type('geraman@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); //кнопка входа не активна
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled'); //кнопка входа активна
        cy.get('#loginButton').click();
        cy.wait(4000);
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
     it('проверка на негативный кейс авторизации: Ввести НЕ правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); //кнопка входа не активна
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); //кнопка входа не активна
        cy.get('#pass').type('iLovыeqastudio1');
        cy.get('#loginButton').should('be.enabled'); //кнопка входа активна
        cy.get('#loginButton').click();
        cy.wait(4000);
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('проверка на негативный кейс восстановления пароля, указать почту без @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('germandolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.wait(1000);
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
    })
    it('проверка на позитивный кейс авторизации, приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.wait(1000);
        cy.contains('Авторизация прошла успешно').should('be.visible');
    })
    
 })
 

 