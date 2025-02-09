 import React, { Component } from 'react';

    class Error extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError() {
    
      return { hasError: true };
    }
  
  
    componentDidCatch(error, errorInfo) {
      
      console.error("Error caught by Error Boundary:", error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <div>Something went wrong. Please try again later.</div>;
      }
  
      return this.props.children;
    }
  }
  <div><p>hai</p></div>
  export default Error;
  