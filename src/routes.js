import  { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from 'react-native-vector-icons'

import Home from './pages/Home'
import Signup from './pages/Signup'
import Forgott from './pages/Forgott'
import Login from './pages/Signin'


const Tab = createBottomTabNavigator();

function Routes() {
    return(
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                backgroundcolor: '#171626',
                borderTopWidth: 0,

                bottom: 14,
                left: 14,
                right: 14,
                elevation: 0,
                borderRadius: 4,

            }
          }}
        >        
            <Tab.Screen
                name="Inicio"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused){
                            return <Ionicons name="home" size={size} color={color} />
                        }

                        return <Ionicons name="home-outline" size={size} color={color} />
                    }
                }}
            />   

            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused){
                            return <Ionicons name="enter" size={size} color={color} />
                        }

                        return <Ionicons name="enter-outline" size={size} color={color} />
                    }
                }}
            /> 

            <Tab.Screen
                name="Criar Conta"
                component={Signup}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused){
                            return <Ionicons name="person-add" size={size} color={color} />
                        }

                        return <Ionicons name="person-add-outline" size={size} color={color} />
                    }
                }}
            />   

            <Tab.Screen
                name="Recuperar Senha"
                component={Forgott}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused){
                            return <Ionicons name="settings" size={size} color={color} />
                        }

                        return <Ionicons name="settings-outline" size={size} color={color} />
                    }
                }}
            />
   
        </Tab.Navigator>
    )
}

export default Routes;