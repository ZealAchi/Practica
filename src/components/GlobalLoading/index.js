import React from 'react';
import { withStyles } from '@material-ui/styles';
import LoadingIcon from 'assests/images/Loading.gif';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as uiActions from 'redux/actions/ui';
import styles from './styles';

function GlobalLoading(props) {
  const { classes, showLoading } = props;

  if (showLoading) {
    return (
      <div className={classes.GlobalLoading}>
        <img src={LoadingIcon} alt="loading" className={classes.icon} />
      </div>
    );
  }
  return <></>;
}

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool,
};
const mapStateToProps = state => {
  return {
    showLoading: state.ui.showLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uiActions: bindActionCreators(uiActions, dispatch),
  };
};
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withStyles(styles),
  withConnect,
  GlobalLoading,
);
