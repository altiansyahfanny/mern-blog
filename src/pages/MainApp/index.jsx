import React from 'react';
import { Footer, Header } from '../../components';


const MainApp = (props) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className='px-5 flex-1 p-4'>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default MainApp