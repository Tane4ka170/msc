import {
  Container,
  Heading,
  List,
  ListItem,
  StyledLink,
} from "./Letters.styled";

const numbers = Array.from({ length: 10 }, (_, i) => i.toString());

function NumbersCategory() {
  return (
    <Container>
      <Heading>Numbers (0-9)</Heading>
      <List>
        {numbers.map((number) => (
          <ListItem key={number}>
            <StyledLink to={`/songs/numbers/${number}`}>{number}</StyledLink>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default NumbersCategory;
