import React, { Component } from 'react'


class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    if (this.props.data === newProps.data) {
      return false;
    }
    return true;
  }

  render() {
    console.log("TOC is rendered...");
    let lists = [];
    let data = this.props.data;
    let i = 0;
    while(i < data.length) {
      lists.push(
      <li key={data[i].id}>
        <a 
        href={"/content/" + data[i].id}
        data-id = {data[i].id}
        onClick={function(e) {
          e.preventDefault();
          this.props.onChangePage(e.target.dataset.id);
        }.bind(this)}
        >
        {data[i].title}
        </a>
      </li>);
      i += 1;
    }

    return (
      <nav>
        <ul>
            {lists}
        </ul>
      </nav>
    )
  }
}

export default TOC; // TOC.js를 import한 곳에서 toc라는 클래스를 가져다 쓸 수 있게 됨.