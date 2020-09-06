// @ts-nocheck
import React from 'react';
// @ts-ignore

import './style.css'



const Community = () => {

    const filter = {
        'AVAILABILITY': ['Online Now', 'Near Me'],

        'UP FOR': ['Jams', 'Collaborations', 'Service'],

        'FILTER BY LANGUAGE': ['English', 'Portuguese', 'Spanish',
            'German', 'Dutch', 'Hebrew'],

        'FILTER BY GENERE': ['Dubstep', 'EDM', 'Hip-Hop', 'R&B', 'Hip-Hop', 'R&B',
            'Dubstep', 'IDM'],

        'FILTER BY DAW': ['Ableton', 'Cubase', 'Acid', 'Pro Tools', 'Bitwig'],

        'FILTER BY SERVICE': ['Mixing', 'Mastering', 'Voiceovers',
            'Podcast Editing', 'Pitch Correction'
            , 'Voiceovers', 'Online Music Lessions']
    }



    return (


            <div className="filterStyle"
                >

                {Object.entries(filter).map(([key, value]) => {
                    return (

                            <div style={{
                                maxHeight: key === 'AVAILABILITY' ? '65px' : '105px',
                                height: key === 'UP FOR' ? '65px' : '105px'
                            }}>
                                <span className="filterCategoryName">{key}</span>
                                <p>
                                    {value.map((v, i) => {
                                        return (
                                            <button style={{ borderRadius: '50px', height: '20px' }}
                                                className="filterButtonStyle"
                                                key={i}  >
                                                {v}
                                            </button>
                                        )
                                    })}
                                </p>
                            </div>

                    )
                })}
            </div>

    );
}

export default Community;
