import React, { useState } from 'react';
import { ErrorMessage, useField } from 'formik';

const TagsInput = ({ ...props }) => {
  const [field, meta] = useField(props.name);
  const [tags, setTags] = useState([...field.value]);

  const addTags = (event) => {
    if (
      event.key === ',' &&
      event.target.value !== '' &&
      event.target.value.length > 1
    ) {
      setTags([...tags, event.target.value.slice(0, -1)]);
      props.formik.setFieldValue(props.name, [
        ...tags,
        event.target.value.slice(0, -1),
      ]);
      event.target.value = '';
    }
  };

  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);

    props.formik.setFieldValue(
      props.name,
      tags.filter((tag) => tags.indexOf(tag) !== index)
    );
  };
  return (
    <>
      <input
        {...props}
        autoComplete="off"
        className={`form-control shadow-none  ${
          (meta.touched && meta.error && 'is-invalid') ||
          (meta.touched && !meta.error && 'is-valid')
        }`}
        // autoComplete="off"
        onKeyUp={(event) => addTags(event)}
      />
      <ErrorMessage
        component="div"
        className="invalid-feedback"
        name={field.name}
      />

      <ul id="tags">
        {tags.map((tag, index) => (
          <li className="tag" key={index}>
            <span className="tag-title">{tag}</span>
            <span className="tag-close-icon" onClick={() => removeTags(index)}>
              X
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TagsInput;
