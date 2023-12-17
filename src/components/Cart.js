import { Button, Container, Image } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { clear, deleteFromCart } from '../rtk/slices/cart-slice';

const Cart = () => {

  const cart = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantitys;
    return acc;
  }, 0)

  return (
    <div>
      <Container>
        <h1 className='py-5'>Welcome to Cart</h1>
        <Button className='mb-3' variant='primary' onClick={() => dispatch(clear())}>Clear All Products</Button>

        <h5>Total Price : {totalPrice.toFixed(2)} $</h5>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {cart.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td><Image src={product.image} alt={product.title} style={{ width: "100px", height: "100px" }} /></td>
                <td>{product.price}$</td>
                <td>{product.quantity}</td>
                <td><Button variant='danger' onClick={() => dispatch(deleteFromCart(product))}>Delete</Button></td>
              </tr>
            ))}

          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Cart;
