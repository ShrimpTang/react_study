import React from 'react';
const SelecetInput =({name,label,onChange,defaultOption,value,error,options})=>{
    return (
        <div class="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="form-control"
                    >
                    <option value="">{defaultOption}</option>
                    {
                        options.map(option=>{
                            return <option key={option.value} value={option.value}>{option.text}</option>
                        })
                    }
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    )
}
export default SelecetInput