const sinon = require('sinon');
const chai = require('chai');

const salesModel = require('../../../src/models/salesModel');
const salesService = require('../../../src/services/salesService');
const salesMock = require('../../mocks/sales.mock');

describe('Teste de vendas na camanda service', () => {
  it('Verifica se retorna todas as vendas', async () => {
    const stub = sinon
      .stub(salesModel, 'getAllSales')
      .resolves(salesMock.salesAll);
    const result = await salesService.getSales(null);
    chai.expect(result.message).to.equal(salesMock.salesAll);
    stub.restore();
  });
});