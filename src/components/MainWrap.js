import React from "react";
import s from './MainWrap.module.scss'
import {Link} from "react-router-dom";


const MainWrap = (props) => {

    const [open, setOpen] = React.useState(false);
    console.log(open)
    const handleDrawer = () => {
        setOpen(!open);    
    };
    


    return (
        <div className={s.mainWrap}>
            <div className={s.leftMenu}>
                <div className={s.menuLogo}>
                    <img src='https://www.smogon.com/media/zracknel-beta.svg'/>
                </div>

                <div className={s.menuItem}>

                    <button onClick={handleDrawer} > <img src={'https://www.smogon.com/dex/media/images/search.png.m.1523036372'}/></button>
                    <b>Search</b>
                    <Link to={'/'}>
                        <img src={'https://www.smogon.com/dex/media/images/pkball.png.m.1523036372'}/>
                    </Link>
                    <b>Pokemon</b>
                    <Link to='/moves'>
                        <img src={'https://www.smogon.com/dex/media/images/moves.png.m.1523036372'}/>
                    </Link>
                    <b>Moves</b>
                    <Link to='/Abilities'>
                        <img src={'https://www.smogon.com/dex/media/images/abilities.png.m.1523036372'}/>
                    </Link>
                    <b>Abilities</b>
                    <Link to='/Items'>
                        <img src={'https://www.smogon.com/dex/media/images/items.png.m.1523036372'}/>
                    </Link>
                    <b>Items</b>
                    <Link to='/Types'>
                        <img src={'https://www.smogon.com/dex/media/images/types.png.m.1523036372'}/>
                    </Link>
                    <b>Types</b>
                </div>

            </div>
            <div className={s.mainContent}>
                {props.children}
            </div>
        </div>
    );
}


export default MainWrap