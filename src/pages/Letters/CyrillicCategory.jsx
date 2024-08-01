import {
  Container,
  Heading,
  List,
  ListItem,
  StyledLink,
} from "./Letters.styled";

const cyrillicLetters = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "І", // Українська літера "І"
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я",
];

function CyrillicCategory() {
  return (
    <Container>
      <Heading>Cyrillic Letters (А-Я)</Heading>
      <List>
        {cyrillicLetters.map((letter) => (
          <ListItem key={letter}>
            <StyledLink to={`/songs/cyrillic/${letter}`}>{letter}</StyledLink>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default CyrillicCategory;
