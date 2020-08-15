import React from 'react';
import styled, { css } from 'styled-components';
import { CONSULT_TYPES } from 'utils/constans';
import { paths } from 'utils/paths';
import DotsAndButton from 'components/molecules/DotsAndButton/DotsAndButton';
import individual from 'assets/images/individual.jpg';
import firm from 'assets/images/firm.jpg';
import arrows from 'assets/images/smallerArrows.jpg';
import { ColumnWrapper, RowWrapper } from 'utils/Wrappers/Wrappers';
import { XlHeader } from 'utils/Headers/Headers';

const BoxWrapper = styled(ColumnWrapper)`
  align-items: center;
  align-content: space-between;
  padding: 30px 80px;
`;

const BoxesWrapper = styled(RowWrapper)`
  align-items: flex-start;
  padding: 30px;
`;

const Icon = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 40px;
  background-image: url(${individual});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  ${({ consultType }) =>
    consultType === CONSULT_TYPES.firm &&
    css`
      background-image: url(${firm});
    `}
`;

const Label = styled(XlHeader)`
  font-weight: 700;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style-image: url(${arrows});
  padding: 0px 0px 20px 40px;
`;

const Item = styled.li`
  padding-left: 10px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.navyblueText};
`;

const items = [
  {
    type: 'individual',
    label: 'Life QM indywidualnie',
    texts: [
      { text: 'Konsultacje indywidualne' },
      { text: 'Life Energy Activator' },
      { text: 'Grupy Moderujące Zmianę' },
    ],
  },
  {
    type: 'firm',
    label: 'Life QM dla firm',
    texts: [{ text: 'Audty Happy Management' }, { text: 'Szkolenia dedykowane' }],
  },
];

const ButtonWrapper = styled.div`
  position: relative;
  left: 60px;

  ${({ consultType }) =>
    consultType === CONSULT_TYPES.firm &&
    css`
      top: 27px;
    `}
`;

const ConsultBox = () => {
  return (
    <>
      <BoxesWrapper>
        {items.map((item) => (
          <>
            <BoxWrapper>
              <Icon consultType={item.type} />
              <Label>{item.label}</Label>
              <List>
                {item.texts.map((textItem) => (
                  <Item>{textItem.text}</Item>
                ))}
              </List>
              <ButtonWrapper consultType={item.type}>
                <DotsAndButton
                  activeColor="blue"
                  path={paths.consultation}
                  side="right"
                  dots="yes"
                />
              </ButtonWrapper>
            </BoxWrapper>
          </>
        ))}
      </BoxesWrapper>
    </>
  );
};

export default ConsultBox;
