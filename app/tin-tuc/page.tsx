import React from 'react';
import Banner from './Banner/Banner';
import SideBar from './SideBar/SideBar';
import Event from './Event/Event';
import Footer from './Footer/Footer';


function Page() {
    return (
        <div className='relative' >
            <Banner />
            <SideBar />
            <Event />
            <Footer/>
            
            
        </div>
    );
}

export default Page;