import { getIn } from 'formik';
import React, { useEffect, useState } from 'react';
import ErrorMessage from '../ErrorMessage';

const ImageUpload = ({ multiple, name, label, formik, srcBase }) => {
  const [preview, setPreview] = useState([]);
  useEffect(() => {
    setPreview((prev) =>
      formik.values[name]?.length && typeof formik.values[name][0] === 'string'
        ? multiple
          ? formik.values[name]?.map((el) => `${srcBase}/${el}`)
          : [`${srcBase}/${formik.values[name]}`]
        : prev
    );
  }, [setPreview, formik, multiple, name, srcBase]);

  const errorField = () => {
    const error = getIn(formik.errors, name);

    const touch = getIn(formik.touched, name);
    return [error && touch, !error && touch];
  };
  const onSelectFile = (e) => {
    const { files } = e.target;

    const filesArray = Array.from(files);

    formik.setFieldValue(name, multiple ? filesArray : filesArray[0]);

    const imageUrl = filesArray.map((file) => URL.createObjectURL(file));
    setPreview(imageUrl);
  };

  return (
    <>
      <h5 className="fw-normal text-muted  me-3">{label}</h5>
      <div className="upload">
        <div className="form-group  mb-3">
          <input
            name={name}
            type="file"
            multiple={multiple}
            className={`form-control shadow-none ${
              (errorField()[0] && 'is-invalid') ||
              (errorField()[1] && 'is-valid')
            } `}
            onChange={onSelectFile}
            accept="image/*"
          />
          <ErrorMessage name={name} />
        </div>
      </div>
      <div className="d-flex align-items-center ">
        {preview &&
          preview.map((src, index) => (
            <div className="shadow m-2 position-relative" key={index}>
              <img src={src} alt="thumnail" height="200px" />

              <strong className="position-absolute end-0 bottom-0 btn m-0">
                {index + 1}
              </strong>
            </div>
          ))}
      </div>
    </>
  );
};

export default ImageUpload;
