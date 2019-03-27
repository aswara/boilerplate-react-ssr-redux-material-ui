import purple from '@material-ui/core/colors/purple';
import lightBlue from '@material-ui/core/colors/lightBlue';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';
import green from '@material-ui/core/colors/green';

const palette = [
  { name: 'Purple Blue', value: 'purpleBlueTheme' },
  { name: 'Red Silver', value: 'redSilverTheme' },
  { name: 'Indigo Green', value: 'indigoGreenTheme' }
]

const themePalette = {
	purpleBlueTheme: {
		palette: {
		    primary: {
		      light: purple[300],
		      main: purple[500],
		      dark: purple[700],
		    },
		    secondary: {
		      light: lightBlue[300],
		      main: lightBlue[500],
		      dark: lightBlue[700],
		    },
		},
		typography: {
	        useNextVariants: true,
    	},
	},
	redSilverTheme: {
		palette: {
		    primary: {
		      light: red[300],
		      main: red[500],
		      dark: red[700],
		    },
		    secondary: {
		      light: grey[300],
		      main: grey[500],
		      dark: grey[700],
		    },
		},
		typography: {
	        useNextVariants: true,
    	},
	},
	indigoGreenTheme: {
		palette: {
		    primary: {
		      light: indigo[300],
		      main: indigo[500],
		      dark: indigo[700],
		    },
		    secondary: {
		      light: green[300],
		      main: green[500],
		      dark: green[700],
		    },
		},
		typography: {
	        useNextVariants: true,
    	},
	},
}

export { themePalette, palette };