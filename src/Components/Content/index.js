import React from 'react';
import './content.scss';
import Title from '../Title';
import Description from '../Description'



const Content = () => {

    return(

    <div>

            <main>


                    <div className="div1">
                            <h2>
                                <Title name='lorem' />
                            </h2>   
                                    
                                    
                            <h5>      
                                <Description text="unt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ra" />
                            </h5> 
                    </div>



                    <div className="div2"> 
                            <h2>
                               <Title name='ipsum' />
                            </h2>


                            <h5>
                               <Description text="minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequa" />
                            </h5>
                    </div>


            </main>

    </div>
    )
}

export default Content;




// SANS PROPS

// const Content = () => {

//     return(

//         <div>

//             <main className="lorem">
            
//                 <h2 className="lorem__titre"> Lorem </h2>
//                 <p className="lorem__paraf"> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid </p>

//             </main>

//         </div>
//     )
// }