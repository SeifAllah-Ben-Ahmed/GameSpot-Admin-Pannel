import { Field, getIn } from 'formik';
import React from 'react';
import ErrorMessage from '../ErrorMessage';

const select = [
  {
    attributeName: 'cpu',
    attributeValue: ['i3', 'i5', 'i7'],
  },
  {
    attributeName: 'gpu',
    attributeValue: ['gtx 1050', 'rtx3060', 'rtx 3090'],
  },
  {
    attributeName: 'ram',
    attributeValue: ['8go', '16go', '32go'],
  },
];

const SelectInput = ({ form, index }) => {
  const errorField = (field) => {
    const error = getIn(form.errors, `attributes[${index}].${field}`);
    const touch = getIn(form.touched, `attributes[${index}].${field}`);
    return [error && touch, !error && touch];
  };

  return (
    <>
      <div className="col">
        <Field
          as="select"
          placeholder="Attributes Name"
          name={`attributes[${index}].attributeName`}
          className={`form-control shadow-none ${
            (errorField('attributeName')[0] && 'is-invalid') ||
            (errorField('attributeName')[1] && 'is-valid')
          } `}
        >
          <option value="">select Key attribute</option>
          {select.map((item, i) => (
            <option key={i} value={item.attributeName}>
              {item.attributeName}
            </option>
          ))}
        </Field>

        <ErrorMessage name={`attributes[${index}].attributeName`} />
      </div>
      <div className="col">
        {form.values.attributes[index].attributeName && (
          <>
            <Field
              // as="select"
              as="select"
              placeholder="Attributes attributeValue"
              className={`form-control shadow-none ${
                (errorField('attributeValue')[0] && 'is-invalid') ||
                (errorField('attributeValue')[1] && 'is-valid')
              } `}
              name={`attributes[${index}].attributeValue`}
            >
              <option value="">select value attribute</option>
              {select
                .find(
                  (obj) =>
                    obj.attributeName ===
                    form.values.attributes[index].attributeName
                )
                .attributeValue.map((el, i) => (
                  <option key={i} value={el}>
                    {el}
                  </option>
                ))}
            </Field>
            <ErrorMessage name={`attributes[${index}].attributeValue`} />
          </>
        )}
      </div>
    </>
  );
};

export default SelectInput;
