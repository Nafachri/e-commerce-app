import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Branch</th>
            <th scope="col">Address</th>
            <th scope="col">Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Jakarta</td>
            <td>Tanjung Priok, Jakarta Utara</td>
            <td>021-4355234</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Bekasi</td>
            <td>Jati Sari, Jawa Barat</td>
            <td>021-4453256</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Surabaya</td>
            <td>Jl. Ahmad Yani, Surabaya Selatan</td>
            <td>021-50663333</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
