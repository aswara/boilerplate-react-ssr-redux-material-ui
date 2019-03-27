import { withStyles } from '@material-ui/core/styles';
import styles from './login-jss';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Login from './Login'

export default withStyles(styles)(Login);
