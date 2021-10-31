import React from 'react';
import './FeatureTour.css'

const FeatureTour = () => {
    return (
        <div>
            <h1 className='text-center'>FEATURED TOURS</h1>
            <h4 className='text-center pb-5 pt-3'>A journey is best measured in friends, rather than miles.” “Wherever you go, go with all your heart!”.</h4>
            <div className='tour-section'>
                <div className='istanlbul-img'>
                    <img src="https://i.ibb.co/hdWC5KF/pexels-oziel-g-mez-860562.jpg" alt="" />
                    <h4>Week At Istanbul</h4>
                    <p>Istanbul, largest city and principal seaport of Turkey. Historically known as Byzantium and then Constantinople, it was the capital of the Byzantine Empire</p>
                    <h3>$6500</h3> <span > -2 days 3 nights</span> 
                    <br />  <br />
                    <span className='location'>Tour in Istanbul</span>
                </div>
                <div>
                    <div className='travel'>
                        <div>
                            <img src="https://i.ibb.co/PQx9wwD/pexels-rachel-claire-4577707.jpg" alt="" />
                        </div>
                        <div className='tour-details'>
                            <h4>Week At Sunny Beatch</h4>
                            <p>Istanbul, largest city and principal seaport of Turkey. Historically known as Byzantium and then Constantinople, it was the capital of the Byzantine Empire</p>
                            <h3>$5500</h3> <span> -2 days 3 nights</span> <br /> <br />
                            <span className='location'>Tour in Autria</span>
                        </div>
                    </div>
                    <div className='travel'>
                        <div className='mt-3'>
                            <img src="https://i.ibb.co/HdcpbZZ/pexels-spencer-davis-4388168.jpg" alt="" />
                        </div>
                        <div className='tour-details'>
                            <h4>Week At Turkey</h4>
                            <p>Istanbul, largest city and principal seaport of Turkey. Historically known as Byzantium and then Constantinople, it was the capital of the Byzantine Empire</p>
                            <h3>$4500</h3> <span> -2 days 3 nights</span> <br /> <br />
                            <span className='location'>Tour in Turkey</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default FeatureTour;