describe('Тестирование huntingpony', function () {
    it('Оформление заказа', function () {
         cy.visit('https://huntingpony.com/');
         cy.get('#splide02-slide01 > .product-preview > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
         cy.wait(2000);
         cy.get('.add-cart-counter__btn').click();
         cy.wait(2000);
         cy.get('[data-add-cart-counter-plus=""]').click();
         cy.get('.header__cart > .icon').click();
         cy.get('.cart-controls > .button').click();
         cy.wait(4000);
        cy.contains('Оформление заказа').should('be.visible');
         
    })
    
 })