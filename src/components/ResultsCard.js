import React from 'react';
import {Card, CardHeader,CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

const ResultsCard = ({products}) => (
  <Card>
    <CardHeader title='Results' />
    <CardText>
      <List>
        {products.map(product => <ListItem key={product.id} primaryText={product.name} />)}
      </List>
    </CardText>
  </Card>
);

export default ResultsCard;
