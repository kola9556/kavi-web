import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import DotsAndButton from 'components/molecules/DotsAndButton/DotsAndButton';
import Individual from 'assets/images/individual.jpg';
import Firm from 'assets/images/firm.jpg';
import Arrows from 'assets/images/smallerArrows.jpg';
import { ColumnWrapper } from 'utils/Wrappers/Wrappers';
import { XlHeader } from 'utils/Headers/Headers';

const BoxWrapper = styled(ColumnWrapper)`
  align-items: center;
  align-content: space-between;
  padding: 30px 80px;
`;

const Icon = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 40px;
  background-image: url(${Individual});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  ${({ firm }) =>
    firm &&
    css`
      background-image: url(${Firm});
    `}
`;

const Label = styled(XlHeader)`
  font-weight: 700;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style-image: url(${Arrows});
  padding: 0px 0px 20px 40px;
`;

const Item = styled.li`
  padding-left: 10px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};
`;

const Items = {
  individual: [
    { text: 'Konsultacje indywidualne' },
    { text: 'Life Energy Activator' },
    { text: 'Grupy Moderujące Zmianę' },
  ],
  firm: [{ text: 'Audty Happy Management' }, { text: 'Szkolenia dedykowane' }],
};

const ButtonWrapper = styled.div`
  position: relative;
  left: 60px;

  ${({ firm }) =>
    firm &&
    css`
      top: 27px;
    `}
`;

const ConsultBox = ({ type }) => {
  return (
    <>
      <BoxWrapper type={type}>
        {type === 'individual' ? (
          <>
            <Icon />
            <Label>Life QM indywidualnie</Label>
            <List>
              {Items.individual.map(({ text }) => (
                <Item>{text}</Item>
              ))}
            </List>
            <ButtonWrapper>
              <DotsAndButton activeColor="blue" path="/consultation" side="right" dots="yes" />
            </ButtonWrapper>
          </>
        ) : (
          <>
            <Icon firm />
            <Label>Life QM dla firm</Label>
            <List firm>
              {Items.firm.map(({ text }) => (
                <Item>{text}</Item>
              ))}
            </List>
            <ButtonWrapper firm>
              <DotsAndButton activeColor="blue" path="/consultation" side="right" dots="yes" />
            </ButtonWrapper>
          </>
        )}
      </BoxWrapper>
    </>
  );
};

ConsultBox.propTypes = {
  type: PropTypes.oneOf(['individual', 'firm']),
};

ConsultBox.defaultProps = {
  type: 'individual',
};

export default ConsultBox;
