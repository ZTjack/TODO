import React, {Component} from "react";
import {testFun} from "./../../actions/testAction";
import {connect} from "react-redux";
import {Icon} from 'react-fa';

class TestIndex extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.testFun();
    }
     
    render(){
        return(
            <div>
              <Icon name="file"/> {this.props.test}
            </div>
            );
    }   
   
}

const mapStateToProps = (state) => {
    return {
        test: state.test.test,
    };
};


export default connect(mapStateToProps, {testFun})(TestIndex);




