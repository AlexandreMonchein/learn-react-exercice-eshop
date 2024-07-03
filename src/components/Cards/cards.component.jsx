export const Cards = (datas) => {
  return (
    <div
      style={{
        border: "solid 1px",
        padding: "10px",
        width: "25%",
        minWidth: "200px",
      }}
    >
      <img style={{ width: "100%" }} src={datas.imageSrc} alt={datas.slug} />
      <p>{datas.name}</p>
      <p>{datas.price}</p>
    </div>
  );
};
