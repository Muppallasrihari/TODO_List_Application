import React from 'react';
import NavigationPanelComponent from './NavigationPanelComponent';

class HeaderComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            logoText:"Issue Tracker App"
        }
    }
    render(){
        return(
            <div >
                <NavigationPanelComponent logoText={this.state.logoText}/>
            </div>
        );
    }
}
export default HeaderComponent;