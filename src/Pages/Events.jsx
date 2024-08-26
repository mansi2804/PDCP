import React from 'react'
import { Footer } from '../components/footer';
import { Rsvp } from '../components/Rsvp';
import { Search } from '../components/Search';

const Events = () => {
    return (
        <div>
            <Search />
            <Rsvp />
            <Footer />
        </div>
    )
}

export default Events
