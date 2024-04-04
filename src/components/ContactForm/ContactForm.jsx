import { Field, Form, Formik } from 'formik';

const ContactForm = () => {
  return (
    <div>
      <Formik>
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
