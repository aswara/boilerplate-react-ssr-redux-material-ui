import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import LoginFormContainer from './LoginFormContainer';

class Login extends React.Component {
  state = {
    valueForm: []
  }

  submitForm(values) {
    setTimeout(() => {
      this.setState({ valueForm: values });
      console.log(`You submitted:\n\n${this.state.valueForm}`);
      window.location.href = '/app';
    }, 500); // simulate server latency
  }

  render() {
    const title ='Admin - Login';
    const description = 'admin';
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <div className={classes.container}>
          <Grid container spacing={24} alignItems="center" direction="row" justify="center">
            <Grid item container justify="center" spacing={0} className={classes.loginWrap}>
              <Hidden smDown>
                <Grid item md={6} className={classes.welcomeWrap}>
                  {/* Welcome Login */}
                  <div className={classes.welcome}>
                    <div className={classes.welcomeContent}>
                      <div className={classes.brand}>
                        <img src='' alt='' />
                        <h3>Admin</h3>
                      </div>
                      <Typography variant="display2">
                        <span>Hello there,</span>
                      </Typography>
                      <Typography variant="title" className={classes.brandText}>
                        <span>
                          welcome to Website
                        </span>
                      </Typography>
                    </div>
                    <ArrowForward className={classes.decoBottom} />
                  </div>
                </Grid>
              </Hidden>
              <Grid item md={6} sm={8} xs={11}>
                {/* ----------------------------------------------------------------------*/}
                {/* Load Login Form */}
                <LoginFormContainer onSubmit={(values) => this.submitForm(values)} />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Login;
