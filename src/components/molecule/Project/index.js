import React, { useEffect } from 'react';
import { CONFIG } from '../../../config';
import { Title, ProjectItem } from '../../atom';
import { useSelector, useDispatch } from 'react-redux';
import LazyLoad from 'react-lazyload';
import axios from 'axios';

const Project = ({klikTitle, klikProject}) => {
    const stateGlobal = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`${CONFIG.BASE_URL_API + CONFIG.VERSION_API}/project`)
        .then(result => {
            const responseAPI = result.data;
            dispatch({type: 'SET_DATA_PROJECT', payload: responseAPI.data});
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div className="project" id="project">
            <div className="con_project">
                <Title nama="Projects" target="project" onklik={klikTitle} />
                <div className="project_layout">
                    <div className="project_tab">
                        <div className="project_tab_item active" category="all" onClick={klikProject}>All</div>
                        <div className="project_tab_item" category="web" onClick={klikProject}>Web</div>
                        <div className="project_tab_item" category="mobile" onClick={klikProject}>Mobile</div>
                        <div className="project_tab_item" category="desktop" onClick={klikProject}>Desktop</div>
                        <div className="project_tab_item" category="design" onClick={klikProject}>Design</div>
                    </div>
                    <div className="project_data">
                        {stateGlobal.dataProject.map(project => {
                            return (
                                <LazyLoad key={project._id} once={true}>
                                    <ProjectItem once={true} src_image={`${CONFIG.BASE_URL_API + project.mockup}`} alt_image={project.title} title={project.title} subtitle={project.subtitle} links={project.links} />
                                </LazyLoad>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;