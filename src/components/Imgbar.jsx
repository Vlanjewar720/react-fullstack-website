import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Imgbar() {
  return (
    <ImageList xs={{width: 300,height: 250}} sm={12} cols={4} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=160&h=150&fit=crop&auto=format`}
            srcSet={`${item.img}?w=160&h=150&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    
    img: 'https://www.softwaretestinghelp.com/wp-content/qa/uploads/2019/02/PROGRAMMING-LANGUAGES.png',
    title: 'tech chart',
  },
  {
    
    img: 'https://m.media-amazon.com/images/I/71-VavmRzHL._SX355_.jpg',
    title: 'Burger',
  },
  {
    
    img: 'https://www.softwaretestinghelp.com/wp-content/qa/uploads/2019/02/PROGRAMMING-LANGUAGES-and-their-features.png',
    title: 'Camera',
},
{
   
    img: 'https://www.springboard.com/blog/wp-content/uploads/2021/08/computer-science-vs.-software-engineering.jpg',
    title: 'Coffee',
},
{
    
    img: 'https://artoftesting.com/wp-content/uploads/2020/01/software-engineering-featured.jpg',
    title: 'Hats',
},
{
   
    img: 'https://www.sitesbay.com/software-engineering/images/software-engineering-tutorial.png',
    title: 'Honey',
},
{
    
    img: 'https://iseesedu.in/wp-content/uploads/2021/03/software-3.png',
    title: 'Basketball',
},
{

    img: 'https://t3.ftcdn.net/jpg/03/50/16/66/360_F_350166601_dNZqQqY7TJDITZal7aFXD7LzvAEa2VXW.jpg',
    title: 'Fern',
},
{

    img: 'https://codersera.com/blog/wp-content/uploads/2021/08/Software-Development.png',
    title: 'Mushrooms',
},
{
  
    img: 'https://www.cud.ac.ae/sites/default/files/programs/2020/program-bacheclor-of-science-in-software-design-1920x1080.jpg',
    title: 'Tomato basil',
},
{
  
    img: 'https://onlinecs.baylor.edu/sites/default/files/field/image/Future%20of%20Software_Engineering%20%281%29.jpg',
    title: 'Sea star',
},
{
  
    img: 'https://www.spheregen.com/wp-content/uploads/2020/06/112-1127583_software-development-png-transparent-png.png',
    title: 'Bike',
},
];
