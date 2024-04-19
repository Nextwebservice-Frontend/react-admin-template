import { useMemo } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from 'ag-grid-react';


const DataTable = () => {
      const rowData = [
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
      ]
    
      const columnDefs = [
        {
            field: "make",
            checkboxSelection: true,
            editable: true,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: ["Tesla", "Ford", "Toyota", "Mercedes", "Fiat", "Nissan", "Vauxhall", "Volvo", "Jaguar"],
            },
        },
        { field: "model" },
        { field: "price", filter: 'agNumberColumnFilter' },
        { field: "electric" },
        {
            field: "month",
            comparator: (valueA, valueB) => {
                const months = [
                    'January', 'February', 'March', 'April',
                    'May', 'June', 'July', 'August',
                    'September', 'October', 'November', 'December',
                ];
                const idxA = months.indexOf(valueA);
                const idxB = months.indexOf(valueB);
                return idxA - idxB;
            },
        }
      ]
      
      const defaultColDef = useMemo(() => {
        return {
          filter: 'agTextColumnFilter',
          floatingFilter: true,
        }
      }, []);

    return (
        <div className="ag-theme-quartz mt-5" style={{ height: '83vh' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          suppressRowClickSelection={true}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 25, 50]}
        />
    </div>
    );
};

export default DataTable;