const sinon = require('sinon');
const { expect } = require('chai');

const productsModel = require('../../../src/models/productsModel');
const connection = require('../../../src/db/connection');
const productsMock = require('../../mocks/products.mock');

describe('Teste de products na camanda model', () => {

  it('Verifica se retorna todos os produtos', async () => {
    const stub = sinon.stub(connection, 'execute').resolves([productsMock.productsAll]);
    const result = await productsModel.selectProducts();
    expect(result).to.equal(productsMock.productsAll);
    stub.restore();
  });

  it("Verifica se retorna um produto", async () => {
   const stub =  sinon.stub(connection, "execute").resolves([productsMock.productById]);
    const result = await productsModel.selectProductsById(2);
    expect(result).to.equal(productsMock.productById);
    stub.restore();
  });

  it("Verifica se é possível cadastrar um produto", async () => {
    const stub = sinon.stub(connection, 'execute').resolves([{insertId: 4}]);
    const result = await productsModel.insertProducts('ProdutoX');
    expect(result).to.equal(4);
    stub.restore();
  });

});