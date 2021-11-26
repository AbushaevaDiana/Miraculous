import './App.css';
import './Slidemenu.css';
import React, { Component } from 'react';
export default class Slidemenu extends Component {
    render() {
        return (
            <>  
               <div className="slidemenu">
                   <ul className="slidemenu__list">
                       <li className="slidemenu__list__slide"></li>
                       <li className="slidemenu__list__slide"></li>
                       <li className="slidemenu__list__slide"></li>
                       <li className="slidemenu__list__slide"></li>
                       <li className="slidemenu__list__slide"></li>
                   </ul>
                   <div className="imglogo"></div>
               </div>
            </>
        )

    }
};