export default function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.cartItem}</p>
      <p>500원</p>
      <p>1개</p>
    </div>
  );
}