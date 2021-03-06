import React from 'react';
import Card from './Card';

export const WebsiteList = ({ websiteInfo }) => {
    return (
        <div className="gallery flex">
            {
                // Loop through every website and return
                websiteInfo.map((info, i) => {
                    return (
                        <Card 
                            key={websiteInfo[i].id} 
                            id={websiteInfo[i].id} 
                            title={websiteInfo[i].title} 
                            short_desc={websiteInfo[i].short_desc}
                            long_desc={websiteInfo[i].long_desc}
                            slug={websiteInfo[i].slug}
                            modalRequired={websiteInfo[i].modalRequired}
                            alt={websiteInfo[i].alt}
                            url={websiteInfo[i].url}
                            github={websiteInfo[i].github}
                        />
                    );
                })
            }
        </div>
    );
}

export const ProjectList = ({ projectInfo }) => {
    return (
        <div className="gallery flex">
            {
                // Loop through every project and return
                projectInfo.map((info, i) => {
                    return (
                        <Card 
                            key={projectInfo[i].id} 
                            id={projectInfo[i].id} 
                            title={projectInfo[i].title} 
                            short_desc={projectInfo[i].short_desc}
                            slug={projectInfo[i].slug}
                            modalRequired={projectInfo[i].modalRequired}
                            alt={projectInfo[i].alt}
                            url={projectInfo[i].url}
                            github={projectInfo[i].github}
                        />
                    );
                })
            }
        </div>
    );
}