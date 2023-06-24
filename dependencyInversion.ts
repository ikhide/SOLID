class SqlProductRepository2 {
  getAllProductNames(): Array<string> {
    return ["soap", "shoe"];
  }
}

class ProductCatalog2 {
  listAllProducts(): void {
    const sqlProductRepository = new SqlProductRepository();
    sqlProductRepository.getAllProductNames();
  }
}
// The above is a violation because the high level ProductCatalog depends on the low level SqlProductRepository

interface ProductRepository {
  getAllProductNames(): Array<string>;
}

class SqlProductRepository implements ProductRepository {
  getAllProductNames(): Array<string> {
    return ["soap", "shoe"];
  }
}

class ProductFactory {
  static create() {
    return new SqlProductRepository();
  }
}

class ProductCatalog {
  listAllProducts(): Array<string> {
    const productFactory: ProductRepository = ProductFactory.create();
    return productFactory.getAllProductNames();
  }
}
