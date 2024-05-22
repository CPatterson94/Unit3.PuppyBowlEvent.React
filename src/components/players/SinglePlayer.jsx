function SinglePlayer({ data }) {
  return (
    <div className="character">
      <h1>{data.name}</h1>
      <h4>{data.breed}</h4>
      {data.imageUrl && <img src={data.imageUrl} alt={data.name} />}
    </div>
  );
}

export default SinglePlayer;
