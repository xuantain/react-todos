import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { retrieveTodoApi, updateTodoApi, createTodoApi } from './api/TodoApiService';
import { useAuth } from './security/AuthContext';
import { Formik, Form, Field, ErrorMessage, FormikErrors } from 'formik';
import moment from 'moment';

interface FormValues {
  description: string;
  targetDate: string;
}

export default function TodoComponent() {
  const param = useParams();

  const id = Number(param.id);

  const [description, setDescription] = useState('');
  const [targetDate, setTargetDate] = useState('');

  const authContext = useAuth();
  const navigate = useNavigate();

  const username = authContext.username;

  useEffect(() => retrieveTodos(), [id]);

  function retrieveTodos() {
    if (id != -1) {
      retrieveTodoApi(username, id)
        .then((response) => {
          setDescription(response.data.description);
          setTargetDate(response.data.targetDate);
        })
        .catch((error) => console.log(error));
    }
  }

  function onSubmit(values: FormValues) {
    console.log(values);

    const todo = {
      id: id,
      username: username,
      description: values.description,
      targetDate: values.targetDate,
      done: false,
    };

    console.log(todo);

    if (id == -1) {
      createTodoApi(username, todo)
        .then((response) => {
          navigate('/todos');
        })
        .catch((error) => console.log(error));
    } else {
      updateTodoApi(username, id, todo)
        .then((response) => {
          navigate('/todos');
        })
        .catch((error) => console.log(error));
    }
  }

  function validate(values: FormValues) {
    const errors: FormikErrors<FormValues> = {};

    if (values.description.length < 5) {
      errors.description = 'Enter atleast 5 characters';
    }

    if (values.targetDate == null || values.targetDate == '' || !moment(values.targetDate).isValid()) {
      errors.targetDate = 'Enter a target date';
    }

    return errors;
  }

  return (
    <div className="container">
      <h1>Enter Todo Details </h1>
      <div>
        <Formik
          initialValues={{ description, targetDate } as FormValues}
          enableReinitialize={true}
          onSubmit={onSubmit}
          validate={validate}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {() => (
            <Form>
              <ErrorMessage name="description" component="div" className="alert alert-warning" />

              <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />

              <fieldset className="form-group">
                <label htmlFor="description">Description</label>
                <Field type="text" className="form-control" name="description" />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="targetDate">Target Date</label>
                <Field type="date" className="form-control" name="targetDate" />
              </fieldset>
              <div>
                <button className="btn btn-success m-5" type="submit">
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
