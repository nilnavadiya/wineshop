import React, { useState } from 'react'
import FaqAccordion from './FaqAccordion'


const Accordion = () => {
    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }

    const faqs = [
        {
            id: 1,
            header: "How will my order be delivered to me?",
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
        },
        {
            id: 2,
            header: "Where does it come from?",
            text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `
        },
        {
            id: 3,
            header: "Why do we use it?",
            text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`
        },
        {
            id: 4,
            header: "Where can I get some?",
            text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
        },
        {
            id: 5,
            header: "Why do we use it?",
            text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
        },
        {
            id: 6,
            header: "How do I check the status of my order?",
            text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
        }
    ]
    return (
        <div className="container-fluid mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-8 mt-2">
                    <div className="card-body">
                        <h4 className="form-heading mb-4 text-[#d00035] font-lobster text-center mt-3">Have a Question?</h4>
                        <h1 className='text-5xl font-raleway text-center font-bold mb-10'>Frequently Asked Questions</h1>
                        {faqs.map((faq, index) => {
                            return (
                                <FaqAccordion key={index} active={active} handleToggle={handleToggle} faq={faq} />
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion