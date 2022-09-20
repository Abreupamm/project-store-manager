const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const salesService = require('../../../src/services/salesService');
const salesMock = require('../../mocks/sales.mock');
const app = require('../../../src/app');

describe('Teste de vendas na camada Controller', () => {
  
  it('Verifica se retorna todas as vendas', async () => {
    const stub = sinon
      .stub(salesService, 'getSales')
      .resolves({ type: null, message: salesMock.salesAll });
    const result = await chai.request(app).get('/sales');
    chai.expect(result.body).to.be.deep.equal(salesMock.salesAll);
    chai.expect(result.status).to.be.deep.equal(200);
    stub.restore();
  });
});
