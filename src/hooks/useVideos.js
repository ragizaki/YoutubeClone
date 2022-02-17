import { useState, useEffect } from 'react';

// API
import youtube from '../api/youtube';

const useVideos = defaultTerm => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        searchVideos(defaultTerm);
    }, [defaultTerm]);

    // handling search Submit
    const searchVideos = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
            },
        });

        setVideos(response.data.items);
    };

    return { videos, searchVideos };
};

export default useVideos;
