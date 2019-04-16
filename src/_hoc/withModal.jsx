import React from 'react';

const withModal = Component => {
  return class extends React.Component {
    state = {
      data: null,
    };

    render() {
      return (
        <Component
          {...this.props}
          modal={{
            data: this.state.data,
            onOpen: data => this.setState({ data }),
            onClose: () => this.setState({ data: null })
          }}
        />
      );
    }
  };
};

export default withModal;
