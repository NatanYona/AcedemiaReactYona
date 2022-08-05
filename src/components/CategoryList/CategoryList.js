const CategoryList = ({ categoryData }) => {
    return (
        <>
            {categoryData.map( (product) => {    
                return <categoryproduct key={product.id} data={product}/>
            } )}
        </>)
}

export default CategoryList