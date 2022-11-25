import React from 'react';

function Symptoms({formData,setFormData}){
    return(
        <div className='sign-up-container'>
            <input type="text" placeholder='Enter Your Symptoms' value={formData.symptoms} onChange={(event)=>setFormData({...formData, symptoms:event.target.value})}/>
        </div>
    )
}

export default Symptoms