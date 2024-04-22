import { useState } from "react";
import useRoleAccessApi from "../../Api/useRoleAccessApi";
import Loader from "../../Utility/Loader/Loader";
import Title from "../../Utility/TItle/Title";
import { Checkbox } from "primereact/checkbox";

const NewRoleSample = () => {
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };

    return (
        <div>
            <Title title="New Role" />
            <form className="border p-3">
                <label className="text-sm font-semibold">
                    Role Name <span className="text-red-500">(required)</span>
                </label>
                <input
                    type="text"
                    name="role"
                    className="border text-gray-900 text-sm rounded-sm block w-full p-4  focus:outline-none"
                    placeholder="Enter Role"
                    required
                />

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="p-2 grid grid-cols-2">
                        <div className="w-full">
                            <h2 className="bg-gray-800 text-white text-xl font-semibold p-2 w-full">User</h2>
                            <div className="grid grid-cols-2 gap-10 justify-center items-center ">
                                {categories.map((category) => {
                                    return (
                                        <div key={category.key} className="flex align-items-center">
                                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                                            <label htmlFor={category.key} className="ml-2">
                                                {category.name}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    );
};

export default NewRoleSample;
