import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { sendFileAndData } from '../state/CategoryAction';

const Categorie = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name_of_tender: '',
    submission_date: '',
    client: '',
    contract_type: '',
    tender_phase: '',
    file: null,
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name_of_tender) {
      errors.name_of_tender = 'Name of Tender is required';
    }

    if (!values.submission_date) {
      errors.submission_date = 'Submission Date is required';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      dispatch(sendFileAndData(values, values.file));
      formik.resetForm(); 
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file.type !== "application/pdf" || file.size > 5000000) {
      alert("Only PDFs under 5MB are allowed.");
      return;
    }
    formik.setFieldValue('file', file);
  };
  

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name_of_tender">Name of Tender:</label>
        <input
          type="text"
          id="name_of_tender"
          name="name_of_tender"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name_of_tender}
        />
        {formik.touched.name_of_tender && formik.errors.name_of_tender ? (
          <div>{formik.errors.name_of_tender}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="submission_date">Submission Date:</label>
        <input
          type="date"
          id="submission_date"
          name="submission_date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.submission_date}
        />
        {formik.touched.submission_date && formik.errors.submission_date ? (
          <div>{formik.errors.submission_date}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="client">Client:</label>
        <input
          type="text"
          id="client"
          name="client"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.client}
        />
        {formik.touched.client && formik.errors.client ? (
          <div>{formik.errors.client}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="contract_type">Contract Type:</label>
        <input
          type="text"
          id="contract_type"
          name="contract_type"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.contract_type}
        />
        {formik.touched.contract_type && formik.errors.contract_type ? (
          <div>{formik.errors.contract_type}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="tender_phase">Tender Phase:</label>
        <input
          type="text"
          id="tender_phase"
          name="tender_phase"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tender_phase}
        />
        {formik.touched.tender_phase && formik.errors.tender_phase ? (
          <div>{formik.errors.tender_phase}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="file">File:</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.file && formik.errors.file ? (
  <div>{formik.errors.file}</div>
) : null}
{formik.values.file && formik.values.file.size > 5000000 ? (
  <div>File size should be under 5MB.</div>
) : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Categorie;
