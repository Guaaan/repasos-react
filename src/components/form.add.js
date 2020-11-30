const FormAdd = props => {
    return (
        <form onSubmit={props.submitGalleryForm}>

            <div className="card my-5" style={{
                margin: '0 auto',
                width: '600px'
            }}>
                <div className="card-header">
                    <h4 className="card-title">Add Images</h4>
                </div>
                <div className="card-body">
                    <div className="form-row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="url">Url</label>
                                <input
                                    type="text"
                                    name="url"
                                    id="url"
                                    className="form-control"
                                    onChange={props.inputGalleryForm}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="className">Class Name</label>
                                <input
                                    type="text"
                                    name="className"
                                    id="className"
                                    className="form-control"
                                    onChange={props.inputGalleryForm}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="alt">Alt</label>
                                <input
                                    type="text"
                                    name="alt"
                                    id="alt"
                                    className="form-control"
                                    onChange={props.inputGalleryForm}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="active">Active</label>
                                <select className="form-control" defaultValue="false" name="active" id="active" onChange={props.inputGalleryForm}>
                                    <option value="true">SI</option>
                                    <option value="false">NO</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-end">
                    <button className="btn btn-primary">Add</button>
                </div>
            </div>

        </form>
    )
}

export default FormAdd;