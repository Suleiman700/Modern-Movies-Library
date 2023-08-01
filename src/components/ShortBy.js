import React from 'react';
import Select from 'react-select';
import Languages from '../utils/languages.js';

const SortBy = ({option, setOption}) => {
    function handleChange(selectedOption) {
        setOption(selectedOption);
    }

    return (
        <Select
            theme={theme => ({
                ...theme,
                borderRadius: 5,
                width: '50',
                colors: {
                    ...theme.colors,
                    primary25: 'var(--color-primary-lighter)',
                    primary: 'var(--color-primary)',
                },
            })}
            value={option}
            onChange={handleChange}
            options={options}
            isSearchable={false}
        />
    );
};

const options = [
    {value: 'popularity.desc', label: Languages.getSelectedLanguageTranslation('popularity')},
    {value: 'vote_average.desc', label: Languages.getSelectedLanguageTranslation('votes_average')},
    {value: 'vote_average.desc', label: Languages.getSelectedLanguageTranslation('highest_rating')},
    {value: 'original_title.asc', label: Languages.getSelectedLanguageTranslation('title')},
    {value: 'release_date.desc', label: Languages.getSelectedLanguageTranslation('release_date')},
];

export default SortBy;
