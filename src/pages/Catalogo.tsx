import style from '@styles/Catalogo.module.css';


export default function Catalogo():JSX.Element{

  return(
    <div className={`${style.pageContainer} bg-dark light`}>
      <div className={`${style.grid}`}>
        <div className={`${style.row}`}>
        </div>
        <div className={`${style.row} ${style.searcher}`}>asd</div>
        <div className={`${style.row} ${style.cards}`}>asd</div>
      </div>
    </div>
  );
}