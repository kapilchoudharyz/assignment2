import {DataTable} from "@/components/AdminDashboard/data-table.tsx";
import {columns} from "@/components/AdminDashboard/columns.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@/app/store.ts";
function App() {
  const data = useSelector((state: RootState) => state.userReducer.users)

    console.log(data)
return (
<div className="px-4">
    <DataTable columns={columns} data={data}/>
</div>
)
}
export default App
