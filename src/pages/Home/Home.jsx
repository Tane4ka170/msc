import {
  Card,
  CardList,
  CardTitle,
  Section,
  StyledButton,
  StyledContainer,
  StyledLink,
  Title,
} from "./Home.styled";
import { Typography } from "@mui/material";

function Home() {
  return (
    <StyledContainer>
      <Title variant="h3" gutterBottom>
        Welcome to the Archive of Millenium
      </Title>
      <Typography variant="body1" paragraph>
        Explore the songs that have participated in the Millenium Song Contest,
        a simulation of the Eurovision Song Contest. Discover a wide range of
        music from different genres and artists, all showcased in our unique
        collection.
      </Typography>
      <nav>
        <StyledButton variant="contained" component={StyledLink} to="/songs">
          View All Songs
        </StyledButton>
      </nav>
      <Section>
        <Typography variant="h4" gutterBottom>
          Explore by Categories
        </Typography>
        <CardList>
          <Card>
            <CardTitle>Numbers (0-9)</CardTitle>
            <StyledLink to="/songs/numbers">Explore Songs</StyledLink>
          </Card>
          <Card>
            <CardTitle>Latin Letters (A-Z)</CardTitle>
            <StyledLink to="/songs/latin">Explore Songs</StyledLink>
          </Card>
          <Card>
            <CardTitle>Cyrillic Letters (А-Я)</CardTitle>
            <StyledLink to="/songs/cyrillic">Explore Songs</StyledLink>
          </Card>
        </CardList>
      </Section>
      <Section>
        <Typography variant="h4" gutterBottom>
          About Millenium
        </Typography>
        <Typography variant="body1" paragraph>
          Millenium is a fan-based simulation of the Eurovision Song Contest,
          featuring a diverse range of songs and performances. Our archive
          allows you to delve into the musical world created by this unique
          event.
        </Typography>
      </Section>
    </StyledContainer>
  );
}

export default Home;
