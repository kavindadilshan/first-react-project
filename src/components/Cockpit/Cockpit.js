import React, {Component} from 'react';
import Styles from "../../components/Cockpit/Cockpit.css";
import AuxElement from "../../hoc/AuxElement";

class Cockpit extends Component {
    render() {
        const classes = [];

        if (this.props.personList.length <= 2) {
            classes.push(Styles.TitleColor)
        }

        if (this.props.personList.length <= 1) {
            classes.push(Styles.TitleFont)
        }
        return (
            <AuxElement>
                <h1 className={classes.join(" ")}>{this.props.title}</h1>
                <button className={Styles.VisibleBtnStyle} onClick={() => this.props.onPress()}>Toggle Button</button>
            </AuxElement>
        );
    }
}

export default Cockpit;