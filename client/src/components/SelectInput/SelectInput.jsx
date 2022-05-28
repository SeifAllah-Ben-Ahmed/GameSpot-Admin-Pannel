import { Field, getIn } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAttributes } from '../../features/product/productApi';
import ErrorMessage from '../ErrorMessage';

const SelectInput = ({ form, index }) => {
  const dispatch = useDispatch();
  const { attributes } = useSelector((store) => store.product);
  useEffect(() => {
    dispatch(getAttributes());
  }, [dispatch]);

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
          {attributes?.map((item) => (
            <option key={item._id} value={item.key}>
              {item.key}
            </option>
          ))}
        </Field>

        <ErrorMessage name={`attributes[${index}].attributeName`} />
      </div>
      <div className="col">
        {form.values.attributes[index].attributeName && (
          <>
            <Field
              as="select"
              placeholder="Attributes attributeValue"
              className={`form-control shadow-none ${
                (errorField('attributeValue')[0] && 'is-invalid') ||
                (errorField('attributeValue')[1] && 'is-valid')
              } `}
              name={`attributes[${index}].attributeValue`}
            >
              <option value="">select value attribute</option>
              {attributes
                ?.find(
                  (obj) =>
                    obj.key === form.values.attributes[index].attributeName
                )
                ?.value.map((el, i) => (
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
