import React, { Component } from 'react';
import { connect } from 'react-redux'
import Carousel from '../../2.components/carousel'



// GIT PULL ORIGIN MASTER
class Home extends Component {
    state = {}




    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 mt-6">
                        <div >
                            <Carousel />
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        username: state.user.username

    }
}

export default connect(mapStateToProps)(Home)
