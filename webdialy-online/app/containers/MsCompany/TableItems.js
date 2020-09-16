import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function TableItems(props) {
    return (
        <div>
            <FormattedMessage {...messages.headerTableItems} />
        </div>
    )
}
