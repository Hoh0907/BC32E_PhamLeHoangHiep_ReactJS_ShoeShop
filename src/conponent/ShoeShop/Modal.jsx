import React, { Component } from 'react'
export default class Modal extends Component {
    state = {
        show: this.props.isShow
    }
    render() {
        const { content } = this.props;
        return (
        <div className="modal fade show" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Details</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row main-content" style={{
                            justifyContent: 'space-evenly'
                        }}>
                            <div className='col-4 d-flex align-items-center justify-content-center' style={{ backgroundColor: '#8edbdb' }}>
                                <img src={content.image} alt='...' style={{ width: '200px',position:'relative' }} className='rounded' />
                            </div>
                            <div className="col-7 content-text p-4 px-5 align-item-stretch rounded" style={{ backgroundColor: '#afa6b9' }}>
                                <div className="text-center">
                                    <h3 className='mb-3 line text-uppercase'>{content.name}</h3>
                                    <p style={{fontSize:'25px', color:'green'}}>{content.price}$</p>
                                    <p>{content.description}</p>
                                    <p>{content.shortDescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-info" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
