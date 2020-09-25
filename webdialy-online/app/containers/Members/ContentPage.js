import React from 'react';
import TableItems from './TableItems';
import NewItem from './NewItem';
import EditItem from './EditItem';
import ViewItem from './ViewItem';

export default function ContentPage(props) {
  return (
    <div>
      {props.getPage === 'LIST' && <TableItems {...props} />}
      {props.getPage === 'NEW' && <NewItem {...props} />}
      {props.getPage === 'EDIT' && <EditItem {...props} />}
      {props.getPage === 'VIEW' && <ViewItem {...props} />}
    </div>
  );
}
