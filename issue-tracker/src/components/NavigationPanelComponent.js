import React from 'react';

class NavigationPanelComponent extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-info ">
            <a className="navbar-brand text-dark" href=''>{this.props.logoText}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" >
                <span className= "navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                        <a className="nav-link text-dark" href="">Home <span className="sr-only">(current)</span></a>        
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link text-dark" href="" tabIndex="-1" aria-disabled="true">About Us </a>        
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link text-dark" href="" tabIndex="-1" aria-disabled="true">Explore</a>        
                    </li>
                </ul>
            </div>

            </nav>
        );
    }
}
export default NavigationPanelComponent;
