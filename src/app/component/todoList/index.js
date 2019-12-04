import React from 'react';
import { connect } from 'react-redux'
import { fetchsPost } from '../../../store/actions/index'

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fun = () => {
    const {fun,} = this.props;
    fun();
  }
  
  render () {
    const {todos,} = this.props;
    return (
      <div className="todoList-box">
        <button onClick={this.fun}>{todos.length}</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => state

const mapDispatchToProps = (dispatch, ownProps) => ({
  fun: () => dispatch(fetchsPost())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoList)