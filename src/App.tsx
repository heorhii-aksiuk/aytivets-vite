import AppBar from './components/AppBar';
import AppContainer from './components/AppContainer';
import AppFooter from './components/AppFooter';
import Hero from './components/hero/Hero';
import Section from './components/common/Section';

function App() {
  return (
    <>
      <AppContainer>
        <AppBar />
        <Section>
          <Hero />
        </Section>
        <AppFooter />
      </AppContainer>
    </>
  );
}

export default App;
