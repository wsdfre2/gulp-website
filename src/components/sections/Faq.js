import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'What is Gulp?',
    content: () => (
      <>
        Gulp is a happy hour, food and beverage deal platform that collects all your 
        favorite neighborhood deals from bars, restaurants and more to let our users 
        know what kind of awesome deals are available near them! We want to enable business 
        owners with the flexibility to publish happy hours and deals based upon their needs 
        and convenience and our users to be able to take advantage of them. Together, this will 
        help save money for our users, reduce costs and raise profits for local businesses 
        and allow everyone to help contribute towards zero-waste!
      </>
    ),
  },
  {
    title: 'Where and when will Gulp be available',
    content: () => (
      <>
        Gulp is planning to launch in the neighborhood of San Francisco and Berkely in Q1 2022. However, 
        we plan on expanding to nearby cities all across the United States soon! So, stay hungry and keep 
        an eye out for Gulp to be available in your neighborhood!
        <br></br>
        Meanwhile if you’re in San Francisco and would like to participate in our soft launch please reach 
        out to hello@gulpsf.com and we would love to have you join us.
      </>
    ),
  },
  {
    title: 'As a business owner how would Gulp help me?',
    content: () => (
      <>
        One of Gulp’s main objectives is to enable businesses to be able to do more online that would help 
        them reduce inventory waste, manage traffic and to gain more customers and profit. We realized that 
        so many awesome businesses in every block have deals from daily specials to happy hours and special 
        promotions aimed at gaining more traffic except potential customers in their own neighborhood don’t 
        even know about them! At Gulp we want to help businesses promote the awesome promotions that they already 
        have and enable them to create new ones when needed with only a few simple clicks- all free of charge!
        <br></br>
        Do you want to register or claim your business on Gulp?
        <br></br>
        Please reach out at hello@gulpsf.com and we will get back to you as soon as possible!
      </>
    ),
  },
  {
    title: 'As a user why shouldn’t I just look up my own deals?',
    content: () => (
      <>
        Great question, but what have you tried? We found that zooming in on hastily took pictures on review 
        platforms from months back was not an ideal method of tracking down the best deals. On top of that, 
        in the pandemic/post-pandemic economy when businesses were changing menus, hours and deals at such 
        a rapid pace it made an already hard task almost impossible. So we wanted to put together a solution 
        that can help resolve both these problems and give our users all the best deals in a single holistic 
        view while businesses can flexibly change their offering all on the same platform!
        <br></br>
        Also users can earn badges, statuses and rewards allowing them to be leaders in the Gulp community 
        with perks such as special invitations, promotions and such.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
