import React, { useState } from 'react';
import '../styles/Shorten.css';
import img from '../assets/bg-shorten.svg';
import axios from 'axios';
import Url from './Url';

function Shorten() {
    const baseUrl = 'https://api.shrtco.de/v2';
    const DEFAULT_ERROR_MESSAGE = 'Please add a link';
    const [errorMessage, setErrorMessage] = useState(DEFAULT_ERROR_MESSAGE);
    const [isError, setIsError] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [urls, setUrls] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButton = async (event) => {
        setIsError(false);
        event.preventDefault();
        async function fetchData() {
            const request = await axios.get(`${baseUrl}/shorten?url=${inputValue}`);
            console.log(request);
            const results = request.data.result;
            setUrls((oldstate) => [results, ...oldstate]);
            return request;
        }
        fetchData();
        setInputValue('');
    };

    return (
        <div className="shorten">
            <div className="shorten__center">
                <img src={img} alt="" />
                <form className="shorten__center-form">
                    <input
                        type="text"
                        placeholder="Shorten a link here..."
                        onChange={handleInputChange}
                    />
                    {isError ? (
                        { errorMessage }
                    ) : null}
                    <button onClick={handleButton}>
                        Shorten it!
                    </button>
                </form>
            </div>

            <div className="urllist">
                {urls.map((url)=>(
                    <Url key={url.code} value={url.original_link} link={url.full_short_link}/>
                ))}                   
            </div>
        </div>

    )
}

export default Shorten
