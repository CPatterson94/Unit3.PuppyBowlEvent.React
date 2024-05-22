import { useSelector } from "react-redux";
import SinglePlayer from "./SinglePlayer";

// function AllPlayers() {
//   const puppy = useSelector((state) => state.puppy);
//   console.log(puppy);
//   return (
//     <>
//       <div id="characterWrapper">
//         {puppy.length < 1 ? (
//           <h1 className="notavail">No available puppies...</h1>
//         ) : (
//           puppy.map((i) => <SinglePlayer key={i.id} data={i} />)
//         )}
//       </div>
//     </>
//   );
// }

function AllPlayers() {
  const puppy = useSelector((state) => state.puppy);
  console.log(puppy);

  if (!puppy) {
    return null;
  }

  return (
    <>
      <div id="characterWrapper">
        {puppy.length < 1 ? (
          <h1 className="notavail">No available puppies...</h1>
        ) : (
          puppy.map((i) => <SinglePlayer key={i.id} data={i} />)
        )}
      </div>
    </>
  );
}
export default AllPlayers;
