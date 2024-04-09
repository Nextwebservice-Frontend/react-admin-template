import { useState } from "react";
import ExpenseListModal from "./ExpenseListModal";

const ExpenseList = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mt-3">
      <h3 className="">Expense List</h3>
      <div className="border rounded-lg p-3">
        <div className="flex justify-between bg-gray-100">
          <div className="flex gap-1">
            <button className="bg-green-400 text-white px-4 py-2">All</button>
            <button className="bg-green-400 text-white px-4 py-2">
              Active
            </button>
            <button className="bg-green-400 text-white px-4 py-2">
              Inactive
            </button>
          </div>
          <button
          onClick={() => setIsOpen(true)}
          className="bg-green-400 text-white px-4 py-2">Add New</button>
        </div>
      </div>
      <ExpenseListModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default ExpenseList;
