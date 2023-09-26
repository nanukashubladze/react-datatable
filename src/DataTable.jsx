
function DataTable() {
  const usersArray = [
    {
      id: 1,
      name: "John",
      age: 25,
      profileImage: "https://via.placeholder.com/150/92c952",
    },
    {
      id: 2,
      name: "Jane",
      age: 24,
      profileImage: "https://via.placeholder.com/150/771796",
    },
    {
      id: 3,
      name: "Bob",
      age: 30,
      profileImage: "https://via.placeholder.com/150/24f355",
    },
    {
      id: 4,
      name: "Mary",
      age: 28,
      profileImage: "https://via.placeholder.com/150/d32776",
    },
  ];

  return usersArray.map((val, key) => (
    <tr key={key}>
      <td>{val.name}</td>
      <td>{val.age}</td>
      <td><img src={val.profileImage} alt="" /></td>
    </tr>
    )
  )

};

export default DataTable;

