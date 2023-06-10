import PropTypes from 'prop-types';
import { TitleFindInput, InputFindField } from './ContactFilter.styled';

export const Filter = ({ value, changeFilter }) => {
    return (
        <TitleFindInput>
            Find contacts by name
            <InputFindField type="text" value={value} onChange={changeFilter} />
        </TitleFindInput>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
};