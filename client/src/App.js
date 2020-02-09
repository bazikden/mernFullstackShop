import React from 'react'
import AddItemForm from './components/addItemForm/AddItemForm'
import AppNavbar from './components/header/AppHeader'
import Slider from './components/slider/slider'
import {Route, Switch} from 'react-router'
import SignUpModal from "./components/pages/SignUp";
import LoginModal from "./components/pages/Login";
import Kitchen from "./components/pages/Kitchen";
import Food from "./components/pages/Food";
import CartModal from "./components/pages/Cart";

const App = () => {
    return (
        <div>
            <AppNavbar/>
            <Slider/>
            <div>
                <Switch>
                    <Route exact path='/' render={() => <Food/>}/>
                    <Route path='/food' render={() => <Food/>}/>
                    <Route path='/addItem' render={() => <AddItemForm/>}/>
                    <Route path='/kitchen' render={() => <Kitchen/>}/>
                </Switch>
            </div>
            <SignUpModal/>
            <LoginModal/>
            <CartModal/>

        </div>
    )
}

export default App