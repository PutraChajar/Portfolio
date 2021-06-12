import React, { useEffect, useState } from 'react';
import { CONFIG } from '../../../config';
import { Title, ServiceItem } from '../../atom';
import LazyLoad from 'react-lazyload';
import axios from 'axios';

const Service = ({klikTitle}) => {
    const [dataService, setDataService] = useState([]);

    useEffect(() => {
        axios.get(`${CONFIG.BASE_URL_API + CONFIG.VERSION_API}/service`)
        .then(result => {
            const responseAPI = result.data;
            setDataService(responseAPI.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div className="service" id="service">
            <div className="con_service">
                <Title nama="Services" target="service" onklik={klikTitle} />
                <div className="service_list">
                    {dataService.map(service => {
                        return (
                            <LazyLoad key={service._id} once={true} >
                                <ServiceItem once={true} src_image={`${CONFIG.BASE_URL_API + service.logo}`} alt_image={service.title} width_image={service.width} height_image={service.height} title={service.title} desc={service.caption} />
                            </LazyLoad>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Service;