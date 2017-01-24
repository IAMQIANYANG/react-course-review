import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseFrom from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.initialCourse),
      errors: {}
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course});
  }

  saveCourse(event) {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push('/courses');
  }

  render() {
    return (
      <CourseFrom
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        course={this.state.course}
        errors={this.state.errors}/>
    );
  }
}


ManageCoursePage.propTypes = {
  initialCourse: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


ManageCoursePage.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  const authorsFormattedForDropDown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    initialCourse: course,
    authors: authorsFormattedForDropDown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);