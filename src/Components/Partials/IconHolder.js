import React from 'react';
import '../css/SideMenu.css'
import ImportContactsRoundedIcon from "@material-ui/icons/ImportContactsRounded";

const IconHolder = (props)=>{
    const {query, gotoPage} = props

    return (

        <div>
            <button id={props.title} onClick={props.func} style={{backgroundColor:"transparent", boxShadow:"none", border:"none", marginBottom:"15px" }}  className={"icon-holder-div"}>
                <div className={"side-icons"}>{props.icon}</div>
                <p>{props.title}</p>
            </button>
        </div>
    )
}

export default IconHolder;
