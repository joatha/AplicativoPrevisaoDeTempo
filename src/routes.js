import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './page/Home/index';
import Search from './page/Search/Index';

const Drawer = createDrawerNavigator();

function Routes(){
    return(
        <Drawer.Navigator>

            <Drawer.Screen
                name="Home"
                component={Home}
                options={{title:'Minha Cidade'}}
            />

            <Drawer.Screen
                name="Search"
                component={Search}
                options={{title:'Procurar'}}
            />

        </Drawer.Navigator>
    )
}


export default Routes;