import React from 'react';
import SignatureCanvas from 'react-signature-canvas';

export default function SignatureForm() {
  return (
      <div>
          <h3>ลายมือชื่อ/ ลายเซ็นต์</h3>
          <div style={{background: 'white', border: '1px solid #bbb', padding: '10px', marginBottom: '10px'}}>
            <SignatureCanvas
                penColor="green"
                canvasProps={{ width: 750, height: 100, className: 'sigCanvas' }}
            />
          </div>
      </div>
  );
}
