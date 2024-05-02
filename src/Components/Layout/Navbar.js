import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'


import logo from '../../Assets/logo_white.svg'

// Import library Components
import { Menu } from 'antd'
import { 
    LayoutOutlined, 
 } from '@ant-design/icons'
import { logout } from '../../Service/Actions/authAction'


const Navbar = ({ isAuthenticated }) => {
    const [ selectedMenu, setSelectedMenu ] = useState(null)
    const location = useLocation()
    const prevLocation = usePrev(location)
    const dispatch = useDispatch()

    // in useEffect, check if is available and set selectedMenu
    useEffect(() => {
        if(location) {
            const pathname = location?.pathname
            const prevPathname = prevLocation?.pathname

            if(pathname !== prevPathname) {
                // remove '/' from pathname if it exists at the beginning of the string (e.g. '/dashboard')
                const pathnameWithoutSlash = pathname.replace(/^\//, '')
                setSelectedMenu(pathnameWithoutSlash)
            }
        }
    }, [location, prevLocation])

    // Hanlde Menu Change
    const handleMenuChange = (e) => {
        setSelectedMenu(e.key)
    }

    // get navigation Menu and Submenu property
    const getNavProperty = ( menuName ) => {
        const menuList = [
            {
                id: 'home',
                key: 1,
                label: 'Home', 
                icon: <LayoutOutlined />,
                link: '/home'
            },
            {
                id: 'publications',
                key: 1,
                label: 'Publications', 
                icon: <LayoutOutlined />,
                link: '/publications'
            },
            {
                id: 'people',
                key: 1,
                label: 'People', 
                icon: <LayoutOutlined />,
                link: '/people'
            },
            {
                id: 'projects',
                key: 1,
                label: 'Projects', 
                icon: <LayoutOutlined />,
                link: '/projects'
            },
            {
                id: 'award',
                key: 1,
                label: 'Award', 
                icon: <LayoutOutlined />,
                link: '/award'
            },
            // {
            //     id: 'fundings',
            //     key: 1,
            //     label: 'Fundings', 
            //     icon: <LayoutOutlined />,
            //     link: '/fundings'
            // },
            {
                id: 'news',
                key: 1,
                label: 'News & Events', 
                icon: <LayoutOutlined />,
                link: '/news'
            },
        ]

        return menuList
    }
    

    // controliing nav menu access 
    const getAllNavMenu = () => {
        const menuItems = getNavProperty()

        let controlledMenuLinks = [...menuItems];

        if( isAuthenticated ){
            controlledMenuLinks = menuItems.filter( item => item.id !== 'login' )
            controlledMenuLinks.push(
                // {
                //     id: 'User-profile',
                //     key: 1,
                //     label: 'User Profile', 
                //     icon: <LayoutOutlined />,
                //     link: '/userprofile'
                // },
                {
                    id: 'logout',
                    key: 1,
                    label: 'Logout', 
                    icon: <LayoutOutlined />,
                    action: () => handleLogout()
                },
            )
        }


        // rendering Menu component
        const menuLinks = controlledMenuLinks.map(item => ( 
                <Menu.Item key={ item.id } icon={ item.icon }>
                    {
                        item?.link &&
                        <Link to={ item.link }>{ item.label }</Link>
                    }
                    {
                        item?.action &&
                        <p onClick={ item?.action }>{ item?.label }</p>
                    }
                </Menu.Item>
            )
        )
        
        


        return menuLinks
    }
   

    // Handle Logout
    const handleLogout = () => {
     setTimeout(() => {
         dispatch( logout() )
     }, 1000)      
 }

 

    return (
        <div>
             <div style={ logoStyle }>                    
                <Link to='/'>
                    <img src={ logo } height={ 120 } width={ 120 } />
                </Link>
            </div>
            <div style={{ height: '100vh' }}>
                <Menu
                    selectedKeys={[ selectedMenu ]}
                    mode={ 'inline' }
                    onClick={ handleMenuChange }
                    theme={'dark'}
                    className={ 'scrollable' }
                    style={{ maxHeight: '80%', overflowY: 'auto' }} 
                >
                    {
                        getAllNavMenu()
                    }
                </Menu>
            </div>
            
       </div>
    )
}

// Use Prev
const usePrev = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
}

// JSS Styles
const logoStyle = {
    // backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px'
}

// Prop Types
Navbar.propTypes = {
    isAuthenticated: PropTypes.bool,
}

Navbar.defaultProps = {
    isAuthenticated: false,
}

// const mapStateToProps = state => ({
//     user: state?.auth?.user ?? null,
//     allowedPermission: state?.permission?.allowedPermission ?? null 
// })

// const mapDispatchToProps = dispatch => ({ dispatch })

export default Navbar