import React, { Component } from 'react';

class Header extends Component {

  render(){  
      return (
        
        <div className="header">

            <div className="container">

                <nav className="navbar navbar-inverse" role="navigation">

                    <div className="navbar-header">

                        <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                        <a href="#" className="navbar-brand scroll-top"><img src="images/iamart_color-logo.jpg" alt="iAMart logo" height="75" width="170"/></a>

                    </div>


                    <div id="main-nav" className="collapse navbar-collapse">

                        <ul className="nav navbar-nav">
                            <li><a href="#" className="scroll-link" data-id="about"><span className="nav-text">who we are</span></a></li>
                            <li><a href="#" className="scroll-link" data-id="locations"><span className="nav-text">store locations</span></a></li>
                            <li><a href="#" className="scroll-link" data-id="join-us"><span className="nav-text">join us</span></a></li>
                            <li><a href="#" className="scroll-link" data-id="vendors"><span className="nav-text">vendors</span></a></li>
                        </ul>

                    </div>


                </nav>


            </div>


        </div>


      );
    }
  }

export default Header;