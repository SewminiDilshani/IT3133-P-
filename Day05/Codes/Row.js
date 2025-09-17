function Row(params){
    return (
        <tr>
            <td>{params.id}</td>
            <td>{params.name}</td>
            <td>{params.grade}</td>
        </tr>
      );
}

export default Row;