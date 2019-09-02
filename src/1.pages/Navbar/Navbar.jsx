import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Cookie from 'universal-cookie'
import { resetUser } from "./../../redux/1.actions";

let cookieObj = new Cookie()
class NavbarComp extends Component {
    state = {
        navbarOpen : false
    }

    onBtnLogout = () => {
        cookieObj.remove('userData')
        this.props.resetUser()
    }

    render() {
        return (
            <div>
                <Navbar color="pink" light expand="lg">
                    <Link to="/"><NavbarBrand>Flow Pilates & Barre</NavbarBrand></Link>
                    <NavbarToggler onClick={() => this.setState({navbarOpen : !this.state.navbarOpen})} />
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            {
                                this.props.userObj.username !== '' && this.props.userObj.role !== ''
                                ?
                                <>
                                    <NavItem>
                                        <NavLink>{this.props.userObj.showId ? this.props.userObj.id : null}</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>Hi, {this.props.userObj.username}!</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>{this.props.userObj.role}</NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Options
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                      
                                            <Link to="/classes" style={{textDecoration:'none', color:'inherit'}}>
                                                <DropdownItem>
                                                    Classes
                                                </DropdownItem>
                                            </Link>
                                            <Link to="/Schedules" style={{textDecoration:'none', color:'inherit'}}>
                                                <DropdownItem>
                                                    Schedules
                                                </DropdownItem>
                                            </Link>
                                            <Link to="/instructors" style={{textDecoration:'none', color:'inherit'}}>
                                                <DropdownItem>
                                                    Instructors
                                                </DropdownItem>
                                            </Link>
                                            <DropdownItem divider />
                                            <DropdownItem onClick={this.onBtnLogout}>
                                                Logout
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </>
                                :
                                <>
                                    <NavItem style={{borderRight : '1px solid lightgrey'}}>
                                        <Link to="/auth"><NavLink>Login</NavLink></Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/auth"><NavLink>Register</NavLink></Link>
                                    </NavItem>
                                </>
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userObj : state.user
    }
}

export default connect(mapStateToProps, {resetUser})(NavbarComp)