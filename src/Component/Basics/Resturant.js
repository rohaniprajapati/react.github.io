import React , { useState } from 'react';
import "./style.css";
import Menu  from './MenuAPI';
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqueList = [
...new Set(
  Menu.map((curElem) => {
    return curElem.category;
  })
 ),
];

console.log(uniqueList);


const Resturant = () => {

  const [menuData, setMenuData]= useState(Menu);
  const [menuList, setMenuList]= useState(uniqueList);
  

  const filterItem = (category) => {
    const UpdatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
     setMenuData(UpdatedList);
  };
  
  return (

    <>
      <Navbar filterItem={filterItem}  />
      <MenuCard menuData={menuData} />
    </> 
  
  );
};

export default Resturant;
