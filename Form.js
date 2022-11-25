import React, {useState} from 'react'
import Details from './details';
import Report from './report';
import Result from './result';
import Symptoms from './symptoms';

function Form(){
    const [page,setPage] = useState(0);

    const formTitles = ["Details","Symptoms","Add Report","Result"];

    const [formData, setFormData] = useState({
        age:0,
        sex:"",
        symptoms:""
    })

    const PageDisplay = () =>{
        if(page === 0 ){
            return <Details formData={formData} setFormData={setFormData}/>;
        }else if(page === 1){
            return <Symptoms formData={formData} setFormData={setFormData}/>
        }else if(page === 2){
            return <Report />;
        }else{
            return <Result />;
        }
    }
    return( 
        <div className='form'>
            <div className='progressbar'>
                <div
                    style={{width: page === 0?"25%": page === 1 ? "50%" : page === 2 ? "75%" : "100%"}}>
                </div>
            </div>
            <div className='form-container'>
                <div className='header'>
                    <h1>{formTitles[page]}</h1>
                </div>
                <div className='body'>
                    {PageDisplay()}
                </div>
                <div className='footer'>
                    <button 
                        disabled={page== 0}
                        onClick={() => {
                        setPage((currPage) => currPage-1);
                    }}>Prev</button>
                    <button
                    disabled={page== formTitles.length-1} 
                    onClick={() => {
                        setPage((currPage) => currPage+1);
                    }}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Form