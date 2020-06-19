import * as React from 'react';

import { useDispatch, useGlobalState } from './state';

const { useCallback } = React;

const Counter = () => {
    const value = useGlobalState('language');
    const dispatch = useDispatch();
    const settingLanguage = useCallback(() => dispatch({ type: 'setLanguage', language: 'english' }), [dispatch]);
    return (
        <div>
            <span>Language: {value}</span>
            <button type="button" onClick={settingLanguage}>
                set it to English
            </button>
        </div>
    );
};

export default Counter;
