import React from "react";
import { Field, Form, Formik } from "formik";
// import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          checkboxes: [],
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.onSubmit}>
            <Field
              component="select"
              id="checkboxes"
              name="checkboxes"
              multiple={true}
            >
              <option value="Foo">Foo</option>
              <option value="Bar">Bar</option>
              <option value="Baz">Baz</option>
              <option value="Quux">Quux</option>
            </Field>
            {formik.values.checkboxes.map((cboxValue) => (
              <label key={cboxValue}>
                <Field type="checkbox" name={cboxValue} />
                {cboxValue}
              </label>
            ))}
          </Form>
        )}
      </Formik>
    </div>
  );
}
