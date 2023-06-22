class Product {
  protected discount = 20;

  public getDiscount() {
    return this.discount;
  }
}

class InHouseProduct extends Product {
  public getDiscount() {
    return this.applyExtraDiscount(); // You can simply substitute the implementation of getDiscount with the correct function
  }
  public applyExtraDiscount() {
    return this.discount * 1.5;
  }
}

class ExternalProduct extends Product {} //external products are able to retain the initial implementation of getDiscount

const milk = new InHouseProduct();
const sugar = new ExternalProduct();

console.log(milk.getDiscount()); // 30
console.log(sugar.getDiscount()); // 20
