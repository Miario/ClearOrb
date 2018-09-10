import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faClock, faEdit, faBook } from '@fortawesome/free-solid-svg-icons';

const InfoPoint = () => {
    return (
        <div className="label-wrap">
            <div className="flex-row">
                <div className="box flex-rhomb" data-aos='slide-right' data-aos-delay="60">
                    <div className="rhomb rhomb1">
                        <FontAwesomeIcon icon={faDesktop} size="lg" color="white" className="label-icon icon-desktop" />
                    </div>
                    <div className="rhomb-text">Responsive and mobile friendly.</div>
                </div>
                <div className="box flex-rhomb" data-aos='slide-right' data-aos-delay="70">
                    <div className="rhomb rhomb2">
                        <FontAwesomeIcon icon={faClock} size="lg" color="white" className="label-icon" />
                    </div>
                    <div className="rhomb-text">Fast load times with performance in mind.</div>
                </div>
            </div>
            <div className="flex-row">
                <div className="box flex-rhomb" data-aos='slide-right' data-aos-delay="80">
                    <div className="rhomb rhomb3">
                        <FontAwesomeIcon icon={faEdit} size="lg" color="white" className="label-icon" />
                    </div>
                    <div className="rhomb-text">Modern, clean and intuitive design</div>
                </div>
                <div className="box flex-rhomb" data-aos='slide-right' data-aos-delay="90">
                    <div className="rhomb rhomb4">
                        <FontAwesomeIcon icon={faBook} size="lg" color="white" className="label-icon" />
                    </div>
                    <div className="rhomb-text">Bringing ideas to life in the browser.</div>
                </div>
            </div>
        </div>
    )        
}

export default InfoPoint;