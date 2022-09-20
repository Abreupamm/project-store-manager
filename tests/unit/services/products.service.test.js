const sinon = require('sinon');
const chai = require('chai');

const productService = require('../../../src/services/productsService');
const productModel = require('../../../src/models/productsModel');
const productsMock = require('../../mocks/products.mock');

describe('Teste de products na camanda service', () => { 
  it('Verifica se retorna todos os produtos', async () => {
    const stub = sinon
      .stub(productModel, 'selectProducts')
      .resolves(productsMock.productsAll);
    const result = await productService.getAllProducts();
    chai.expect(result.message).to.equal(productsMock.productsAll);
    stub.restore();
  });

  it('Verifica se retorna um produto ao buscar pelo ID', async () => {
    const stub = sinon
      .stub(productModel, "selectProductsById")
      .resolves([productsMock.productById]);
    const result = await productService.getProductsById(2);
    chai.expect(result.message).to.equal(productsMock.productById);
    stub.restore();
  });

  it('Verifica se retorna um erro ao buscar o produto pelo ID inválido', async () => {
    const stub = sinon
      .stub(productModel, 'selectProductsById')
      .resolves([]);
    const resultError = await productService.getProductsById(99);
    chai.expect(resultError.message).to.equal("Product not found");
    stub.restore();
  });

  it('Verifica se é possível cadastrar um produto', async () => {
    const stub = sinon.stub(productModel, 'insertProducts').resolves(4);
    const result = await productService.newProduct('ProdutoX');
    chai.expect(result).to.equal(4);
    stub.restore();
  });
});
