import React, {PropTypes} from 'react';

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      course: {title: ''}
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);

  }

  onTitleChange(evt) {
    const course = this.state.course;
    course.title = evt.target.value;
    this.setState({course});
  }

  onClickSave() {
    alert(`saving ${this.state.course.title}`);
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}>
        </input>
        <input type="submit"
          value="Save"
          onClick={this.onClickSave}>

        </input>
      </div>
    );
  }
}

export default CoursesPage;