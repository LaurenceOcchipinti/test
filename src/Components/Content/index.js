import React from 'react';
import './content.scss';
import Title from '../Title';
import Description from '../Description'



const Content = () => {

    return(

        <div>

            <main className="lorem">
            <Title />
            <Description />
                <h2 className="lorem__titre"> Lorem </h2>
                <p className="lorem__paraf"> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid </p>
            </main>

        </div>
    )
}

export default Content;