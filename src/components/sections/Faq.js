import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'Question 1?',
    content: () => (
      <>
        Answer goes here.
      </>
    ),
  },
  {
    title: 'Question 2?',
    content: () => (
      <>
        Answer goes here.
      </>
    ),
  },
  {
    title: 'Question 3?',
    content: () => (
      <>
        Answer goes here.
      </>
    ),
  },
  {
    title: 'Question 4?',
    content: () => (
      <>
        Answer goes here.
      </>
    ),
  },
  {
    title: 'Question 5?',
    content: () => (
      <>
        Answer goes here.
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
