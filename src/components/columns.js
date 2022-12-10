//     {
//       title: "Address",
//       key: "address",
//       render: record => {
//         return Object.values(record.address)
//           .filter(val => typeof val !== "object")
//           .join(" ");
//       }
//     },
//     

export const userColumns = [
  {
    dataIndex: "userName",
    title: "name",
    key: "name",
  },
  { dataIndex: "userDept", title: "Department", key: "Dept" },
  {
    dataIndex: "userEmail",
    title: "Email",
    key: "email",
  },
  {
    dataIndex: "userPassword",
    title: "Password",
    key: "password"
  },
  {
    dataIndex: "userGender",
    title: "gender",
    key: "gender"
  },
  {
    dataIndex: "userAddress",
    title: "Address",
    key: "Address"
  },
  {
    dataIndex: "userStatus",
    title: "Student Status",
    key: "status"
  },
];
