import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux";
import useHttpErrorHandler from "../../hooks/http-error-handler";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, clearError] = useHttpErrorHandler(axios);

    return (
      <Aux>
        <Modal show={error} modalClosed={clearError}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};

//   return props => {
//     state = {
//       error: null,
//     };
//     componentDidMount() {
//       this.reqInterceptor = axios.interceptors.response.use((req) => {
//         this.setState({ error: null });
//         return Request;
//       });
//       this.resInterceptor = axios.interceptors.response.use(
//         (res) => res,
//         (error) => {
//           this.setState({ error: error });
//         }
//       );
//     }
//     componentWillUnmount() {
//       axios.interceptors.request.eject(this.reqInterceptor);
//       axios.interceptors.response.eject(this.resInterceptor);
//     }
//     errorConfirmedHandler = () => {
//       this.setState({ error: null });
//     };
//     render() {
//       return (
//         <Aux>
//           <Modal
//             modalClosed={this.errorConfirmedHandler}
//             show={this.state.error}
//           >
//             {this.state.error ? this.state.error.message : null}
//           </Modal>
//           <WrappedComponent {...this.props} />
//         </Aux>
//       );
//     }
//   };
// };

export default withErrorHandler;
