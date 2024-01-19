import React from 'react'
import "./Landing.css"
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const events = [
    {
        name: "Hyderabad Comic Con 2024",
        summary: "Celebrate comics, cosplay, gaming, and pop culture at Hyderabad's biggest comic convention!",
        description: "Join thousands of fans for meet-and-greets with creators, panels, workshops, artist alleys, exclusive merchandise, and more. Dress up as your favorite characters and immerse yourself in the world of fantasy and adventure!",
        date: new Date(2024, 0, 20),
        imageURL: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1570269547%2Fu2a9mvpi5lxvtasvf6zd.jpg"
    },
    {
        name: "ANOUSHKA SHANKAR LIVE IN INDIA 2024 - Hyderabad",
        summary: "Experience a magical evening of Indian classical music with renowned singer Anoushka Shankar.",
        description: "Witness the virtuosity and soulful melodies of Anoushka Shankar as she performs a captivating set featuring traditional ragas and contemporary compositions. Get ready to be transported by the beauty and power of her sitar playing.",
        date: new Date(2024, 0, 21),
        imageURL: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1570269547%2Fu2a9mvpi5lxvtasvf6zd.jpg"
    },
    {
        name: "ACETECH Hyderabad 2024",
        summary: "Explore the latest innovations and trends in architecture, construction, engineering, and technology at ACETECH Hyderabad.",
        description: "Network with industry leaders, discover new products and solutions, attend expert-led seminars, and gain insights into the future of the built environment. This exhibition is a must-attend for professionals in the AEC industry.",
        date: new Date(2024, 0, 19),
        imageURL: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1570269547%2Fu2a9mvpi5lxvtasvf6zd.jpg"
    },
    {
        name: "Zomaland by Zomato Live | Hyderabad",
        summary: "Indulge in a vibrant food and music festival featuring top artists, delicious cuisines, and immersive experiences.",
        description: "Enjoy live performances by popular bands and DJs, savor a variety of dishes from local restaurants and food trucks, participate in fun activities, and create unforgettable memories with friends and family. Zomaland promises a weekend of excitement and entertainment for all ages.",
        date: new Date(2024, 0, 20),
        imageURL: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1570269547%2Fu2a9mvpi5lxvtasvf6zd.jpg"
    },
    {
        name: "Republic Day Run at Decathlon Kukatpally, Hyderabad",
        summary: "Celebrate Republic Day with a 5K run to promote fitness and community spirit.",
        description: "Join fellow runners and fitness enthusiasts for a morning of exercise and celebration. The run is open to participants of all ages and abilities. Show your patriotic spirit and get active for a good cause!",
        date: new Date(2024, 0, 26),
        imageURL: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1570269547%2Fu2a9mvpi5lxvtasvf6zd.jpg"
    }
];

const EventCard = ({ event }) => (
    <Card className='mx-2' style={{ marginBottom: 30 }}>
        <Card.Img variant="top" src={event.imageURL} alt={event.name} />
        <Card.Body>
            <Card.Title>{event.name}</Card.Title>
            <Card.Text>{event.summary}</Card.Text>
            <Card.Subtitle variant="primary">{event.date.toLocaleDateString()}</Card.Subtitle>
            {/* <Card.Link href={`/register/${event.name}`}>Learn More</Card.Link> */}
            <Link to={`/register/${event.name}`} state={{ event: event }}>Learn more</Link>
        </Card.Body>
    </Card>
);

const Landing = () => {
    return (
        <Container className='w-50'>
            {/* List of items */}
            <Container className=''>
                {
                    events.map((event) => {
                        return <div className="" key={event.name}>
                            <EventCard event={event} />
                        </div>
                    })
                }
            </Container>
        </Container>
    )
}

export default Landing