


const Btn = ({text}) => {
    return (
        <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="rounded-sm bg-blue-600 text-white px-4 py-[8px] text-sm font-medium hover:bg-blue-700 duration-500"
          >
            {text}
          </button>
    );
};

export default Btn;