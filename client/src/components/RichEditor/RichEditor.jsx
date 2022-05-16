import { useState } from 'react';
import { convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
import { useField } from 'formik';
import ErrorMessage from '../ErrorMessage';

const RichEditor = ({ name, formik }) => {
  const [field, meta] = useField(name);
  const [content, setContent] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setContent(editorState);
    formik.setFieldValue(
      name,
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    );
  };

  // console.log(draftToHtml(convertToRaw(content.getCurrentContent())));

  return (
    <>
      <Editor
        editorClassName="p-2"
        name={name}
        editorState={content}
        style={{ maxHeight: '200px' }}
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
    </>
  );
};

export default RichEditor;
