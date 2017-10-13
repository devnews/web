import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';
import svg from '../../static/logo.svg';

const Logo = (props) => {
    return (
        <SVGInline
            svg={svg}
            desc={props.desc}
            width={props.width}
            height={props.height}
            cleanup={['width', 'height']}
        />
    );
};

Logo.propTypes = {
    desc:   PropTypes.string,
    width:  PropTypes.string,
    height: PropTypes.string,
};

Logo.defaultProps = {
    desc: 'devnews logo',
    width: 'auto',
    height: '20px',
};

export default Logo;
