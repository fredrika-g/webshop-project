import { fetchData } from '../utilities/httpClient.mjs';
import { ProductsModel, SingleProductModel } from '../models/ProductModels.mjs';

// assign image to product
const catToImg = {
  pyssel: 'christmashobby.jpg',
  bakning: 'christmasbaking.jpg',
  kläder: 'christmasclothing.jpg',
  dekoration: 'christmasdecor.jpg',
  belysning: 'christmaslights.jpg',
};

export const listProducts = async (req, res) => {
  try {
    const result = await fetchData('products');
    const products = [];

    // projecting data
    result.map((product) => {
      const img = product.categories.find((cat) => catToImg[cat.toLowerCase()]);

      const imgSrc = img ? catToImg[img] : null;

      products.push(
        new ProductsModel(
          product.id,
          product.title,
          product.price,
          product.categories,
          product.stock,
          imgSrc
        )
      );
    });

    res.status(200).json({ success: true, result: products });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
};

export const findProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await fetchData(`products/${id}`);

    const img = result.categories.find((cat) => catToImg[cat.toLowerCase()]);

    const imgSrc = img ? catToImg[img] : null;
    const product = new SingleProductModel(
      result.id,
      result.title,
      result.price,
      result.categories,
      result.stock,
      result.description,
      imgSrc
    );

    res.status(200).json({ success: true, result: product });
    return result;
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
};

// cart actions
export const getCart = async (req, res) => {
  try {
    const result = await fetchData(`cart`);

    res.status(200).json({ success: true, result });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
};

// runs when: 5000/cart/add/:id
export const addToCart = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await fetchData(`products/${productId}`);

    const result = await fetchData('cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    res.status(200).json({ success: true, result: product });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
};

// run when: /cart/confirm (placing order)
export const placeOrder = async (req, res) => {
  try {
    // get current cart
    const currentCart = await fetchData('cart');

    // grouping together products and adding property "quantity"
    // get quantity of each item in cart, increase if found, else set to 1
    const groupedProducts = currentCart.reduce((acc, product) => {
      if (acc[product.id]) {
        acc[product.id].quantity += 1;
      } else {
        acc[product.id] = { ...product, quantity: 1 };
      }
      return acc;
    }, {});

    // update products stock with set quantity

    for (const productId in groupedProducts) {
      const product = groupedProducts[productId];

      // removing all occurences of the product in the shopping cart
      for (let i = 0; i < product.quantity; i++) {
        await fetchData(`cart/${product.id}`, {
          method: 'DELETE',
        });
      }

      // making the adjustment in product stock after purchase is completed
      await updateProduct(product.id, product.quantity);
    }

    res.status(200).json({ success: true, message: 'Order placed' });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
};

export const deleteFromCart = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await fetchData(`cart/${id}`, { method: 'DELETE' });

    res.status(200).json({ success: true, result });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
};

// used locally
const updateProduct = async (id, quantity) => {
  try {
    // 1. get current product
    const currentProduct = await fetchData(`products/${id}`);
    // 2. update product stock
    const updatedProduct = {
      ...currentProduct,
      stock: currentProduct.stock - quantity,
    };

    const result = await fetchData(`products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
