import { StyledImg } from 'pages/NotFound/NotFound.styled';
import { Logo, Text } from 'pages/Register/Register.styled';
import { ROUTES } from 'utils/routes';

const Home = () => {
  return (
    <>
      <Text>
        Hello and welcome to the <Logo to={ROUTES.CONTACTS}>Phonebook</Logo>
      </Text>
      <StyledImg
        src="https://media.tenor.com/CxMpURzxtpYAAAAC/monkey-phone-call.gif"
        alt="Baboon on the phone meme"
      />
    </>
  );
};

export default Home;
