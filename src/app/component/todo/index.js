import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../../../store/actions/index'

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fun = () => {
    const {dispatch,} = this.props;
    dispatch(addTodo(1));
  }
  
  render () {
    return (
      <div className="todo-box">
        <button onClick={this.fun}>todo</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => state

export default connect(
  mapStateToProps, // state注入props
)(ToDo)