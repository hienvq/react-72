function ProductList({ data }: { data: Array<any> }) {
  return (
    <ul>
      {data.map((e) => (
        <li>{e}</li>
      ))}
    </ul>
  );
}
export default ProductList;
