const request = require('supertest')
const { expect } = require("chai")
require('dotenv').config()
const { getToken } = require('../helpers/autenticacao.js')
const postTransferencias = require('../fixtures/postTransferencias.json')

describe('Transfêrencias', () => {
    let token

    beforeEach( async () => {
        token = await getToken('julio.lima', '123456')
    })

    describe('POST/transferencias', () => {
        it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$10,00', async () => {
            const bodyTransferencias = { ...postTransferencias }

            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)
            expect(response.status).to.equal(201)
        })

        it('Deve retornar falha com 422 quando o valor da transferência for abaixo de R$10,00', async () => {
            const bodyTransferencias = { ...postTransferencias }
            bodyTransferencias.valor = 7

            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)
            expect(response.status).to.equal(422)
            })
    })

    describe('GET/transferencias/{id}', () => {
        it('Deve retornar sucesso com 200 e dados iguais ao registro de transferência contido no banco de dados quando o ID for válido', async () => {
            const response = await request(process.env.BASE_URL)
                .get('/transferencias/23')
                .set('Authorization', `Bearer ${token}`)

            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(23)
            expect(response.body.id).to.be.a('number')
            expect(response.body.conta_origem_id).to.equal(1)
            expect(response.body.conta_destino_id).to.equal(2)
            expect(response.body.valor).to.equal(11.00)
        })
    })

    describe('GET /transferencias', () => {
        it('Deve retornar 10 elementos na paginação quando informar limite de 10 registros', async () => {
            const response = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limit=10')
                .set('Authorization', `Bearer ${token}`)

            expect(response.status).to.equal(200)
            expect(response.body.limit).to.equal(10)
            expect(response.body.transferencias).to.have.lengthOf(10)
        })
    })
})