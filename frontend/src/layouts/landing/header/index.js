import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import { Box, Stack, AppBar, Toolbar } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { HEADER, NAVBAR } from '../../../config'
import Logo from '../../../components/Logo'
import Iconify from '../../../components/Iconify'
import AuthButton from './AuthButton'
import { PATH_AUTH } from '../../../routes/paths';

export default function LandingHeader() {
  return (
  
		<div data-collapse="medium" data-animation="over-left" data-duration={400} data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9" data-easing="ease" data-easing2="ease" role="banner" className="header w-nav">
		  <div className="container-default w-container">
			<div className="header-wrapper">
			  <div className="split-content header-right">
				<a href="#" aria-current="page" className="brand w-nav-brand w--current"><img src="https://assets.website-files.com/6189b6da0e23c6551df73ab9/61e82ce88654240b6f3372c5_logo-coin-template.png" alt="Coin X Webflow Template - Logo" className="header-logo" /></a></div>
			  <div className="split-content header-center">
				<nav role="navigation" className="nav-menu w-nav-menu">
				  <ul role="list" className="header-navigation">
					{/* <li className="nav-item-wrapper"><a href="#" aria-current="page" className="text-200 bold nav-link w--current">Home</a></li>
					<li className="nav-item-wrapper"><a href="about.html" className="text-200 bold nav-link">About</a></li>
					<li className="nav-item-wrapper"><a href="tokens.html" className="text-200 bold nav-link">Tokens</a></li>
					<li className="nav-item-wrapper">
					  <div data-hover="true" data-delay={0} data-w-id="5ced82ae-f839-d543-d14d-a5151ef0598c" className="nav-link-dropdown w-dropdown">
						<div className="text-200 bold dropdown w-dropdown-toggle">
						  <div>Pages</div>
						</div>
						<nav className="dropdown-list w-dropdown-list">
						  <div className="dropdown-nav-main-wrapper">
							<div className="dropdown-nav-pages-wrapper">
							  <div className="margin-bottom-default">
								<div className="text-300 bold text-neutral-800">Menu</div>
							  </div>
							  <div className="dropdown-nav-content">
								<ul role="list" className="dropdown-nav">
								  <li className="dropdown-nav-item"><a href="#" aria-current="page" className="text-200 menu-link w--current">Home</a></li>
								  <li className="dropdown-nav-item"><a href="about.html" className="text-200 menu-link">About</a></li>
								  <li className="dropdown-nav-item"><a href="contact.html" className="text-200 menu-link">Contact</a></li>
								  <li className="dropdown-nav-item"><a href="blog.html" className="text-200 menu-link">Blog</a></li>
								  <li className="dropdown-nav-item"><a href="blog/best-platform-to-trade-btc-on-your-phone.html" className="text-200 menu-link">Blog post</a></li>
								  <li className="dropdown-nav-item"><a href="pricing.html" className="text-200 menu-link">Pricing</a></li>
								  <li className="dropdown-nav-item"><a href="product/pro-plan.html" className="text-200 menu-link">Pricing Single</a></li>
								  <li className="dropdown-nav-item"><a href="tokens.html" className="text-200 menu-link">Tokens</a></li>
								  <li className="dropdown-nav-item"><a href="token/bitcoin.html" className="text-200 menu-link">Token Single</a></li>
								</ul>
							  </div>
							</div>
							<div className="dropdown-nav-pages-wrapper last">
							  <div className="margin-bottom-default">
								<div className="text-300 bold text-neutral-800">Utility pages</div>
							  </div>
							  <div className="dropdown-nav-content">
								<ul role="list" className="dropdown-nav">
								  <li className="dropdown-nav-item"><a href="utility-pages/start-here.html" className="text-200 menu-link">Start Here</a></li>
								  <li className="dropdown-nav-item"><a href="utility-pages/style-guide.html" className="text-200 menu-link">Style Guide</a></li>
								  <li className="dropdown-nav-item"><a href="401.html" className="text-200 menu-link">Password Protected</a></li>
								  <li className="dropdown-nav-item"><a href="404.html" className="text-200 menu-link">404 Not Found</a></li>
								  <li className="dropdown-nav-item"><a href="utility-pages/licenses.html" className="text-200 menu-link">Licenses</a></li>
								  <li className="dropdown-nav-item"><a href="utility-pages/changelog.html" className="text-200 menu-link">Changelog</a></li>
								  <li className="dropdown-nav-item"><a href="https://brixtemplates.com/more-webflow-templates" className="text-200 menu-link special">Browse More Templates</a></li>
								</ul>
							  </div>
							</div>
						  </div>
						</nav>
					  </div>
					</li> */}
					<li className="nav-item-wrapper nav-button-mobile"><a href={PATH_AUTH.register} className="button-primary header-button-mobile w-button">SignUp</a></li>
				  </ul>
				</nav>
				
			  </div>
			  <div className="split-content header-left"><a href={PATH_AUTH.register} className="button-primary header-button w-button">Sign Up</a>
				<div className="menu-button w-nav-button">
				  <div className="header-menu-button-icon-wrapper">
					<div className="icon-wrapper">
					  <div className="header-menu-button-icon-top" />
					  <div className="header-menu-button-icon-medium" />
					  <div className="header-menu-button-icon-bottom" />
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  );
	}
  

