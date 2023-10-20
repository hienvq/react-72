function UserList({ data, style }: { data: Array<any>; style: any }) {
  return (
    <ul style={style}>
      {data.map((e) => (
        <li>{e.name}</li>
      ))}
    </ul>
  );
}
export default UserList;
