import React from 'react';
import { FormattedMessage } from 'react-intl';
import TableItems from './TableItems';
import NewItem from './NewItem';
import EditItem from './EditItem';
import messages from './messages';

export default function ContentPage(props) {
  return (
    <div>
      {props.getPage === 'LIST' && <TableItems {...props} />}
      {props.getPage === 'NEW' && <NewItem {...props} />}
      {props.getPage === 'EDIT' && <EditItem {...props} />}
    </div>
  );
}
