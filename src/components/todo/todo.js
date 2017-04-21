import React, {Component} from "react";
import Icon from "react-fa";
import moment from "moment";

export default class TODO extends Component {

    constructor(props) {
        super(props);
        this.state = {
          todos: [],
          displayType: false,
          searchKey: ""
        };
    }

    componentWillMount() {
        let initials = localStorage.getItem(this.props.type);
        if (initials != null) {
            this.setState({
                todos: JSON.parse(initials)
            })
        }
    }


    updateTodos(data) {
        this.setState({
          todos: data,
          searchKey: ""
        });
        localStorage.setItem(this.props.type, JSON.stringify(data));
    }

    changeStatus(desc) {
        let tempTodos = this.state.todos;
        tempTodos.forEach(function (item) {
            if (item.desc === desc) {
                item.type = !item.type;
            }
        });
        this.updateTodos(tempTodos);
    }

    removeTodo(desc) {
        let tempTodos = this.state.todos;
        tempTodos = tempTodos.filter(function (item) {
            return item.desc != desc;
        });
        this.updateTodos(tempTodos);
    }

    setDisplayType(event) {
        this.setState({
            displayType: event.target.value === "true"
        });
    }

    addItem(event) {
        if (event.keyCode === 13 && event.target.value != "") {
            let value = event.target.value;
            let tempTodos = this.state.todos;
            tempTodos.push({
                desc: value,
                time: moment(Date.parse(new Date())).format("MM/DD HH:mm"),
                type: false
            });
            this.updateTodos(tempTodos);
            //Init
            this.refs.input.blur();
            this.refs.input.value = "";


        }
    }

  searchTodo() {
    this.setState({
      searchKey: this.refs.input.value
    })
  }

  backToList() {
    this.setState({
      searchKey: ""
    })
  }

  searchResult(value) {
    if (this.state.searchKey == "") {
      return true;
    } else {
      return value.includes(this.state.searchKey);
    }
  }

    render() {
        let displayItem = this.state.todos.map((item) => {
          if (item.type == this.state.displayType && this.searchResult(item.desc)) {
                return (
                    <div className="item" key={item.desc + item.time}>
                        <Icon name={item.type ? "check-circle-o" : "circle-o" }
                              onClick={this.changeStatus.bind(this, item.desc)}/> {item.desc}
                      <button className="btn" onClick={this.removeTodo.bind(this, item.desc)}>
                        <Icon name="window-close-o"/>
                      </button>
                        <div className="time">{item.time}</div>
                    </div>
                )
            }
        });

        return (
            <div className={this.props.type + " todo"}>
                <div className="title">
                    {this.props.title}
                    <button className="btn add-btn" onClick={() => this.refs.input.focus()}><Icon name="plus"/></button>
                  <input type="text" placeholder="输入任务，按Enter键添加" className={this.props.type} ref="input"
                         onKeyDown={this.addItem.bind(this)}/>
                  <Icon name="search" onClick={this.searchTodo.bind(this)}/>
                  <Icon name="reply" onClick={this.backToList.bind(this)}
                        className={this.state.searchKey == "" ? "hide":""}/>
                </div>
                <div className="list">
                    {displayItem}
                </div>
                <div className="btn-group" onClick={this.setDisplayType.bind(this)}>
                    <button className={!this.state.displayType ? "btn active" : "btn"} value="false">
                        未完成
                    </button>
                    <button className={this.state.displayType ? "btn active" : "btn"} value="true">
                        已完成
                    </button>
                </div>
            </div>
        );
    }
}


