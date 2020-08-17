import React from 'react';

export default function MemberTable(props) {
  const { members, onInitLoad, onDelete, onEdit } = props;
  const handleDelete = (member_code) => {
    onDelete(member_code);
    onInitLoad();
  }
  let bodyResponse = {};
  if (members) {
    bodyResponse = members.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.Member_Code}</td>
          <td>{item.Member_Email}</td>
          <td>{item.Member_TotalScore}</td>
          <td>{item.Member_TotalPurchase}</td>
          <td>
            <button>Edit</button>
            <button onClick={() => handleDelete(item.Member_Code)}>Delete</button>
          </td>
        </tr>
      );
    });
  }
  return (
    <div>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Code</th>
            <th>Email</th>
            <th>TotalScore</th>
            <th>TotalPurchase</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {members && members.length > 0 ? (
            bodyResponse
          ) : (
            <tr>
              <td colSpan={5} align="center">
                ไม่พบข้อมูลสมาชิก
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
