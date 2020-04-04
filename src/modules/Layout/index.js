import Layout from "./Layout.jsx";
import * as actions from "./actions";
import * as selectors from "./selectors";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    age: selectors.getAge(state),
});

const mapDispatchToProps = dispatch => ({
    ageUp: () => dispatch(actions.ageUp()),
    ageDown: () => dispatch(actions.ageDown()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout);