import styles from './themeStyles-jss';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Themes from './Themes';
import { bindActionCreators } from 'redux';
import { changeThemeAction } from '../../services/actions'


const mapStateToProps = state => ({
	settings: state.settings
});

const dispatchToProps = dispatch => ({
  changeTheme: bindActionCreators(changeThemeAction, dispatch),
});

const ThemesMapped = connect(
  mapStateToProps,
  dispatchToProps
)(Themes);

export default withStyles(styles)(ThemesMapped);