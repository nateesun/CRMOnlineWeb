import React from 'react';
import { FormattedMessage } from 'react-intl';
import TableItems from './TableItems';
import messages from './messages';

export default function ContentPage(props) {
    return (
        <div>
            <FormattedMessage {...messages.headerContentPage} />
            <TableItems {...props} />
        </div>
    )
}
