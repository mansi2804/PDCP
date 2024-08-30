import React from 'react'
import { Footer } from '../components/footer';
import { Rsvp } from '../components/Rsvp';
import { Eventheader } from '../components/Eventheader';

const Events = () => {
    return (
        <div>
            <Eventheader />
            <Rsvp />
            <Footer />
        </div>
    )
}

export default Events
