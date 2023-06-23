import { useDispatch } from 'react-redux';
import '../styles/rocket.css';
import { cancelRocket, reserveRocket } from '../redux/rockets/rocketsSlice';

export default function Rocket({ item, myProfile }) {
  const {
    name, description, flickr_images, reserved,
  } = item;
  const dispatch = useDispatch();
  const handleClick = () => {
    if (reserved) { dispatch(cancelRocket(item.id)); } else dispatch(reserveRocket(item.id));
  };
  return (
    <div className={myProfile ? 'container style' : 'container'}>
      {!myProfile && (
      <div className="container-img">
        <img src={flickr_images[0]} alt="rocket" />
      </div>
      )}
      <div className="container-1">
        <h1>{name}</h1>
        {reserved && !myProfile && <span className="button status">Reserved</span>}
        {!myProfile && (<p>{description}</p>)}
        {!myProfile && (
        <button className={reserved ? 'button button1' : 'button'} type="button" onClick={handleClick}>
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
        )}
      </div>
    </div>

  );
}
