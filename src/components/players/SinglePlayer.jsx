import { Link } from "react-router-dom";
function SinglePlayer({ data }) {
  return (
    <>
      <Link key={data.name} to={"/players/" + data.name}>
        <div className="character">
          <h1>{data.id}</h1>
          <img src={data.imageUrl} alt={data.id} />
        </div>
      </Link>
    </>
  );
}

export default SinglePlayer;
