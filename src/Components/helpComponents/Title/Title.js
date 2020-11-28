/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Title.css';
import './responsive.css';

class Title extends Component {
    render() {
        return (
            <div className="containerTitle">
                <a id="cta1" href="#">
                    <span>{this.props.name}</span>
                    <span>
                        <svg
                            width="66px"
                            height="43px"
                            viewBox="0 0 66 43"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink"
                        />
                    </span>
                </a>
            </div>
        );
    }
}

export default Title;
