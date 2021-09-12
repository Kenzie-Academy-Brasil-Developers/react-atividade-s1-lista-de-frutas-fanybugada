const FruitList = ({ index }) => {
  return (
    <ul>
      {index.map((fruits) => (
        <li>{fruits.name}</li>
      ))}
    </ul>
  );
};

export default FruitList;
