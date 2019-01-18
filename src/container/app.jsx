import React, { Component } from 'react'
import Layout from "./../component/layout"
import { BrowserRouter as Router } from "react-router-dom";
import RouterView from "./../router";

class Index extends Component {
    render () {
        return (
            <div className="wrap">
               this is app
                <Layout>
                    <Router>
                        <RouterView/>
                    </Router>
                </Layout>
            </div>
        )
    }
}

export default Index