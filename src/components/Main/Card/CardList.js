import React from 'react';
import Card from './Card';

export const WebsiteList = ({ websiteInfo }) => {
    return (
        <div className="gallery flex">
            {
                websiteInfo.map((info, i) => {
                    return (
                        <Card 
                            key={websiteInfo[i].id} 
                            id={websiteInfo[i].id} 
                            title={websiteInfo[i].title} 
                            description={websiteInfo[i].description} 
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
                projectInfo.map((info, i) => {
                    return (
                        <Card 
                            key={projectInfo[i].id} 
                            id={projectInfo[i].id} 
                            title={projectInfo[i].title} 
                            description={projectInfo[i].description} 
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