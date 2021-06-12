import React, { useEffect } from 'react';
import { CONFIG } from '../../../config';
import { SkillItem, Title } from '../../atom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const Skill = ({klikTitle, klikSkill}) => {
    const stateGlobal = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`${CONFIG.BASE_URL_API + CONFIG.VERSION_API}/skill/web`)
        .then(result => {
            const responseAPI = result.data;
            dispatch({type: 'SET_DATA_SKILL', payload: responseAPI.data});
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div className="skill" id="skill">
            <div className="con_skill">
                <Title nama="My Skills" target="skill" onklik={klikTitle} />
                <div className="skill_layout">
                    <div className="skill_tab">
                        <div className="skill_tab_item active" category="web" onClick={klikSkill}>Web</div>
                        <div className="skill_tab_item" category="mobile" onClick={klikSkill}>Mobile</div>
                        <div className="skill_tab_item" category="desktop" onClick={klikSkill}>Desktop</div>
                        <div className="skill_tab_item" category="database" onClick={klikSkill}>Database</div>
                        <div className="skill_tab_item" category="design" onClick={klikSkill}>Design</div>
                        <div className="skill_tab_item" category="other" onClick={klikSkill}>Other</div>
                    </div>
                    <div className="skill_data" id="skill_data">
                        {stateGlobal.dataSkill.map(skill => {
                            return <SkillItem key={skill._id} src_image={`${CONFIG.BASE_URL_API + skill.logo}`} alt_image={skill.title} title={skill.title} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;