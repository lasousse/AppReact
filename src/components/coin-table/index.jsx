import React from 'react';
import ReactTable from "react-table";

export default function Matrice(props){
    return(
<table class="table table-bordered">
    <thead>
      <tr>
          <th>Name</th>
          <th>Lien de parenté</th>
          <th>Age</th>
          <th>Documents</th>

          </tr>  
    </thead>
    <tbody>
      
    { props.data.map(row =>(
        <tr>
            
            <td>{row.name}</td>
            <td>{row.liendeparenté}</td>
            <td>{row.age}</td>
            <td>{row.documents}</td>

        </tr>
    ))
    }
    </tbody>
</table>
    )
}