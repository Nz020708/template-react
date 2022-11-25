import { title } from 'process';
import './HeaderText.scss'

export interface IHeaderText{
    title:string;
}
export const HeaderText=(props:IHeaderText)=>{
const {title}=props;

    return (
        <h5>{title}</h5>
      
    );
};