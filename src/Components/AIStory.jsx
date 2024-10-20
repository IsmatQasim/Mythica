import React from 'react'; 
import { useFormik } from 'formik';
import * as Yup from 'yup';
import aistoryImg from '../Images/AIStory.png'; // Image path

const AIStory = () => {
  // Formik setup with Yup validation
  const formik = useFormik({
    initialValues: {
      title: '',
      category: '',
      genre: '',
      wordLimit: '',
      noOfCharacters: '',
      promptLeft: '', // Prompt on the left
      promptRight: '', // Prompt on the right
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      category: Yup.string().required('Category is required'),
      genre: Yup.string().required('Genre is required'),
      wordLimit: Yup.number()
        .required('Word Limit is required')
        .positive('Must be positive')
        .integer('Must be an integer'),
      noOfCharacters: Yup.number()
        .required('No of Characters is required')
        .positive('Must be positive')
        .integer('Must be an integer'),
      promptLeft: Yup.string().required('Prompt is required'),
      promptRight: Yup.string().required('Prompt is required'),
    }),
    onSubmit: (values) => {
      console.log('Form data:', values);
    },
  });

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover p-4 md:p-10"
      style={{ backgroundImage: `url(${aistoryImg})`, height: '100vh', overflow: 'hidden' }} // Covering the full viewport
    >
      <div className="w-full max-w-screen-lg ">
        <h2 className="mainHeading text-6xl font-bold mb-[50px] text-center">AI Story Generator</h2>

        <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[140px] mb-20 w-full space-y-0"> {/* Increased gap here */}

          {/* Left column */}
          <div className="space-y-6 md:ml-[50px]"> {/* Reduced spacing */}
            <div>
              <input
                className="w-full md:w-[450px] subHeading border-[1px] border-gray-700 p-2 rounded shadow-md placeholder-black bg-white/30 backdrop-blur-md "
                type="text"
                name="title"
                placeholder="Title:"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                style={{ 
                  boxShadow: '0 1px 3px rgba(128, 0, 128, 0.8)',  // Purple shadow only on the bottom
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderBottom: '1px solid rgba(128, 0, 128, 0.8)',  // Purple border at the bottom
                }}
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="text-red-500">{formik.errors.title}</div>
              ) : null}
            </div>

            <div>
              <input
                className="w-full md:w-[450px] subHeading border-[1px] border-gray-700 p-2 rounded shadow-md placeholder-black bg-white/30 backdrop-blur-md"
                type="text"
                name="category"
                placeholder="Category:"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
                style={{ 
                  boxShadow: '0 1px 3px rgba(128, 0, 128, 0.8)',  // Purple shadow only on the bottom
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderBottom: '1px solid rgba(128, 0, 128, 0.8)',  // Purple border at the bottom
                }}
              />
              {formik.touched.category && formik.errors.category ? (
                <div className="text-red-500">{formik.errors.category}</div>
              ) : null}
            </div>

            <div>
              <input
                className="w-full md:w-[450px] subHeading border-[1px] border-gray-700 p-2 rounded shadow-md placeholder-black bg-white/30 backdrop-blur-md"
                type="text"
                name="genre"
                placeholder="Genre:"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.genre}
                style={{ 
                  boxShadow: '0 1px 3px rgba(128, 0, 128, 0.8)',  // Purple shadow only on the bottom
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderBottom: '1px solid rgba(128, 0, 128, 0.8)',  // Purple border at the bottom
                }}
              />
              {formik.touched.genre && formik.errors.genre ? (
                <div className="text-red-500">{formik.errors.genre}</div>
              ) : null}
            </div>

            <div>
              <input
                className="w-full md:w-[450px] subHeading border-[1px] border-gray-700 p-2 rounded shadow-md placeholder-black bg-white/30 backdrop-blur-md"
                type="number"
                name="wordLimit"
                placeholder="Word Limit:"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.wordLimit}
                style={{ 
                  boxShadow: '0 1px 3px rgba(128, 0, 128, 0.8)',  // Purple shadow only on the bottom
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderBottom: '1px solid rgba(128, 0, 128, 0.8)',  // Purple border at the bottom
                }}
              />
              {formik.touched.wordLimit && formik.errors.wordLimit ? (
                <div className="text-red-500">{formik.errors.wordLimit}</div>
              ) : null}
            </div>

            <div>
              <textarea
                className="w-full md:w-[450px] subHeading h-[150px] border-[1px] border-gray-700 p-2 rounded shadow-md placeholder-black bg-white/25 backdrop-blur-md"
                name="promptLeft"
                placeholder="Prompt:"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.promptLeft}
                style={{ 
                  boxShadow: '0 1px 3px rgba(128, 0, 128, 0.8)',  // Purple shadow only on the bottom
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderBottom: '1px solid rgba(128, 0, 128, 0.8)',  // Purple border at the bottom
                }}
              />
              {formik.touched.promptLeft && formik.errors.promptLeft ? (
                <div className="text-red-500">{formik.errors.promptLeft}</div>
              ) : null}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6"> {/* Reduced spacing */}
            <div>
              <input
                className="w-full md:w-[450px] subHeading border-[1px] border-gray-700 p-2 rounded shadow-md placeholder-black bg-white/30 backdrop-blur-md"
                type="number"
                name="noOfCharacters"
                placeholder="No. Of Characters:"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.noOfCharacters}
                style={{ 
                  boxShadow: '0 1px 3px rgba(128, 0, 128, 0.8)',  // Purple shadow only on the bottom
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderBottom: '1px solid rgba(128, 0, 128, 0.8)',  // Purple border at the bottom
                }}
              />
              {formik.touched.noOfCharacters && formik.errors.noOfCharacters ? (
                <div className="text-red-500">{formik.errors.noOfCharacters}</div>
              ) : null}
            </div>

            <div>
              <textarea
                className="w-full md:w-[450px] subHeading h-[295px] border-[1px] border-gray-700 p-2 rounded shadow-md placeholder-black bg-white/30 backdrop-blur-md"
                name="promptRight"
                placeholder="Prompt:"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.promptRight}
                style={{ 
                  boxShadow: '0 1px 3px rgba(128, 0, 128, 0.8)',  // Purple shadow only on the bottom
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderBottom: '1px solid rgba(128, 0, 128, 0.8)',  // Purple border at the bottom
                }}
              />
              {formik.touched.promptRight && formik.errors.promptRight ? (
                <div className="text-red-500">{formik.errors.promptRight}</div>
              ) : null}
            </div>

            <div className="flex justify-center md:justify-end">
              <button
                type="submit"
                className="text-black subHeading px-4 py-2 w-full md:w-[40%] rounded-full border-[1px] border-gray-700 hover:bg-gray-200 bg-white/30 backdrop-blur-md shadow-md "
                style={{ width: '40%',
                  boxShadow: '0 1px 3px rgba(128, 0, 128, 0.8)',  // Purple shadow only on the bottom
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderBottom: '1px solid rgba(128, 0, 128, 0.8)',  // Purple border at the bottom
                }}
              >
                Generate
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AIStory;
