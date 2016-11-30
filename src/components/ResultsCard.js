import React from 'react';
import {Card, CardHeader,CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

const ResultsCard = ({products}) => (
  <Card>
    <CardHeader title='Results' />
    <CardText>
      <List>
        {products.map(product => <ListItem key={product.id} primaryText={product.name} secondaryText={"$" + (product.price_in_cents/100).toFixed(2)} />)}
      </List>
    </CardText>
  </Card>
);

export default ResultsCard;

