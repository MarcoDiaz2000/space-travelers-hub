import { useDispatch } from 'react-redux';
import '../styles/rocket.css';
import { reserveRocket } from '../redux/rockets/rocketsSlice';

export default function Rocket({ item }) {
  const {
    name, description, flickr_images, reserved,
  } = item;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(reserveRocket(item.id));
  };
  return (
    <div className="container">
      <div className="container-img">
        <img src={flickr_images[0]} alt="rocket" />
      </div>
      <div className="container-1">
        <h1>{name}</h1>
        {reserved && <span className="button status">Reserved</span>}
        <p>{description}</p>
        <button className={reserved ? 'button button1' : 'button'} type="button" onClick={handleClick}>
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>

  );
}
