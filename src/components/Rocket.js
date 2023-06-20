import '../styles/rocket.css';

export default function Rocket({ item }) {
  const {
    name, description, flickr_images,
  } = item;
  return (
    <div className="container">
      <div className="container-img">
        <img src={flickr_images[0]} alt="rocket" />
      </div>
      <div className="container-1">
        <h1>{name}</h1>
        <p>{description}</p>
        <button className="button" type="button">Reserve Rocket</button>
      </div>
    </div>

  );
}
