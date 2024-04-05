import { Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const initialValues = { name: '', number: '' };
  const handleSubmit = (data, options) => {
    console.log({ ...data, id: nanoid() });
    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            name
            <Field type="text" name="name" />
          </label>
          <label>
            number
            <Field type="text" name="name" />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
