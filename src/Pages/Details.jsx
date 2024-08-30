import React from 'react'
import { Footer } from '../components/footer';
import { Plandescription} from '../components/Plandescription';
import { Eventheader } from '../components/Eventheader';



const Details = () => {
    return (
        <>
          <div>
            <Eventheader />
            <Plandescription />
            <Footer />
          </div>
        </>
      );
}

export default Details


