import { IconType } from "react-icons";
import { styled } from "../../../../../../stitches.config"

const Subtitle = ({
  icon,
  text
}: { icon: IconType, text: string }) => (
  <Container>
    {icon({ size: 12, color: '#BDBDBD' })}
    <span>{text}</span>
  </Container>
);

const Container = styled('div', {
  display: 'flex',
  gap: 6,
  alignItems: 'center',

  color: '#BDBDBD',

  fontFamily: '$Poppins',
  fontSize: '10px',
  fontWeight: '600',
  lineHeight: '15px',
  letterSpacing: '-0.035em',
});

export default Subtitle
