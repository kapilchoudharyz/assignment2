import {DataTable} from "@/components/AdminDashboard/data-table.tsx";
import {columns} from "@/components/AdminDashboard/columns.tsx";
import {useSelector} from "react-redux";
function App() {
  const data = useSelector(state => state.userReducer.users)

    console.log(data)
return (
<div className="px-4">
    <DataTable columns={columns} data={data}/>
</div>
)
}
export default App
