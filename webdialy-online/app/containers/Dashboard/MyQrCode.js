import React from 'react';
import { FormattedMessage } from 'react-intl';
const QRCode = require('qrcode.react');
import messages from './messages';

export default function MyQrCode(props) {
    const { code } = props;
    if(!code){
        return <React.Fragment>
            <FormattedMessage {...messages.loadQrCode} />
        </React.Fragment>
    }
    return (
        <React.Fragment>
            <h3>
                <FormattedMessage {...messages.myQrCode} />
            </h3>
            <QRCode value={code} />
        </React.Fragment>
    )
}
