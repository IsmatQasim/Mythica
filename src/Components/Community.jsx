import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Community = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
  });

  const initialValues = {
    title: "",
    author: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <>
      <h2 className="mainHeading text-center pt-4">Community</h2>
      <p className="paragraph text-center">
        If you want to collaborate with your favorite writers, feel free
        <br />
        to ask us!
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div className="flex flex-row justify-center items-stretch mt-x">
              <div className="m-5">
                <Field
                  type="text"
                  name="title"
                  className="input-field bg-transparent w-full h-14 px-20 pl-2 border-black border rounded-md placeholder:text-black text-2xl subHeading"
                  placeholder="Title : "
                  style={{
                    boxShadow:
                      "0px 4px rgba(242, 189, 212, 0.5), 0px 4px rgba(233, 172, 232, 0.5), 0px 4px rgba(227, 160, 246, 0.5), 0px 4px rgba(237, 179, 224, 0.5)",
                  }}
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-center mt-2"
                />
              </div>

              <div className="m-5">
                <Field
                  type="text"
                  className="input-field bg-transparent w-full h-14 px-20 pl-2 border border-black rounded-md placeholder:text-black text-2xl subHeading"
                  name="author"
                  placeholder="Author :"
                  style={{
                    boxShadow:
                      "0px 4px rgba(242, 189, 212, 0.5), 0px 4px rgba(233, 172, 232, 0.5), 0px 4px rgba(227, 160, 246, 0.5), 0px 4px rgba(237, 179, 224, 0.5)",
                  }}
                />
                <ErrorMessage
                  name="author"
                  component="div"
                  className="text-red-500 text-center mt-2"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button bg-transparent text-black border border-black rounded-full px-8 py-2 mx-auto block text-2xl subHeading transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-95"
              style={{
                boxShadow:
                  "0px 4px rgba(242, 189, 212, 0.5), 0px 4px rgba(233, 172, 232, 0.5), 0px 4px rgba(227, 160, 246, 0.5), 0px 4px rgba(237, 179, 224, 0.5)",
              }}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Community;
