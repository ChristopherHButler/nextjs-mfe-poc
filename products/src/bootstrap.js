import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Context #1 - Running in development
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  // we are assuming our container app does NOT have an html element called 'dev-products'.
  // we are probably running in isolation
  if (el) mount(el);
}

// Context #2 - Running from Container
export { mount };
