import React from 'react';
import {CategoryContainer} from './headstyle';
import {Get_SUB_CATEGORY} from 'graphql/query/category.query';
import {useQuery} from '@apollo/react-hooks';
import {Right} from 'assets/icons/Right';

const CategoryItem = ({categoryitem = {hasChildren:false,id:"",name:""}}) => {
    let subcategory = [];
    
    if(categoryitem.hasChildren)
    {
        let {data,error} = useQuery(Get_SUB_CATEGORY,{variables:{parent:categoryitem.id}});

        console.log('subcategory',error);
        if(data && !error)
        {
            subcategory = data.productCategories;
        }
    }

    console.log('subcategory',subcategory);

    return (
    <li>
        <span>{categoryitem.name}</span>
        {
            subcategory.length > 0 && (
                <span className="right"><Right/></span>
            )
        }
        {
            subcategory.length > 0 && (
                <ul className="sub">
                    {
                        subcategory.map(item=>{
                            return (
                                <CategoryItem categoryitem={item}></CategoryItem>
                            )
                        })
                    }
                </ul>
            )
        }
        
    </li>
    )
    
}

export const Category = ({category = []}) => {
    console.log(category);
    return (
        <CategoryContainer>
            <ul className="category">
                {
                    category.map(item=>{
                        return (
                        <CategoryItem categoryitem={item}></CategoryItem>
                        )
                    })
                }
            </ul>
        </CategoryContainer>
    )
}

export default Category;