import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import Layout from '../components/Layout'
import Main from '../pages/Main'
import Contact from '../pages/Contact'
import Success from '../pages/Success'
import NotFound from '../pages/NotFound'


function App() {
    return (
        <BrowserRouter>
            {/* <Layout> */}
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/success" component={Success} />
                <Route component={NotFound} />
            </Switch>
            {/* </Layout> */}
        </BrowserRouter>
    );
}

export default App
