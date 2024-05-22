import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SinglePlayer from "./SinglePlayer";

function AllPlayers() {
  const puppy = useSelector((state) => state.puppy);
  console.log(puppy);
  return (
    <>
      <div id="characterWrapper">
        {puppy.length < 1 ? (
          <h1 className="notavail">No available puppies...</h1>
        ) : (
          puppy.map((i) => (
            <Link key={i.id} to={"/players/" + i.id}>
              <SinglePlayer data={i} />
            </Link>
          ))
        )}
      </div>
    </>
  );
}
export default AllPlayers;
