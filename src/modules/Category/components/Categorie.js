import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryRequest } from '../state/CategoryAction';

const CategoryComponent = () => {
  const dispatch = useDispatch();
    const categoryData = useSelector(state => state.Category.data);
    console.log(categoryData)

  return (
    <div>
      <button onClick={()=>dispatch(getCategoryRequest())}>Fetch Category Data</button>
    </div>
  );
};

export default CategoryComponent;
