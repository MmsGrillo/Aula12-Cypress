/// <reference types="cypress" />
import AddProduto from "../support/page_objects/produtos.page"
import Checkout from "../support/page_objects/checkout.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        AddProduto.addBalboaPersistenceTee('XS', 'Gray', 1)
        AddProduto.addGraysonCrewneckSweatshirt('M', 'Orange', 1)
        AddProduto.addHollisterBackyardSweatshirt('XL', 'White', 1)
        AddProduto.addOsloTrekHoodie('M', 'Purple', 1)
       
       Checkout.finalizarCompra('Bicho', 'da Goiaba', 'EBAC', 'brasil', 'Av. Brasil', '222', 'São Paulo', 'São paulo', '01001001', '+5511987654321', 'aluno_ebac@teste.com') 
       //TODO 
    });


})
