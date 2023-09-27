import React from 'react'
import FormDialog from '../components/FormDialog'
import Table from '../components/Table'
import "../style/category.css";

const CategoryUi = () => {
  return (
    <div className="category-container">
        <FormDialog/>
        <Table/>
    </div>
  )
}

export default CategoryUi