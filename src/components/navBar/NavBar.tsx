import style from '@styles/NavBar.module.css';
import { ChangeEvent, useState } from 'react';
import { Outlet } from "react-router-dom";
import { Input, LinkItem } from "..";

import BookLogo from '@images/BookLogo.svg';
import VideoLogo from '@images/VideoLogo.svg';
import ListItem from './ListItem';

const linkItems = [
  {
    url:'books',
    text:'Books',
    icon: BookLogo,
    id: 'bookLogo'
  },
  {
    url:'movies',
    text:'Movies',
    icon: VideoLogo,
    id: 'videoLogo'
  }
]

export default function NavBar(){

  const [inputValue, setInputValue] = useState<string>('');  
  
  function onChange(e:ChangeEvent<HTMLInputElement>){
    setInputValue(e.target.value);
  }

  return(
    <div className={`componentContainer NavBarComponent`}>
      <nav
        className={`${style.navBar}`}
      >
        <ul className={`${style.listItems}`}>

          {
            linkItems.map(({url, text, icon, id})=>(
              <ListItem key={id} CSSReference={style} icon={icon} iconId={id} to={url} classNameList={['linkItem']}>
                {text}
              </ListItem>
            ))
          }

          <li className={`${style.liItem} ${style.inputItem}`}>
            <Input CSSReference={style} classNameList={['input']} handleChange={onChange} state={inputValue} />
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
}