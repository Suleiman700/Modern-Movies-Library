import React, {useState} from 'react';
import Select from 'react-select';
import Languages from '../utils/languages.js';

const LanguageSelection = ({ option, setOption }) => {
    function handleChange(selectedOption) {
        // setOption(selectedOption);
        Languages.storeSelectedLanguageCode(selectedOption.value)
        window.location.reload(false);
    }

    const [selectedLanguageData, setSelectedLanguageData] = useState({
        value: Languages.getSelectedLanguageCode()??'en',
        label: Languages.getSelectedLanguageName(),
    });

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
            placeholder="Select display language..."
            value={selectedLanguageData}
            onChange={handleChange}
            options={options}
            isSearchable={false}
        />
    );
};

// build options using languages settings
const options = Languages.data.map((language) => ({
    value: language.code,
    label: language.name,
}));

export default LanguageSelection;
