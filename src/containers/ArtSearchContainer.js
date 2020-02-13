import { connect } from 'react-redux';
import ArtSearch from '../components/ArtSearch';
import { actionSearch, actionResults, actionLoading } from '../actions';
import Axios from 'axios';


// set up mapDispatchToProps with async await for ajax
function mapDispatchToProps(dispatch) {
    return {
        handleClick: async () => {
            dispatch(actionLoading(true));
            const results = await Axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers');
            console.log(results);

            dispatch(actionSearch('sunflowers'));
            dispatch(actionResults(results.data.objectIDs));
            dispatch(actionLoading(false));
        }
    }
}

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(ArtSearch);