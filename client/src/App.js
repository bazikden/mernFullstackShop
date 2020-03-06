import React from 'react'
import AddItemForm from './components/addItemForm/AddItemForm'
import AppNavbar from './components/header/AppHeader'
import Slider from './components/slider/slider'
import {Redirect, Route, Switch} from 'react-router'
import SignUpModal from "./components/pages/SignUp";
import LoginModal from "./components/pages/Login";
import Kitchen from "./components/pages/Kitchen";
import Food from "./components/pages/Food";
import CartModal from "./components/pages/Cart";
import InfoModal from "./components/pages/InfoModal";

const App = () => {

    return (
        <div>
            <AppNavbar/>
            <Slider/>
            <div>
                <Switch>
                    <Route exact path='/' render={() =><Redirect to='/food'/>}/>
                    <Route path='/food' render={() => <Food/>}/>
                    <Route path='/addItem' render={() => <AddItemForm/>}/>
                    <Route path='/kitchen' render={() => <Kitchen/>}/>
                </Switch>
            </div>
            <SignUpModal/>
            <LoginModal/>
            <CartModal/>
            <InfoModal/>

        </div>
    )
}

export default App