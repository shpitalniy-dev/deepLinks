import Routing from "./Routing.jsx";
import * as actions from "./actions";
import * as selectors from "./selectors";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    accounts: selectors.getAccounts(state),
});

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Routing);