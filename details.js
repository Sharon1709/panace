import React from 'react';

function Details({formData, setFormData}){
    return(
        <div className='sign-up-container'>
            <input type="number" placeholder='Age' value={formData.age} onChange={(event)=>setFormData({...formData, age:event.target.value})}/>
            <input type="text" placeholder='Sex' value={formData.sex} onChange={(event)=>setFormData({...formData, sex:event.target.value})}/>
        </div>
    )
}

export default Details