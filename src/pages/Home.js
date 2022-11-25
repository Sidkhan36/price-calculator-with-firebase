import React from 'react'
import '../App.css'
import Form from '../components/Form'
import writing from '../components/images/writing.jpg'
import writing2 from '../components/images/writing 2.jpg'
import Newsletter from '../components/Newsletter'

const Home = () => {
    return (
        <div>
            <div className='intro-top d-flex justify-content-evenly m-0 text-center '>
                {/* <div className='intro-inner m-3 p-5 '> */}
                <div className='text-center d-flex justify-content-evenly flex-column'>
                    <div className='px-3 py-5'>
                        <h3>Get your paper written by our professional writer at an affordable price.</h3>
                        <p>Looking for a top-level essay writing service? Look no further than ours! We can take care of all your education-related worries, quickly and efficiently. </p>
                        <div className='d-flex flex-column justify-content-start align-items-center '>
                            <h1>Order Now</h1>
                            <ul className='d-flex flex-column justify-content-start align-items-start ms-5 list-style-circle'>
                                <li>100% Plagiarism Free </li>
                                <li>24/7 Unlimited Friendly Support </li>
                                <li>Customer Satisfaction Guaranteed </li>
                                <li>Unlimited Revisions</li>
                                <li>Negotiable Price </li>
                                <li>Confidentiality</li>
                            </ul>
                        </div>
                        <a href='#price-calc' className="btn btn-primary text-center"> Write My Paper</a>
                    </div>
                </div>
                <div id='price-calc'>
                    <Form />
                </div>
            </div>

            <div className='features '>
                <section className=" p-5 border" id="services">
                    <div className=""><h2 className="">Our Top-Notch Essay Writing Services Includes</h2></div>
                    <div className="px-2 my-2 d-flex justify-content-evenly flex-wrap col-xl-12 col-sm-12 mobile-responsive ">
                        <div className="col mb-5 h-100 p-3 col-xl-3 col-sm-6">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3 "><i className="bi bi-collection"></i></div>
                            <h2 className="h5">Live Chat Support with our Writer</h2>
                            <p className="mb-0 justified">To discuss all your expectations, ideas, and suggestions, you can chat live with our professional writer. This way, our writers will be able to incorporate your suggestions into their current draft.
                            </p>
                        </div>
                        <div className="col mb-5 h-100 p-3 col-xl-3 col-sm-6 " >
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building"></i></div>
                            <h2 className="h5">Originality report at no cost
                            </h2>
                            <p className="mb-0 justified">At our essay writing service, we understand the importance of originality. That's why we guarantee that all of our papers are 100% unique. You can even request a free originality report to see for yourself. Relax knowing that when you hire us, you're getting the perfect paper for your institution.</p>
                        </div>
                        <div className="col mb-5 mb-md-0 h-100 p-3">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                            <h2 className="h5">Negotiable Price</h2>
                            <p className="mb-0 justified">We offer budget-friendly essay help, giving you the freedom to choose your essay writer at a price that suits you. You can choose from a range of prices, from cheaper to more expensive.</p>
                        </div>
                        <div className="col h-100 p-3">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                            <h2 className="h5">Guaranteed Confidentiality</h2>
                            <p className="mb-0 justified">At ExpressEssayWriter, we understand that anonymity is important to our customers. That's why our site is fully encrypted and all payments are processed through secure payment gateways. Your identity is safe with us.</p>
                        </div>
                    </div>
                </section>

                {/* Pricing List */}

                <div className='get-help d-flex flex-column container py-5 px-3 border-bottom"' id='plan'>
                    <h2>Get Professional help to write academic essay for me</h2>
                    <p className='justified'>
                        We offer reasonably priced services for students who need someone to write essays for them. We understand that students are usually tight on money, so we offer academic help that is accessible for everyone, regardless of their social class or economic status. We believe that our experts must be paid fairly, so we offer a discount for those who request our services a few days before the deadline. The same applies to longer orders.
                    </p>
                    <h3>Best Paper Prices</h3>
                    <table className='table table-striped'>
                        <thead className='thead-dark'>
                            <tr> <th>Services</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr> <td>Academic paper writing   </td>
                                <td>from $10.80/page</td>
                            </tr>
                            <tr> <td>Proofreading</td>
                                <td>from $3.00/page</td>
                            </tr>
                            <tr>
                                <td>Dissertation services</td>
                                <td>from $12.00/page</td>
                            </tr>
                            <tr>
                                <td>Rewriting</td>
                                <td>from $5.00/page</td>
                            </tr>
                            <tr>
                                <td>Editing</td>
                                <td>from $7.99/page</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* FAQ Section */}

                <section className="container py-5 px-0 border-bottom" id="faq">
                    <div className=""><h2 className="">Essay Writing Service <span className='text-primary'>FAQs</span>
                    </h2></div>
                    <div className="px-5 my-5 d-flex justify-content-between flex-wrap col-xl-12 col-sm-12 mobile-responsive">
                        {/* <div className='row mobile-responsive'> */}

                        <div className="col mb-5 h-100 col-xl-4 col-sm-6 p-3 ">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
                            <h2 className="h5">Does your paper writing service provide Quality?</h2>
                            <p className="mb-0 justified">At our essay writing service, we only work with professionals who can demonstrate their knowledge, experience, and ability to deliver great service through interviews, tests, and mock tasks. This ensures that whoever you hire on our essay writing service will be able to craft a paper that meets your specific requirements and is delivered within the timeframe that you set out. In addition, we have a quality control team who ensures that each paper is original and meets our high standards.
                            </p>
                        </div>
                        <div className="col mb-5 h-100 col-xl-4 col-sm-6 p-3">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building"></i></div>
                            <h2 className="h5">How fast can you deliver the essay after placing an Order?

                            </h2>
                            <p className="mb-0 justified">No matter when you need assistance with your essay, our team will be there to help. We understand that sometimes you need urgent assistance and we are committed to providing the help you need. To get started, reach out to our customer support team.
                            </p>
                        </div>
                        <div className="col mb-5 mb-md-0 h-100 col-xl-4 col-sm-6 p-3">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                            <h2 className="h5">In What Formatting Style can you write my Essay?
                            </h2>
                            <p className="mb-0 justified">We are aware that formatting is incredibly important to you and your essay instructions. Our professional and skilled writers are capable of adhering to any format, including the most popular ones. This includes MLA, APA, Harvard, Chicago/Turabian formats, among others! All you need to do is inform your expert writer of the style you need and they will deliver as required.
                            </p>
                        </div>
                        {/* </div> */}
                        {/* <div className='row mobile-responsive'> */}

                        <div className="col h-100 col-xl-4 col-sm-6 p-3">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                            <h2 className="h5">What is the shortest deadline for your academic essay writing service?
                            </h2>
                            <p className="mb-0 justified">We understand that you may need your essay done as soon as possible. In general, we ask for at least six hours to complete most tasks. This is to ensure that we can deliver a high quality product to you. However, our online essay helpers may be able to complete small tasks faster. If you have a tight deadline, please reach out to our customer service team. With the information they have, they will be able to connect you with a writer who is available and can work on last-minute notice.
                            </p>
                        </div>
                        <div className="col h-100 col-xl-4 col-sm-6 p-3">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                            <h2 className="h5">Does your Essay Writing Service work for School Papers?

                            </h2>
                            <p className="mb-0 justified">When you hire an essay writer from our essay writing service, you can expect them to adhere to the highest standards of quality, including the criteria set out by your school or college. Our essays are meant to be used for research and study purposes only, and we do not condone any form of plagiarism, from either our experts or our customers.

                            </p>
                        </div>
                        <div className="col h-100 col-xl-4 col-sm-6 p-3">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                            <h2 className="h5">When Do I have to make payment for my Essay Help?

                            </h2>
                            <p className="mb-0 justified">We want our clients to feel confident and in control when using our online essay writing service. This is why we only finalize payments once the client has confirmed they are satisfied with the work completed. When you place an order and choose the best essay helper, you will be asked to put down a deposit; however, the funds will stay in your account until you receive your paper.
                            </p>
                        </div>
                        {/* </div> */}
                    </div>
                </section>


                {/* <!-- Testimonial section--> */}
                <div className="py-5 bg-light" id='testimonials'>
                    <div className="container px-5 my-5">
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-10 col-xl-7">
                                <div className="text-center">
                                    <div className="fs-4 mb-4 fst-italic">"At ExpressEssayWriter, we pride ourselves on providing a top-quality essay writing service. But don't just take our word for it – here are some testimonials from our satisfied customers</div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                        <div className="fw-bold">
                                            Tom Ato
                                            <span className="fw-bold text-primary mx-1">/</span>
                                            CEO, Pomodoro
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How our Essay Writing Services works */}
                <section className=" py-5 border" id="how-it-works">
                    <div className="container"><h2 className="">How our Essay Writing Services works</h2>
                        <p className='justified'>You may get a top-notch paper from our academic writing pros in just four simple clicks. The ease of this procedure has been maximized, but if you have any concerns, our helpful support staff is accessible around-the-clock. Simply choose the kind of paper you desire, let us know your specifications, pick a deadline, and make payment for the purchase. The rest will be handled by us.</p>
                    </div>
                    <div className="px-5 my-5 d-flex justify-content-evenly flex-wrap col-xl-12 col-md-12 mobile-responsive ">
                        <div className="col mb-5 h-100 p-3 col-xl-3 col-sm-6">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
                            <h2 className="h5">Place an Order for writing My Essay</h2>
                            <p className="mb-0 justified">We make it easy to get started with your assignment. Just complete our simple order form and make sure to include all of the details of your assignment. Our team will take it from there and get started on your project right away.</p>
                        </div>
                        <div className="col mb-5 h-100 p-3 col-xl-3 col-sm-6">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building"></i></div>
                            <h2 className="h5">Our Writer Starts Crafting Your Essay
                            </h2>
                            <p className="mb-0 justified">As soon as you place your order, our writer will get to work immediately crafting your essay with the utmost professionalism and care so that it is completed before the deadline.</p>
                        </div>
                        <div className="col mb-5 mb-md-0 h-100 p-3 col-xl-3 col-sm-6">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                            <h2 className="h5">Track your Order</h2>
                            <p className="mb-0 justified">You can easily keep track of your order's progress by either checking the progress bar in your personal account page or by communicating directly with the writer assigned to your order. This way, you can be confident that your essay is being worked on and will be delivered to you on time!</p>
                        </div>
                        <div className="col h-100 p-3 col-xl-3 col-sm-6">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                            <h2 className="h5">Accept Your Order</h2>
                            <p className="mb-0 justified">Once you approve the draft, we will send you the final version of your paper in an editable format. Please leave a rating for our academic writer's work.</p>
                        </div>
                    </div>
                </section>

                    {/* list of assignment sections */}
                <section className=" py-5 border" id="list">
                    <div className="container p-3">
                        <h2 className="">We Write Any Type of Assignment/ Paper</h2>
                        <div className="d-flex align-items-start">
                            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">PaperWork</button>
                                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Assignment</button>
                                <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Others</button>
                            </div>
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <ul className='list-style-circle'>
                                        <li>Admission Essay</li>
                                        <li>Essay</li>
                                        <li>Annotated Bibliography</li>
                                        <li>Research Paper</li>
                                        <li>Term Paper</li>
                                        <li>Book Reviews</li>
                                        <li>Proofreading</li>
                                        <li>Business Plan</li>
                                        <li>Case Study</li>
                                        <li>Creative Writing</li>
                                        <li>Article Review</li>
                                        <li>Thesis / Dissertation</li>
                                        <li>Proofreading</li>
                                        <li>Literature Review</li>
                                        <li>Other</li>
                                        <li>Presentation or Speech</li>
                                        <li>Reflective Writing</li>
                                        <li>Report</li>
                                        <li>Critical Thinking</li>
                                        <li>Movie Review</li>
                                        <li>Research Proposal</li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

                                    <ul className='list-style-circle'>
                                        <li >Homework Assignment</li>
                                        <li>Statistics Assignment</li>
                                        <li>Physics Assignment</li>
                                        <li>Engineering Assignment</li>
                                        <li>Biology Assignment</li>
                                        <li>Geography Assignment</li>
                                        <li>Physics Assignment</li>
                                        <li>Chemistry Assignment</li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    <ul className='list-style-circle'>
                                        <li>Multiple Choice Questions</li>
                                        <li>Short Answer Questions</li>
                                        <li>Word Problems</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <!-- Blog preview section--> */}
                <section className="py-5">
                    <div className="container px-5 my-5">
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                <div className="text-center">
                                    <h2 className="fw-bolder">From our blog</h2>
                                    <p className="lead fw-normal text-muted mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-5">
                            <div className="col-lg-4 mb-5">
                                <div className="card h-100 shadow border-0">
                                    <img className="card-img-top" src={writing} alt="..." />
                                    <div className="card-body p-4">
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                                        <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">Blog post title</h5></a>
                                        <p className="card-text mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                        <div className="d-flex align-items-end justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                                <div className="small">
                                                    <div className="fw-bold">Kelly Rowan</div>
                                                    <div className="text-muted">March 12, 2022 &middot; 6 min read</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-5">
                                <div className="card h-100 shadow border-0">
                                    <img className="card-img-top" src={writing2} alt="..." />
                                    <div className="card-body p-4">
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2">Media</div>
                                        <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">Another blog post title</h5></a>
                                        <p className="card-text mb-0">This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                        <div className="d-flex align-items-end justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                                <div className="small">
                                                    <div className="fw-bold">Josiah Barclay</div>
                                                    <div className="text-muted">March 23, 2022 &middot; 4 min read</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-5">
                                <div className="card h-100 shadow border-0">
                                    <img className="card-img-top" src={writing} alt="..." />
                                    <div className="card-body p-4">
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                                        <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">The last blog post title is a little bit longer than the others</h5></a>
                                        <p className="card-text mb-0">Some more quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                        <div className="d-flex align-items-end justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                                <div className="small">
                                                    <div className="fw-bold">Evelyn Martinez</div>
                                                    <div className="text-muted">April 2, 2022 &middot; 10 min read</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Newsletter />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home