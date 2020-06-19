import React from 'react'
import styled from "styled-components";
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const LanguageSelector: React.FC = () => {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
    }

    return(
    <Wrapper>
        <ToggleButtonGroup name="options" type="radio" defaultValue={"ch"} onChange={handleLanguageChange} >
            <ToggleButton type="checkbox" name="radio" value={"ch"}>
                中文
            </ToggleButton>
            <ToggleButton type="checkbox" name="radio" value={"en"}>
                English
            </ToggleButton>
        </ToggleButtonGroup>
    </Wrapper>
    );
}
const Wrapper = styled.div`
  display: flex;
  min-height: 50px;
  padding: 15px;
  flex-direction: row-reverse;
`;