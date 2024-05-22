import { useGetPlayerQuery } from "../../api/index.js";
import { useParams, Link } from "react-router-dom";
import SinglePlayer from "./SinglePlayer.jsx";
import { useDeletePlayerMutation } from "../../api/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

function SPlayerPage() {
  const params = useParams();
  const id = params.id;
  const { isLoading, data } = useGetPlayerQuery(id);
  console.log(!isLoading && data.data.player);
  const [deletePlayer] = useDeletePlayerMutation();

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>
          <SinglePlayer data={data.data.player} />
        </h1>
      )}
      <FontAwesomeIcon
        style={{ color: "gray", fontSize: "50px" }}
        onClick={() => deletePlayer(id)}
        icon={faTrash}
      />
      <Link to={"/"}>
        <button className="returnButt">Return to Players</button>
      </Link>
    </div>
  );
}
export default SPlayerPage;
