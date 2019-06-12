import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class ViewRide extends React.Component {
    render() {
        //Dummy data array that will be replace using api call
        const data = [{
            name: 'Roy Agasthyan',
            age: 26,
            destination: 'Masaki',
            status: 'Available'
        }, {
            name: 'Sam Thomason',
            age: 22,
            destination: 'Seedspace',
            status: 'Available'
        }, {
            name: 'Michael Jackson',
            age: 36,
            destination: 'Posta',
            status: 'Available'
        }, {
            name: 'Samuel Roy',
            age: 56,
            destination: 'Mikocheni',
            status: 'Available'
        }, {
            name: 'Rima Soy',
            age: 28,
            destination: 'Tegeta',
            status: 'Available'
        }, {
            name: 'Suzi Eliamma',
            age: 28,
            destination: 'Kimara',
            status: 'Available'
        }]

        const columns = [{
            Header: 'Name',
            accessor: 'name'
        }, {
            Header: 'Age',
            accessor: 'age'
        }, {
            Header: 'Destination',
            accessor: 'destination'
        }, {
            Header: 'status',
            accessor: 'status'
        }]

        return (
            <div>
                <ReactTable
                    style={{ backgroundColor: "white", width: "81%", textAlign:'center', marginLeft:'245px', marginTop:'7px' }}
                    data={data}
                    columns={columns}
                    defaultPageSize={13}
                    pageSizeOptions={[3, 5, 10]}
                />
            </div>
        )

    }
}

export default ViewRide;