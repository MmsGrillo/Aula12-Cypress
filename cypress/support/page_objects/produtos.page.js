class AddProduto {

    addBalboaPersistenceTee(tamanho, cor, qtd){
        cy.visit('product/balboa-persistence-tee')
        cy.get('.button-variable-item-'+tamanho).click()
        cy.get('.button-variable-item-'+cor).click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()
    }
    
    addGraysonCrewneckSweatshirt(tamanho, cor, qtd){
        cy.visit('product/grayson-crewneck-sweatshirt')
        cy.get('.button-variable-item-'+tamanho).click()
        cy.get('.button-variable-item-'+cor).click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()
    }

    addHollisterBackyardSweatshirt(tamanho, cor, qtd){
        cy.visit('product/Hollister-Backyard-Sweatshirt')
        cy.get('.button-variable-item-'+tamanho).click()
        cy.get('.button-variable-item-'+cor).click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()
    }

    addOsloTrekHoodie(tamanho, cor, qtd){
        cy.visit('product/Oslo-Trek-Hoodie')
        cy.get('.button-variable-item-'+tamanho).click()
        cy.get('.button-variable-item-'+cor).click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()
    }

}

export default new AddProduto()