import React from 'react';
import { Helmet } from 'react-helmet';
import RadioGroup from '@material-ui/core/RadioGroup';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PapperBlock from '../../components/PapperBlock';
import ThemeThumb from './ThemeThumb';
import { palette } from '../../utils/themePalette';

class Themes extends React.Component {
  state = {
    value: 'purpleRedTheme',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.changeTheme(event.target.value);
  };

  render() {
    const title = 'Admin' + ' - Choose Theme';
    const description = 'Admin';
    const { classes, settings } = this.props;

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title="Themes" desc="Choose App Theme for header, icon, button and many more. Theme built with 2 element color, that are Primary and Secondary color">
          <Grid container>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              className={classes.group}
              value={settings.theme}
              onChange={this.handleChange}
            >
              {
                palette.map((item, index) => (
                  <FormControlLabel key={index.toString()} value={item.value} control={<ThemeThumb />} label={item.name} />
                ))
              }
            </RadioGroup>
          </Grid>
        </PapperBlock>
      </div>
    );
  }
}

Themes.propTypes = {
  classes: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};



export default Themes;
