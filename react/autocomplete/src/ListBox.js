const ListBox = ({ items }) => {
  console.log("items", items);
  return (
    <>
      {items.map((each) => (
        <li key={each.url}>{each.name}</li>
      ))}
    </>
  );
};

export default ListBox;
