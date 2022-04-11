import React from 'react';
import { FaHeart, FaBars } from 'react-icons/fa';
import SideBar from './sideBar'
import Searchbar from './searchbar'
import {ThemeContext} from '../App';
 
// collapsed,
// handleToggleSidebar,
export default (props:any) => {
    const [collapsed, setcollapsed] = React.useState(false);
 
    return < >
 <ThemeContext.Consumer>
       {({theme, toggleTheme}) => (
            <>
                <SideBar collapsed={collapsed} />
                <main  className={`${theme=="light"?"themeLight":"themeDark"}`}>
                    <div>
                        <div className="btn-toggle" onClick={() => setcollapsed(!collapsed)}>
                            <FaBars color="#59bad8" />
                        </div>
                        <header>
                            <h1 >
                                {props.title}
                            </h1>
        
                            <Searchbar />
        
                        </header>
                    </div>
                    <div className="block ">
                        {
                            props.children
                        }
                    </div>
        
                    <footer>
                        <small>
                            © {new Date().getFullYear()} made with <FaHeart style={{ color: 'red' }} /> by -{' '}
                            <a target="_blank" rel="noopener noreferrer" href="">
                                Marinzon
                            </a>
                        </small>
                        <br />
        
                    </footer>
                </main>
        
        </>
     
      )}

      </ThemeContext.Consumer>

      
    </ >
}