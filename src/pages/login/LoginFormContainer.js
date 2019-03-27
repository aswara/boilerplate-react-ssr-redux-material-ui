import styles from './login-jss';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import LoginForm from './LoginForm';

const LoginFormReduxed = reduxForm({
  form: 'login',
  enableReinitialize: true,
})(LoginForm);

const reducer = 'login';
const FormInit = connect(
  state => ({

  }),
)(LoginFormReduxed);

export default withStyles(styles)(FormInit);
