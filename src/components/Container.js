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
    getDetails = async () => {
        let promises = [];
        let res = await axios.get(`https://api.coingecko.com/api/v3/coins/list`)
        const coinsList = res.data;



        for (let i = 810; i < 850; i++) {
            let res = axios.get(`https://api.coingecko.com/api/v3/coins/${coinsList[i].id}`)
            promises.push(res)
        }
        let allPromises = await Promise.all(promises)
        let details = []
        for (let i = 0; i < allPromises.length; i++) {
            details.push(allPromises[i].data)
        }
        const data = allPromises.map((el, i) => {
            var o = Object.assign({}, el)
            o.index = i + 1;
            return o
        })
        // console.log(data)

        this.setState({ coinsList: data });
    }

    componentDidMount() {
        this.getDetails()
        // axios.get(`https://api.coingecko.com/api/v3/coins/list`)
        //     .then(res => {
        //         const coinsList = res.data;

        //         let promiseAll = []

        //         console.log(promiseAll)
        //         

        //         // console.log(coinsList)
        //     }).catch(error => {
        //         this.setState({ error })
        //         // console.log(error)

        //     })
    }
    render() {
        const style = {
            border: "1px solid #e8e9eb",
            margin: "auto",
            padding: "12px",
            width: "100%",
            maxWidth: "100%",
            backgroundColor: "transparent",
            borderCollapse: "collapse",
            boxSizing: "border-box",
            fontFamily: "Quicksand",
            fontSize: "15px",
            fontColor: "#5f5f5f",
            fontWeight: "400",
            lineHeight: "26px",
            textRendering: "optimizeLegibility"
        }
        const { error, coinsList } = this.state
        if (error) {
            return (<div>Error: {error.message}</div>)
        }
        else {

            const columns = [
                {
                    dataField: 'index',
                    text: 'No.'
                },
                {
                    dataField: 'data.name',
                    text: 'Name'
                }, {
                    dataField: 'data.market_data.current_price.usd',
                    text: 'Price ($)'
                }, {
                    dataField: 'data.market_data.market_cap.usd',
                    text: 'Market Cap ($)'
                },
                {
                    dataField: 'data.market_data.total_volume.usd',
                    text: '24h Volume ($)'
                },
                {
                    dataField: 'data.market_data.circulating_supply',
                    text: 'Circulating Supply'
                },
                {
                    dataField: 'data.market_data.market_cap_change_percentage_24h_in_currency.usd',
                    text: '24h Change'
                },
                {
                    dataField: 'data.market_data.total_supply',
                    text: 'Total Supply'
                },
            ];
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
                <BootstrapTable style={style}
                    keyField='id'
                    data={coinsList}
                    columns={columns}
                    pagination={paginationFactory(options)}
                />
            )


        }
    }
}




