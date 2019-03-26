import React from 'react';

export default props => {
  console.log(props);
  let data = props.content ? (
    <section className="content">
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">{props.title}</h3>
            </div>

            <div className="box-body table-responsive no-padding">
              <table className="table table-hover">
                <tbody>
                  <tr>
                    {props.headers.map(header => (
                      <th key={header.name}>{header.name}</th>
                    ))}
                  </tr>
                  {props.content.map(body => {
                    return (
                      <tr
                        onClick={e =>
                          props.openModal ? props.openModal(body) : null
                        }
                        key={body[props.headers[0].value]}
                      >
                        <td>{body[props.headers[0].value]}</td>
                        <td>{body[props.headers[1].value]}</td>
                        <td>{body[props.headers[2].value]}</td>
                        <td>{body[props.headers[3].value]}</td>
                        <td>{body[props.headers[4].value]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <h2 className="text-center">No content here</h2>
  );
  return data;
};
