import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";

export default function UserList() {
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
      return (
          <div className="userListUser" >
              <img className="userListImage" src={params.row.avatar} alt="" />
              {params.row.username}
          </div>
      )
  } },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
  },
  {
    field: 'transaction',
    headerName: 'Transaction',
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
        return (
            <>
                <button className="userListEdit">Edit</button>
                <DeleteOutline className="userListDelete"/>
            </>
        )
    }
  }

];

const rows = [
    { id: 1, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "John@gmail.com", status: "active", transaction: "$120" },
    { id: 2, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "John@gmail.com", status: "active", transaction: "$120" },
    { id: 3, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "John@gmail.com", status: "active", transaction: "$120" },
    { id: 4, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "John@gmail.com", status: "active", transaction: "$120" },
    { id: 5, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "John@gmail.com", status: "active", transaction: "$120" },
    { id: 6, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "John@gmail.com", status: "active", transaction: "$120" },
    { id: 7, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "John@gmail.com", status: "active", transaction: "$120" },
    { id: 8, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "John@gmail.com", status: "active", transaction: "$120" },
    { id: 9, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "John@gmail.com", status: "active", transaction: "$120" },
    { id: 10, username: 'Jon Snow', avatar: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", email: "John@gmail.com", status: "active", transaction: "$120" }
];

    return (
        <div className="userList">
                 <DataGrid rows={rows} disableSelectionOnClick columns={columns}  pageSize={8} rowsPerPageOptions={[5]} checkboxSelection />
        </div>
    )
}
