import React, { useEffect, useState } from 'react'
import "./css/style.css"

export default function Tempapp() {

    const [city, setCity] = useState('');
    const [search, setSearch] = useState('Islamabad')

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bd5e378503939ddaee76f12ad7a97608`;
            const response = await fetch(url);
            const resJson = await response.json(); // Await the response.json() Promise
            // console.log(resJson)
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])



    return (
        <>
            <div className='box'>
                <div className='inputData'>
                    <input
                        type='search'
                        value={search}
                        className='inputField'
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }}
                    />
                </div>

                {!city ? (
                    <p className='errorMsg'>No Data Found</p>
                ) : (
                    <div>
                        <div className='info'>
                            <h2 className='location'>
                                <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className='temp'>
                                {city.temp} ℃
                            </h1>
                            <h3 className='tempmin_max'>
                                Min : {city.temp_min} ℃ | Max : {city.temp_max} ℃ | Humidity : {city.humidity} g.m-3
                            </h3>
                        </div>
                        <div className='wave -one'>

                        </div>
                        <div className='wave -two'>

                        </div>
                        <div className='wave -three'>

                        </div>
                    </div>
                )
                }

            </div>
        </>
    )
}
