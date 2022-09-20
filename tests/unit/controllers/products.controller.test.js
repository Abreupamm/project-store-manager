const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../../../src/app');
const productsService = require('../../../src/services/productsService');
const productsMock = require('../../mocks/products.mock');

describe('Teste de products na camada Controller', () => {
  
  it('Verifica se retorta todos os produtos', async () => {
    const stub = sinon
      .stub(productsService, 'getAllProducts')
      .resolves({ type: null, message: productsMock.productsAll });
    const result = await chai.request(app).get('/products');
    chai.expect(result.body).to.be.deep.equal(productsMock.productsAll);
    chai.expect(result.status).to.be.deep.equal(200);
    stub.restore();
  });

  it('Verifica se retorna um produto ao buscar pelo ID', async () => {
      const stub = sinon
        .stub(productsService, 'getProductsById')
        .resolves({ type: null, message: productsMock.productById });
      const result = await chai.request(app).get('/products/2');
    chai.expect(result.body).to.be.deep.equal(productsMock.productById);
    chai.expect(result.status).to.be.equal(200);
    stub.restore();
  });

    it('Verifica se é possível cadastrar um produto', async () => {
      const stub = sinon
        .stub(productsService, 'newProduct')
        .resolves(10);
      const result = await chai.request(app).post('/products').send({ name: 'ProdutoX' });
      chai.expect(result.body).to.be.deep.equal(productsMock.productNew);
      chai.expect(result.status).to.be.equal(201);
      stub.restore();
    });
});