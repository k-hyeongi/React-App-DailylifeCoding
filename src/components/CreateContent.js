import React, { Component } from 'react'

class CreateContent extends Component {
    render() {
      return (
        <article>
          <h2>Create</h2>
          <form action="" method=""
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
              );
            }.bind(this)}>
            <p>
              <input type="text" name="title" placeholder="title"></input>
            </p>
            <p>
              <textarea name="desc" placeholder="desc"></textarea>
            </p>
            <p>
              <input type="submit" value="Submit"></input>
            </p>
          </form>
        </article>
      )
    }
  }

  export default CreateContent;