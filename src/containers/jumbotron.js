import React from 'react';

import juboData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';

// eslint-disable-next-line import/prefer-default-export
export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {juboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
