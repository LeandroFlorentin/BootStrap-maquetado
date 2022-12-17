import React from 'react';
import { connect } from 'react-redux'
import { traerPersonajes } from '../../redux/actions';

class Cards extends React.Component {
    componentDidMount() {
        this.props.traerPersonajes()
    }
    render() {
        return (
            <div className='container-fluid' style={{ marginTop: '80px' }}>
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    {
                        this.props.personaje?.slice(150, 159).map(perso => {
                            return (
                                <div key={perso.id} className="col" style={{ cursor: 'pointer' }}>
                                    <div className="card">
                                        <img
                                            src={perso.imagen}
                                            className="card-img-top"
                                            alt={perso.name}
                                        />
                                        <div className="card-body" style={{ backgroundColor: '#333' }}>
                                            <h5 className="card-title text-info" style={{ overflow: 'hidden' }}>{perso.name}</h5>
                                            <p className="card-text text-info">{perso.blurb}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <nav aria-label="Page navigation example" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {
                            new Array(Math.floor(this.props?.personaje.length / 10)).fill(0).map((perso, ubi) => {
                                return (
                                    <li key={ubi} className="page-item"><a className="page-link" href="#">{ubi + 1}</a></li>
                                )
                            })
                        }
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        personaje: state.personaje
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        traerPersonajes: () => dispatch(traerPersonajes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);