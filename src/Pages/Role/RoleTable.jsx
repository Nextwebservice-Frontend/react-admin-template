import { Link } from "react-router-dom";
import useRoleAccessApi from "../../API/useRoleAccessApi";

const RoleTable = () => {
  const [roleAccess] = useRoleAccessApi();
  return (
    <>
      <div className=" border p-4 ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 md:border mb-4 w-full">
          <div className="flex border md:border-none w-full">
            <button className="btn rounded-none border-none text-white bg-green-500">
              ALL
            </button>
            <button className="btn rounded-none border-none text-blue-600 bg-[#f7f7f7]">
              Active
            </button>
            <button className="btn rounded-none border-none text-blue-600 bg-[#f7f7f7]">
              Inactive
            </button>
            <button className="w-[100%] bg-[#f7f7f7]"></button>
          </div>
          <Link to='/newRole' className="btn rounded-none bg-green-500 text-white hover:bg-green-600">
            New Role
          </Link>
        </div>

        <div className="relative overflow-x-auto shadow-md rounded-sm">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-black uppercase bg-gray-200">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 border-r border-r-white w-2/12"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 border-r border-r-white w-1/12"
                >
                  Gurd
                </th>
                <th scope="col" className="px-6 py-3">
                  Permission
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b text-black hover:bg-gray-50">
                <th className="px-6 py-6 font-medium whitespace-nowrap border-r border-r-gray-300">
                  Admin
                </th>
                <td className="px-6 py-4 border-r border-r-gray-300">Web</td>
                <td className="px-6 py-4 border-r border-r-gray-300 flex flex-wrap gap-1">
                  {roleAccess?.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-yellow-600 text-white rounded-sm text-xs p-1"
                    >
                      {item.name}
                    </span>
                  ))}
                </td>
              </tr>
              <tr className="bg-white border-b text-black hover:bg-gray-50">
                <th
                  className={`px-6 py-6 font-medium whitespace-nowrap border-r border-r-gray-300 relative group`}
                >
                  Admin
                  <div className="absolute opacity-0 group-hover:opacity-100">
                    <button className="text-md font-bold text-yellow-600">
                      Edit
                    </button>
                  </div>
                </th>
                <td className="px-6 py-4 border-r border-r-gray-300">Web</td>
                <td className="px-6 py-4 border-r border-r-gray-300 flex flex-wrap gap-1"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RoleTable;
