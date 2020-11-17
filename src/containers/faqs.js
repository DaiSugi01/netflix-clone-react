import React from 'react';
import { Accordion } from '../components';
import OptForm from '../components/opt-form';
import faqsData from '../fixtures/faqs.json';

// eslint-disable-next-line import/prefer-default-export
export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.List>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>
              <span>{item.body}</span>
            </Accordion.Body>
          </Accordion.Item>
        ))}

        <OptForm>
          <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Start Here</OptForm.Button>
          <OptForm.Break />
        </OptForm>
      </Accordion.List>
    </Accordion>
  );
}
