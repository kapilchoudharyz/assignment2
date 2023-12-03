import { Dashboard, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Dashboard[]> {
    // Fetch data from your API here.
    return [
        {
            id: '550515dfjnhd',
            name: 'Hellp',
            role: "role",
            email: "m@example.com",
        },
    //     name: string
    // email: string
    // role: string
        // ...
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
