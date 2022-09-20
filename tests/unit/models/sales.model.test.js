const sinon = require('sinon');
const chai = require('chai');

const salesModel = require('../../../src/models/salesModel');
const connection = require('../../../src/db/connection');
const salesMock = require('../../mocks/sales.mock');

describe('Teste de vendas na camanda model', () => {

  it('Verifica se retorna todas as vendas', async () => {
    const stub = sinon.stub(connection, 'execute').resolves([salesMock.salesAll]);
    const result = await salesModel.getAllSales();
    chai.expect(result).to.equal(salesMock.salesAll);
    stub.restore();
  });

});
