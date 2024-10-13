import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import '../Styles/CreateStoryForm.css'; // Import your custom CSS

const StoryForm = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      date: '',
      category: '',
      genre: '',
      story: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      author: Yup.string().required('Author is required'),
      date: Yup.date().required('Date is required'),
      category: Yup.string().required('Category is required'),
      genre: Yup.string().required('Genre is required'),
      story: Yup.string().required('Story is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="myBackground">
           <h1 class="font-pphatton text-[50px] font-bold pt-[50px] text-center"> Create Your Own Story</h1>
      <div className="form-container">
        <div className="form-box">
          <form onSubmit={formik.handleSubmit} className="form-grid">
            <div className="form-left">
              <TextField
                fullWidth
                label="Title:"
                id="title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
                className="custom-textfield"
                InputLabelProps={{
                  style: {
                    color: 'black',
                    fontFamily: 'PPHatton',
                    fontWeight: '600',
                    fontSize: '24px',  
                  },
                }}  
                InputProps={{
                  style: {
                    color: 'black',
                    fontFamily: 'PPHatton',
                    fontWeight: 'ultralight', 
                    fontSize: '22px',      
                  },
                }}
              />
              <TextField
                fullWidth
                label="Author:"
                id="author"
                name="author"
                value={formik.values.author}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.author && Boolean(formik.errors.author)}
                helperText={formik.touched.author && formik.errors.author}
                className="custom-textfield"
                InputLabelProps={{
                  style: {
                    color: 'black',
                    fontFamily: 'PPHatton',
                    fontWeight: '600',
                    fontSize: '24px',  
                  },
                }}  
                InputProps={{
                  style: {
                    color: 'black',
                    fontFamily: 'PPHatton',
                    fontWeight: 'ultralight', 
                    fontSize: '22px',      
                  },
                }}
              />
              <TextField
                fullWidth
                label="Date:"
                id="date"
                name="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
                className="custom-textfield"
                InputLabelProps={{
                  style: {
                    color: 'black',
                    fontFamily: 'PPHatton',
                    fontWeight: '600',
                    fontSize: '24px',  
                  },
                }}  
                InputProps={{
                  style: {
                    color: 'black',
                    fontFamily: 'PPHatton',
                    fontWeight: 'ultralight', 
                    fontSize: '22px',      
                  },
                }}
              />
              <TextField
                fullWidth
                label="Category:"
                id="category"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.category && Boolean(formik.errors.category)}
                helperText={formik.touched.category && formik.errors.category}
                className="custom-textfield"
                InputLabelProps={{
                  style: {
                    color: 'black',
                    fontFamily: 'PPHatton',
                    fontWeight: '600',
                    fontSize: '24px',  
                  },
                }}  
                InputProps={{
                  style: {
                    color: 'black',
                    fontFamily: 'PPHatton',
                    fontWeight: 'ultralight', 
                    fontSize: '22px',      
                  },
                }}
              />
              <TextField
                fullWidth
                label="Genre:"
                id="genre"
                name="genre"
                value={formik.values.genre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.genre && Boolean(formik.errors.genre)}
                helperText={formik.touched.genre && formik.errors.genre}
                className="custom-textfield"
                InputLabelProps={{
                  style: {
                    color: 'black',
                    fontFamily: 'PPHatton',
                    fontWeight: '600',
                    fontSize: '24px',  
                  },
                }}  
                InputProps={{
                  style: {
                    color: 'black',
                    fontFamily: 'PPHatton',
                    fontWeight: 'ultralight', 
                    fontSize: '22px',      
                  },

                }}
              />
            </div>

            <div className="form-right">
              <TextField
                fullWidth
                label="Write Story:"
                id="story"
                value={formik.values.story}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.story && Boolean(formik.errors.story)}
                helperText={formik.touched.story && formik.errors.story}
                className="custom-textfield-right"
                multiline
                rows={10} // 
                InputLabelProps={{
                  style: {
                    color: 'black',
                    fontFamily: 'PPHatton',
                    fontWeight: '600',
                    fontSize: '24px',  
                  },
                }}  
                InputProps={{
                  style: {
                    color: 'black',
                    fontFamily: 'PPHatton',
                    fontWeight: 'ultralight', 
                    fontSize: '22px',      
                  },
                }}/>
            </div>
         </form>

         <div className="buttonbox"> 
              <div className="form-buttons">
                <Button 
                  variant="outlined" 
                  type="submit" 
                  className="btn"
                >
                  Publish
                </Button>
                <Button 
                  variant="outlined" 
                  className="btn"
                >
                  Draft As Save
                </Button>
                <Button 
                  variant="outlined"
                  className="btn"
                  onClick={formik.handleReset}
                >
                  Clear
                </Button>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default StoryForm;
