import React from 'react';
import { connect } from 'react-redux';
import { CONFIG } from '../../config';
import { About, Contact, Drawer, Hero, Navbar, Project, Service, Skill, Footer } from '../../components/molecule';
import { Shadow } from '../../components/atom';
import { pLogo1, pLogo2 } from '../../assets';
import axios from 'axios';
import './portfolio.scss';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isscroll: false,
            lastScrollTop: 0
        };

        this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    }

    windowScroll() {
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            const plogo = document.querySelector('#plogo');
            const hamburger = document.getElementById('hamburger');
            let navbar = nav.offsetTop;
            if (window.pageYOffset > navbar) {
                this.state.isscroll = true;
                nav.classList.add('on');
                plogo.setAttribute('src', pLogo2);
            } else {
                this.state.isscroll = false;
                if (hamburger.classList.contains('on')) {
                    nav.classList.add('on');
                    plogo.setAttribute('src', pLogo2);
                } else {
                    nav.classList.remove('on');
                    plogo.setAttribute('src', pLogo1);
                }
            }

            if (window.pageYOffset > (navbar + 50)) {
                if (window.pageYOffset > (this.state.lastScrollTop)) {
                    if ( ! hamburger.classList.contains('on')) {
                        nav.classList.add('updown');
                    }
                } else if (window.pageYOffset < (this.state.lastScrollTop)) {
                    nav.classList.remove('updown');
                }
            } else {
                nav.classList.remove('updown');
            }

            this.state.lastScrollTop = window.pageYOffset <= 0 ? 0 : window.pageYOffset;

            const aboutMenu = document.getElementsByClassName('menuAbout');
            const aboutTop = document.getElementById('about').offsetTop - 300;
            const serviceMenu = document.getElementsByClassName('menuService');
            const serviceTop = document.getElementById('service').offsetTop - 300;
            const skillMenu = document.getElementsByClassName('menuSkill');
            const skillTop = document.getElementById('skill').offsetTop - 300;
            const projectMenu = document.getElementsByClassName('menuProject');
            const projectTop = document.getElementById('project').offsetTop - 300;
            const contactMenu = document.getElementsByClassName('menuContact');
            const contactTop = document.getElementById('contact').offsetTop - 300;
            const footerTop = document.getElementById('footer').offsetTop - 300;
            if (window.pageYOffset >= aboutTop && window.pageYOffset < serviceTop) {
                this.setActiveMenu(aboutMenu);
            } else if (window.pageYOffset >= serviceTop && window.pageYOffset < skillTop) {
                this.setActiveMenu(serviceMenu);
            } else if (window.pageYOffset >= skillTop && window.pageYOffset < projectTop) {
                this.setActiveMenu(skillMenu);
            } else if (window.pageYOffset >= projectTop && window.pageYOffset < contactTop) {
                this.setActiveMenu(projectMenu);
            } else if (window.pageYOffset >= contactTop && window.pageYOffset < footerTop) {
                this.setActiveMenu(contactMenu);
            } else {
                this.setActiveMenu(nav);
            }

            const aboutItem = document.querySelectorAll('.about_item');
            if (window.pageYOffset > aboutTop - 250) {
                aboutItem.forEach((el, i) => {
                    setTimeout(() => {
                        el.classList.add('muncul');
                    }, 300 * (i + 1));
                });
            }

            const serviceItem = document.querySelectorAll('.service_card');
            if (window.pageYOffset > serviceTop - 250) {
                serviceItem.forEach((el, i) => {
                    setTimeout(() => {
                        el.classList.add('muncul');
                    }, 300 * (i + 1));
                });
            }

            landingElementSkill();
            landingElementProject();
        });
    }

    setActiveMenu(menu) {
        const amenu = document.querySelectorAll('.amenu');
        for (let i = 0; i < amenu.length; i++) {
            amenu[i].classList.remove('active');
        }
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.add('active');
        }
    }

    handleMenuClick = (e) => {
        e.preventDefault();
        this.setActiveMenu(e.target);
        const el = e.target.getAttribute('target');
        const nav = document.querySelector('nav');
        const hamburger = document.getElementById('hamburger');
        const drawer = document.getElementById('drawer');
        const shadow = document.getElementById('shadow');
        let target = document.getElementById(el);
        let targetTop = target.offsetTop;
        targetTop = target.offsetTop;
        window.scrollTo({top: targetTop, behavior: 'smooth'});
        hamburger.classList.remove('on');
        drawer.classList.remove('show');
        shadow.classList.remove('show');
        setTimeout(() => {
            nav.classList.add('updown');
        }, 400);
    }

    handleHamburgerClick = (e) => {
        e.stopPropagation();
        const hamburger = document.getElementById('hamburger');
        const drawer = document.getElementById('drawer');
        const shadow = document.getElementById('shadow');
        const navbar = document.getElementById('navbar');
        const plogo = document.getElementById('plogo');
        hamburger.classList.toggle('on');
        drawer.classList.toggle('show');
        shadow.classList.toggle('show');
        if (hamburger.classList.contains('on')) {
            navbar.classList.add('on');
            plogo.setAttribute('src', pLogo2);
        } else if ( ! this.state.isscroll ) {
            navbar.classList.remove('on');
            plogo.setAttribute('src', pLogo1);
        }
    }

    handleProgrammerClick = () => {
        const foto_programmer = document.querySelector('#foto_programmer');
        const foto_designer = document.querySelector('#foto_designer');
        foto_programmer.style.opacity = 1;
        foto_designer.style.opacity = 0;
    }

    handleDesignerClick = () => {
        const foto_programmer = document.querySelector('#foto_programmer');
        const foto_designer = document.querySelector('#foto_designer');
        foto_programmer.style.opacity = 0;
        foto_designer.style.opacity = 1;
    }

    handleCVClick = () => {
        const a = document.createElement('a');
        a.setAttribute('href', `${CONFIG.BASE_URL_API}files/CV_PutraIbnuChajar.pdf`);
        a.click();
    }

    handleHireClick = () => {
        const a = document.createElement('a');
        a.setAttribute('href', `mailto:putra.chajar7@gmail.com`);
        a.click();
    }

    handleScrollTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    componentDidMount() {
        this.windowScroll();
    }
    
    render() {
        return (
            <div>
                <Navbar klikMenu={this.handleMenuClick} klikHamburger={this.handleHamburgerClick} />
                <Shadow klikShadow={this.handleHamburgerClick} scrollShadow={this.handleShadowScroll} />
                <Drawer klikMenu={this.handleMenuClick} />
                <Hero klikProgrammer={this.handleProgrammerClick} klikDesigner={this.handleDesignerClick} hoverProgrammer={this.handleProgrammerClick} hoverDesigner={this.handleDesignerClick} klikCV={this.handleCVClick} />
                <About klikTitle={this.handleMenuClick} />
                <Service klikTitle={this.handleMenuClick} />
                <Skill klikTitle={this.handleMenuClick} klikSkill={this.props.onSkillClick} />
                <Project klikTitle={this.handleMenuClick} klikProject={this.props.onProjectClick} />
                <Contact klikTitle={this.handleMenuClick} klikHire={this.handleHireClick} />
                <Footer onklik={this.handleScrollTop} />
            </div>
        )
    }
}

const landingElementSkill = () => {
    const skillTop = document.getElementById('skill').offsetTop - 70;
    const skillItem = document.querySelectorAll('.skill_item');
    if (window.pageYOffset > skillTop - 250) {
        skillItem.forEach((el, i) => {
            setTimeout(() => {
                el.classList.add('muncul');
            }, 300 * (i + 1));
        });
    }
}

const landingElementProject = () => {
    const projectTop = document.getElementById('project').offsetTop - 70;
    const projectItem = document.querySelectorAll('.project_data_item');
    if (window.pageYOffset > projectTop - 250) {
        projectItem.forEach((el, i) => {
            setTimeout(() => {
                el.classList.add('muncul');
            }, 300 * (i + 1));
        });
    }
}

const mapStatetoProps = state => {
    // console.log('mapStatetoProps', state);
    return {
        dataSkill: state.dataSkill
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        onSkillClick : (e) => {
            const target = e.target;
            const category = target.getAttribute('category');
            const skillCategory = document.querySelectorAll('.skill_tab_item');
            skillCategory.forEach(el => el.classList.remove('active'));
            target.classList.add('active');

            axios.get(`${CONFIG.BASE_URL_API + CONFIG.VERSION_API}/skill/${category}`)
            .then(result => {
                const responseAPI = result.data;
                dispatch({type: 'SET_DATA_SKILL', payload: responseAPI.data});
                landingElementSkill();
            })
            .catch(err => {
                console.log(err);
            });
        },
        onProjectClick : (e) => {
            const target = e.target;
            const category = target.getAttribute('category') === 'all' ? '' : target.getAttribute('category');
            const projectCategory = document.querySelectorAll('.project_tab_item');
            projectCategory.forEach(el => el.classList.remove('active'));
            target.classList.add('active');

            axios.get(`${CONFIG.BASE_URL_API + CONFIG.VERSION_API}/project/${category}`)
            .then(result => {
                const responseAPI = result.data;
                dispatch({type: 'SET_DATA_PROJECT', payload: responseAPI.data});
                landingElementProject();
            })
            .catch(err => {
                console.log(err);
            });
        },
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Portfolio);