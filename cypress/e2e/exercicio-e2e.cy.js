/// <reference types="cypress" />
import AddProduto from "../support/page_objects/produtos.page"
import Checkout from "../support/page_objects/checkout.page";
import { fakerPT_BR } from "@faker-js/faker";

const nome = fakerPT_BR.person.firstName()
const sobrenome = fakerPT_BR.person.lastName()
const empresa = fakerPT_BR.company.name()
const rua = fakerPT_BR.location.street()
const numeroRua = fakerPT_BR.number.int({ min: 1, max: 9999 })
const cidade = fakerPT_BR.location.city()
const estado = fakerPT_BR.location.state()
const cep = fakerPT_BR.location.zipCode()
const celular = fakerPT_BR.phone.number('+55 11 ##### ####')
const email = fakerPT_BR.internet.email({ firstName: nome})




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
       
       Checkout.finalizarCompra(nome, sobrenome, empresa, 'brasil', rua, numeroRua, cidade, estado, cep, celular, email) 
       //TODO 
    });


})
