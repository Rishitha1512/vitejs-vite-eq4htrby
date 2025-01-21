// write product card here
import ViewProductButton from '../components/button';

function Productcard() {
  // Static variables for product details
  const productImage = 'https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_Pepsi-300x300.jpg'; // Dummy image URL
  const productName = 'Pepsi 500ml';
  const productPrice = '₹290';

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} />
      <h2>{productName}</h2>
      <p>{productPrice}</p>
      <ViewProductButton />
    </div>
  );
}

export default Productcard;
