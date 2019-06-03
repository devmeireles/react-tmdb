import React from 'react';
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

import { IoMdMenu } from 'react-icons/io';


class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      fixed: false,
      isOpen: false,
      language: 'en-US',
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  changeLanguage(language){
    localStorage.setItem('language', language);

    window.location.reload();
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if(window.scrollY > 200)  {
        this.setState({
          fixed: true
        });
      }else{
        this.setState({
          fixed: false
        });
      }
    
    });
  }

  render() {
    return (
      <div>
      <Navbar color="inverse" inverse toggleable expand="md" className={this.state.fixed ? 'fixed-menu': 'fixed-top'}>
        <NavbarToggler right onClick={this.toggle}>
          <IoMdMenu color="#FFF" size={30} className="pb-0 pb-md-2" />
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/react-tmdb/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Movies
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Trending
                </DropdownItem>
                <DropdownItem>
                  Upcoming
                </DropdownItem>
                <DropdownItem>
                  Top Rated
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                TV Shows
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Trending
                </DropdownItem>
                <DropdownItem>
                  Upcoming
                </DropdownItem>
                <DropdownItem>
                  Top Rated
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink href="#">Peoples</NavLink>
            </NavItem>
          </Nav>


          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Language
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() => { this.changeLanguage('en-US'); }}>
                    English
                  </DropdownItem>
                  <DropdownItem onClick={() => { this.changeLanguage('es-ES'); }}>
                    Spanish                    
                  </DropdownItem>
                  <DropdownItem onClick={() => { this.changeLanguage('pt-BR'); }}>
                    Portuguese
                  </DropdownItem>

                  <DropdownItem onClick={() => { this.changeLanguage('zh-CN'); }}>
                    Chinese
                  </DropdownItem>

                  <DropdownItem onClick={() => { this.changeLanguage('ar-SA'); }}>
                    Arabic
                  </DropdownItem>

                  <DropdownItem onClick={() => { this.changeLanguage('ru-RU'); }}>
                    Russian
                  </DropdownItem>

                  <DropdownItem onClick={() => { this.changeLanguage('ja-JA'); }}>
                    Japanese
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
  }
}

export default Navigation;