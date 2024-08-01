import {
  Container,
  Heading,
  List,
  ListItem,
  StyledLink,
} from "./Letters.styled";

const latinLetters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
); // A-Z

function LatinCategory() {
  return (
    <Container>
      <Heading>Latin Letters (A-Z)</Heading>
      <List>
        {latinLetters.map((letter) => (
          <ListItem key={letter}>
            <StyledLink to={`/songs/latin/${letter}`}>{letter}</StyledLink>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default LatinCategory;
