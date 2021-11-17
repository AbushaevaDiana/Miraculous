import './App.css';
import React, { Component } from 'react';
export default class Slidemenu extends Component {
    render() {
        return(
            <>  
               <div class="slidemenu">
                   <ul class="slidemenu__list">
                       <li className={slidemenu__list__slide}></li>
                       <li class="slidemenu__list__slide"></li>
                       <li class="slidemenu__list__slide"></li>
                       <li class="slidemenu__list__slide"></li>
                       <li class="slidemenu__list__slide"></li>
                   </ul>
                   <img class="imglogo" src="/img/logo.png" alt="Логотип"></img>
               </div>
            </>
        )

    }
};

