import React from 'react'
import AddItemForm from './components/addItemForm/AddItemForm'

import AppNavbar from './components/header/AppHeader'
import Slider from './components/slider/slider'
import Food from './components/pages/Food'
import { Route, Switch } from 'react-router'
import SignUpModal from "./components/pages/signup";

const App = () => {
    return(
        <div>
            <AppNavbar/>
            <Slider/>
                <div>
                    <Switch>
                        <Route path='/food' render={()=><Food/>}/>
                        <Route path='/addItem' render={()=><AddItemForm/>}/>
                    </Switch>    
                </div>
            <SignUpModal/>
        </div>
    )
}

export default App