import React, { PropTypes } from 'react';
import CourseInput from '../common/CourseInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onChange,onSave, errors, loading}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <CourseInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title} />

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        onChange={onChange}
        options={allAuthors}
        error={errors.authorId} />

      <CourseInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category} />

      <CourseInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length} />

      <input
        type="submit"
        disabled={loading}
        value={loading? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};


export default CourseForm;