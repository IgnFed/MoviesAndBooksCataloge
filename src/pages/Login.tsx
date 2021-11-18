import style from '@styles/Login.module.css';
import {Form} from '@components/login'; 
import { Input, Button, Label, ProgressiveImage} from '@components/index';

//import { ChangeEvent, FocusEvent, MouseEvent, useState } from 'react';
import { ChangeEvent, FocusEvent, useState } from 'react';
import { IStyle } from '@/utils/interfaces';

type TUserData<TS = IStyle> = {
  value: string,
  styleObj?:TS
}

export default function Login():JSX.Element{
  
  const [username, setUsername] = useState<TUserData>({value:'', styleObj:{}});
  const [userpassword, setUserpassword] = useState<TUserData>({value:'', styleObj:{}});  

  function handleOnFocus(e:FocusEvent<HTMLInputElement>){
    if(username.value.length === 0 || userpassword.value.length === 0){
      setUsername((prev:TUserData) =>(
        {
         ...prev, styleObj:{borderColor:'red'} 
        }
      ))
    }
  }

  return(
    <div className={`${style.body} bg-dark`} >
      <div className={`${style.grid} bg-gray`}>

        <div className={`${style.row}`}>
          <span className={style.decorator}></span>
          <ProgressiveImage src={'/src/public/couple.jpg'} placeholder='/src/public/couple_resized.jpg'/>
        </div>

        <div className={`${style.row}`}>
        <Form CSSReference={style} classNameList={["FORM"]} id={"form"}>
          <div className={`${style.row}`}>
            <Input
              CSSReference={style}
              globalClassName={'bg-dark'}
              stylesObject={username.styleObj}
              classNameList={['input']}
              inputType={"text"}
              inputValue={undefined}
              inputName={"username"}
              id={"username"}
              onChange={undefined}
              onFocus={handleOnFocus}
            >
              <Label labelFor={"username"}>Username:</Label>

            </Input>

            <Input

              CSSReference={style}
              globalClassName={'bg-dark'}
              stylesObject={undefined}
              classNameList={['input']}
              inputType={"password"}
              inputValue={undefined}
              inputName={"userpassword"}
              id={"userpassword"}
              onChange={undefined}
              onFocus={handleOnFocus}
            >

              <Label labelFor={"userpassword"}>Password:</Label>

            </Input>

          </div>

          <div className={`${style.row}`}>
            <Button CSSReference={style} globalClassName={"bg-dark"} id={"loginBtn"} onClick={undefined}>
              Hola aca
            </Button>
          </div>
          </Form>
        </div>

      </div>  
    </div>
    )
  }