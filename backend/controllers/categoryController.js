import Category from "../models/category.js";
const createCategory = async(req,res)=>{
  try {
    const{name,description}=req.body;
    //create new category
    const category= new category({name,description});
    await category.save();
    return res.status(201).json({
      message:'category created seccussfully',
      category,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
//get all category
const getCategories=async(req,res)=>{
  try {
    const categories = await Category.find();
    return res.status(200).json({
      categories,
    });
  } catch (error) {
    return res.status(400).json({
      error:error.message,
    });
  }
};
//get category by id
const getCategoryById= async(req,res)=>{
  try {
    const category= await Category.findById(req.params.id);
  if(!category){
    return res.status(404).json({
      message:'category not found',
    });
  }
  return res.status(200).json({
    category,
  });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
//update category
const updateCategory = async (req,res)=>{
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true,runValidators:true}
    );
    if(!category){
      return res.status(404).json({
        message:'category not found!',
      });
    }
    return res.status(200).json({
      message: 'Category updated successfully!',
      category,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
//delete category
const deleteCategory = async(req,res)=>{
  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({
        message: 'Category not found!',
      });
    }

    return res.status(200).json({
      message: 'Category deleted successfully!',
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
}
export { createCategory, getCategories, getCategoryById, updateCategory, deleteCategory };