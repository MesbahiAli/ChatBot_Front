import React from 'react'
import FormDialog from '../components/FormDialog'
import Table from '../../Category/components/Table'
import "../style/category.css";
import Navbar from '../../Home/components/Navbar';

const CategoryUi = () => {
  return (
    <div className="category-container">
        {/* <FormDialog/> */}
        <Navbar />
        <Table/>
    </div>
  )
}

export default CategoryUi