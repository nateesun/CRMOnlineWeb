import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonLink from 'components/ButtonLink';

export default function ButtonCreateNew(props) {
  const { name = 'New' } = props;
  return (
    <ButtonLink>
      <Button
        variant="contained"
        color="primary"
        style={{ marginBottom: '10px', background: 'green' }}
      >
        {name}
      </Button>
    </ButtonLink>
  );
}
