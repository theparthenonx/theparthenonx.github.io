import React, {useEffect, useState} from 'react';
import Fade from 'react-reveal/Fade';

import BarChart from './Components/BarChart';
import Nav from './Components/nav';
import Footer from './Components/Footer';
import './AnalyticsBeta.css';


const AnalyticsBeta = () => {
    const [collections, setCollections] = useState([]);
    const [collectionId, setCollectionId] = useState('');

    const [collectionStats, setCollectionStats] = useState({});

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = async () => {
        const response = await fetch('http://localhost:3001/api/collection');
        setCollections((await response.json()).data);
    };

    const onCollectionSelect = (e) => {
        setCollectionId(e.target.value)
    };
    const options = collections.map((collection) => <option label={collection.slugName} value={collection.id}/>);
    return(
        <>
        <section className='analytics-beta-section'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-10'>
                        <Nav />
                        <div className='analytics-beta text-center'>
                            <Fade bottom>
                                <h1 className='h1'>ANALYTICS BETA</h1>
                            </Fade>
                            <Fade bottom>
                                <div className='form'>
                                    <select onChange={onCollectionSelect}>
                                        <option label={'Select'} value={collectionId}/>
                                        { options }
                                    </select>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className='collection-stats'>
                                    <div className='collection-stat'><div>Floor Price</div>{collectionStats.floorPrice ? <div>{collectionStats.floorPrice} ETH</div> : <div/>}</div>
                                    <div className='collection-stat'><div>Daily Volume</div><div>{collectionStats.oneDayVolume} ETH</div></div>
                                    <div className='collection-stat'><div>Number of Owners</div><div>{collectionStats.numOwners}</div></div>
                                    <div className='collection-stat'><div>7D Average Price</div><div>{collectionStats.sevenDayAveragePrice} ETH</div></div>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className='chart'>
                                    <BarChart
                                      collectionId={collectionId}
                                      onTemp={setCollectionStats}
                                    />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        <Footer />
        </>
    )
}

export default AnalyticsBeta;