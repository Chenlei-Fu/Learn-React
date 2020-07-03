import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from "react-router-dom";

import Header from './common/header';
import Home from './pages/home';
import Detail from "./pages/detail";
import login from './pages/login';
import Write from './pages/write';


import { ResetGlobalStyle } from "./style";
import {GlobalIconStyle } from "./statics/iconfont/iconfont";
import store from './store';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <ResetGlobalStyle />
                    <GlobalIconStyle />
                    <BrowserRouter>
                        <div>
                            <Header/>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/login' exact component={login}></Route>
                            <Route path='/write' exact component={Write}></Route>
                            <Route path='/detail/:id' exact component={Detail}></Route>
                        </div>
                    </BrowserRouter>
                </div>
            </Provider>

        )
    }
}

export default App;
