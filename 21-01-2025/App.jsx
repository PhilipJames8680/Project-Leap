import { useState } from 'react';
import Product from './Product';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Groceries', inStock: true },
    { id: 2, name: 'Veggies', inStock: true },
    { id: 3, name: 'Fruits', inStock: false },
  ]);

  const [backgroundColor, setBackgroundColor] = useState('#f5f5f5');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [address, setAddress] = useState('');
  const [savedCustomer, setSavedCustomer] = useState(null);

  const toggleStatus = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, inStock: !product.inStock }
          : product
      )
    );
  };

  const changeBackground = () => {
    const colors = ['#f5f5f5', '#ffe4e1', '#d4edda'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  const saveCustomerDetails = () => {
    const customerData = {
      name: customerName,
      email: customerEmail,
      address,
    };
    setSavedCustomer(customerData);
    setCustomerName('');
    setCustomerEmail('');
    setAddress('');
  };

  return (
    <div
      className="bgchange"
      style={{
        backgroundColor: backgroundColor,
        transition: 'background-color 0.8s ease',
        padding: '20px',
      }}
    >
      <h1>Departmental Store Provision System</h1>
      <button onClick={changeBackground} style={{ marginBottom: '20px' }}>
        Change Color
      </button>

      <Product products={products} onToggle={toggleStatus} />

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <h2>Customer Detail</h2>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Enter Your Name"
          style={{
            padding: '10px',
            fontSize: '18px',
            width: '60%',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <br />
        <input
          type="email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
          placeholder="Enter Your Email"
          style={{
            padding: '10px',
            fontSize: '18px',
            width: '60%',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <br />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Your Address"
          style={{
            padding: '10px',
            fontSize: '18px',
            width: '60%',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <br />
        <button
          onClick={saveCustomerDetails}
          style={{ padding: '10px', fontSize: '16px', marginTop: '10px' }}
        >
          Save Customer Details
        </button>

        {savedCustomer && (
          <div
            style={{
              marginTop: '20px',
              fontSize: '18px',
              color: '#333',
            }}
          >
            <strong>Saved Customer Details:</strong>
            <div>Name: {savedCustomer.name}</div>
            <div>Email: {savedCustomer.email}</div>
            <div>Address: {savedCustomer.address}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
