import React, { Component } from 'react'
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export default class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coinsList: [],
            error: null
        }
    }
    componentDidMount() {
        axios.get(`https://api.coingecko.com/api/v3/coins/list`)
            .then(res => {
                const coinsList = res.data;

                this.setState({ coinsList: coinsList });
                console.log(coinsList)
            }).catch(error => {
                this.setState({ error })
                console.log(error)

            })
    }
    render() {
        const { error, coinsList } = this.state
        if (error) {
            return (<div>Error: {error.message}</div>)
        }
        else {
            const columns = [{
                dataField: 'id',
                text: 'Coin ID'
            }, {
                dataField: 'name',
                text: 'Coin Name'
            }, {
                dataField: 'symbol',
                text: 'Coin Symbol'
            }];
            const options = {
                onSizePerPageChange: (sizePerPage, page) => {
                    console.log('Size per page change!!!');
                    console.log('Newest size per page:' + sizePerPage);
                    console.log('Newest page:' + page);
                },
                onPageChange: (page, sizePerPage) => {
                    console.log('Page change!!!');
                    console.log('Newest size per page:' + sizePerPage);
                    console.log('Newest page:' + page);
                }
            };
            return (
                <BootstrapTable
                    keyField='id'
                    data={coinsList}
                    columns={columns}
                    pagination={paginationFactory(options)}
                />
            )
        }
    }
}
