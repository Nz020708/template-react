import './Summary.scss'

export interface ISummary{
    text:string;
}
export const Summary=(props:ISummary)=>{
const {text}=props;

    return (
        <p>{text}</p>
      
    );
};