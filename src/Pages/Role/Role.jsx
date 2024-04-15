import RoleTable from "./RoleTable";

const Role = () => {
    return (
        <div>
        <div className="flex flex-wrap align-items-center justify-content-between gap-2 my-5">
            <h1 className="text-xl md:text-2xl text-900 font-bold ml-4 md:ml-0">Service List</h1>
        </div>
        <RoleTable />
    </div>
);
};

export default Role;