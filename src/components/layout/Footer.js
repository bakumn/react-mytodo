import React from "react";


export default class Footer extends React.Component {
  render() {
    const footerStyles = {
      marginTop: "30px",
    };
    const d = new Date();
    return (
      <footer style={footerStyles}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p>Copyright &copy; {d.getFullYear()}</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
