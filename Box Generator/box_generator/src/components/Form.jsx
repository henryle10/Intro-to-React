import React from 'react';

const Form = ({ form, handleColorChange, handleSubmit }) => {
    return (
        <form className="col-5 mx-auto" onSubmit={handleSubmit}>
            <div>
                <label>Color:</label><br />
                <input
                    className="form-control"
                    type="text"
                    value={form.color}
                    name="color"
                    onChange={handleColorChange}
                />
            </div>
            <div className="form-group">
                {
                    form.color.length === 0 ?
                        <input type="submit" className="btn btn-success" value="Add" disabled />
                        :
                        <input type="submit" className="btn btn-success" value="Add" />
                }
            </div>

        </form>
    )
}
export default Form;