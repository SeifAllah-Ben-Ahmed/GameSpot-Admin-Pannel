import { useState } from 'react';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { useField } from 'formik';
import ErrorMessage from '../ErrorMessage';

const RichEditor = ({ name, formik }) => {
  const [field, meta] = useField(name);
  const [content, setContent] = useState(
    (formik.initialValues[name] &&
      EditorState.createWithContent(
        convertFromRaw(
          formik.initialValues[name] && JSON.parse(formik.initialValues[name])
        )
      )) ||
      EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState) => {
    setContent(editorState);
    formik.setFieldValue(
      name,
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    );
  };

  return (
    <>
      <div>
        <Editor
          editorClassName="p-2"
          name={name}
          editorState={content}
          style={{ height: '200px' }}
          wrapperClassName={`form-control shadow-none p-0 mb-2 ${
            (meta.touched && meta.error && 'is-invalid') ||
            (meta.touched && !meta.error && 'is-valid')
          }`}
          onEditorStateChange={onEditorStateChange}
        />
        <ErrorMessage
          component="div"
          className="invalid-feedback"
          name={field.name}
        />
      </div>
      {/* <div
        className="d-block"
        dangerouslySetInnerHTML={{
          __html: draftToHtml(convertToRaw(content.getCurrentContent())),
        }}
      ></div> */}
    </>
  );
};

export default RichEditor;
