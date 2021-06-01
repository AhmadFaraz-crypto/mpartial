import styled from 'styled-components';

const variantsBg = {
  primary:
    '#3ac280 0 0 no-repeat padding-box;',
};

const variantColors = {
  primary: '#e8eaed',
};

const fontSizes = {
  rg: '12px',
};

const lineHeights = {
  rg: '16px',
};

const paddings = {
  rg: '5px 25px',
};

const Button = styled.button`
  display: ${props => (props.icon || props.loading ? 'flex' : 'block')};
  align-items: center;
  font-weight: 600;
  color: ${props => variantColors[props.variant]};
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: ${props => variantsBg[props.variant]};
  font-size: ${props => fontSizes[props.size]};
  line-height: ${props => lineHeights[props.size]};
  border-radius: 20px;
  padding: ${props => paddings[props.size]};
  outline: none;
  border: none;
  border-color: #3ac280;
  height: 30px;
`;

export default Button;
