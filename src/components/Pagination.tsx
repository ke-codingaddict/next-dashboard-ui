const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        disabled
        className=" py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 cursor-not-allowed"
      >
        Prev
      </button>
      <div className="items-center justify-center flex text-sm gap-2">
        <button className="bg-techSky text-sm text-gray-500 px-2 rounded-sm">
          1
        </button>
        <button className=" text-gray-500 px-2 rounded-sm">2</button>
        <button className=" text-gray-500 px-2 rounded-sm">3</button>
        <button className=" text-gray-500 px-2 rounded-sm">...10</button>
      </div>
      <button
        disabled
        className=" py-2 px-4 first-letter:rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
