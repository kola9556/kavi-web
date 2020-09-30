import React from 'react';
import blogPost1 from 'assets/images/blogPost1.jpg';
import blogPost2 from 'assets/images/blogPost2.jpg';
import blogPost3 from 'assets/images/blogPost3.jpg';
import blogPostMain from 'assets/images/blogPostMain.jpg';
import howToPlan from 'assets/images/howToPlan.jpg';
import styled from 'styled-components';
import { media } from 'utils';
import { MainText } from 'utils/Headers';

const StyledMainText = styled(MainText)`
  ${media.desktop`
    font-size: 2rem;
  `}
`;
const Image = styled.div`
  width: 25rem;
  height: 15rem;
  margin: 2rem 0;
  background-image: url(${({ postImages }) => postImages});
  background-size: cover;
  background-position: 50% 50%;

  ${media.desktop`
    width: 80rem;
    height: 50rem;
    margin: 4rem 0;
  `}
`;

export const blogPosts = [
  {
    id: 1,
    mainImage: blogPostMain,
    title: 'Dwa kroki do przodu, jeden do tyłu. "Czy ja gdzieś dojdę!?"',
    category: 'lqm',
    date: '25/08/2020',
    text: (
      <>
        <StyledMainText>
          Mieć cel – to jedno z najważniejszych dążeń współczesnego człowieka. Jeśli go mamy, to
          jakby naturalnie dążymy do jego osiągnięcia. Cele nadają sens naszemu życiu, zwłaszcza
          wtedy, gdy to my je sobie postawiliśmy. Życie bez celu zdaje się bezsensowne. Często
          powoduje, że brakuje nam życiowego napędu, nasz poziom energii spada, wkrada się
          zniechęcenie, niezdecydowanie, stagnacja.
          <br />
          <br />
          Cel, a przede wszystkim dążenia do jego osiągnięcia to temat, który bardzo często
          poruszany jest zarówno w rozmowach między ludźmi, jak i licznych publikacjach dotyczących
          właśnie tej tematyki. Mają one pomóc czytelnikom podnieść się po upadku, zmotywować do
          dalszej walki i zaangażowania.
        </StyledMainText>
        <Image postImages={blogPost1} />
        <StyledMainText>
          Zdarza się jednak i tak, że nasz cel (np. zawodowy) nie jest sprecyzowany. Zastanawiamy
          się, jak to się stało, że poszliśmy w tę stronę, a nie w inną. Może się to zdarzyć
          każdemu, bez względu na wiek. Co wtedy? Często presja otoczenia nie pozwala nam zmienić
          kierunku, który obraliśmy. Boimy się reakcji rodziny, utraty prestiżu związanego z funkcją
          społeczną, obniżenia zarobków itd. Czasami boimy się zacząć od początku, zostawić to, co
          osiągnęliśmy, bo nie wiemy czy tym razem odniesiemy sukces. Boimy się porażki. Tego, że
          nasz kolejny wybór również nie będzie trafny. Nie twierdzę, że te lęki i obawy są
          bezpodstawne, ale jeśli nie spróbujemy czegoś zmienić, nie podejmiemy ryzyka to możemy
          żałować tego do końca życia. Zastanawiać się każdego dnia, co by było gdybyśmy jednak
          zaryzykowali… <br />
          <br />
          Zmiany w życiu – kiedy słyszałam to sformułowanie jakoś odruchowo myślałam o pokonywaniu
          kolejnych przeszkód, o podnoszeniu się z porażki i dalszym kroczeniu na przód. Ostatnio
          przyszła mi myśl, że zmiana to także krok wstecz. Nigdy wcześniej krok wstecz nie kojarzył
          mi się ze spełnianiem siebie i osiąganiem celów. Dziś mam wrażenie, że bardzo się myliłam.
          <br />
          <br />
          Krok wstecz może być tak samo ważny i potrzebny jak krok w przód. Mimo iż pozornie oddala
          nas od czegoś, to dzięki niemu możemy poszerzyć swoją perspektywę, zauważyć więcej,
          przyjrzeć się własnemu życiu z pewnej odległości, ocenić, czy to co robimy rzeczywiście
          jest dla nas ważne, czy daje nam poczucie sensu i spełnienia. Gdy patrzymy na coś z bliska
          często widzimy przede wszystkim szczegóły. Dopiero pewien dystans, odległość sprawiają, że
          widzimy całościowo, uwzględniając także kontekst.
        </StyledMainText>
        <Image postImages={blogPost2} />
        <StyledMainText>
          Ważne, aby podczas tego kroku myśleć o sobie, skupić się na własnych potrzebach i
          odczuciach, a nie kierować się tym, co powiedzą lub pomyślą inni. To, co w ocenie innych
          jest naszą porażką, wypadnięciem z gry, zasłużonym lub niezasłużonym darem losu może być
          dla nas nie tylko świadomym i dobrowolnym wyborem, ale także drogą do szczęścia. <br />
          <br />
          Nie jest rzeczą łatwą podjąć decyzję o zejściu stopień niżej, powrocie do jakiegoś punktu
          w życiu, w którym już byliśmy i który nie do końca odpowiadał naszym potrzebom i
          oczekiwaniom. Czasem warto jednak podjąć to ryzyko, oczywiście jeśli widzimy w tym sens.
        </StyledMainText>
        <Image postImages={blogPost3} />
        <StyledMainText>
          Niektóre decyzje podejmuje się szybko, z kolei innym poświęcamy wiele dni, tygodni, a
          nawet miesięcy. Ważne, aby na każdą decyzję przeznaczyć tyle czasu, ile potrzebujemy. Czas
          ma być dla nas, a nie my dla niego. Nie spiesz się! Do każdej decyzji trzeba dojrzeć.
          Lepiej zawrócić na pierwszym skrzyżowaniu i jechać w inną stronę, niż mimo braku pewności
          gnać do przodu – wtedy powrót będzie dużo trudniejszy. Jeśli zawrócisz dziś – może
          dotrzesz dużo dalej.
        </StyledMainText>
      </>
    ),
  },
  {
    id: 2,
    mainImage: howToPlan,
    title: 'Jak zaplanować dzień',
    category: 'lqm',
    date: '27/08/2020',
    text: (
      <>
        <StyledMainText>
          „Od tego, jak spędzamy każdy dzień, zależy to, jak spędzamy całe życie”. To zdanie,
          chociaż tak oczywiste, może wywołać w nas pewien niepokój. Szczególnie jeśli ostatnie dni
          spędziłyśmy na oglądaniu Netflixa lub scrollowaniu Social Mediów. Oczywiście nie chodzi o
          to, że teraz musimy zostać boginiami produktywności a każdy dzień wyciskać jak cytrynę, do
          ostatniej kropli. Ale warto jest zastanowić się, czy aby to, jak wygląda nasz zwykły dzień
          choć trochę przybliża nas do osiągnięcia wymarzonych celów.
          <br />
          <br />
          Co zatem zrobić, aby zwiększyć swoją produktywność a jednocześnie wciąż mieć czas na
          robienie rzeczy, które się lubi? Zacznij planować! Brzmi jak banał, prawda? Nic bardziej
          mylnego! Planowanie jest kluczem do skutecznego zarządzania czasem. Trudno czuć się
          zorganizowanym i panować nad wszystkim, jeśli nie jesteś to tego przygotowana. Sama, na
          własnej skórze, przekonałam się, jak ważne jest planowanie harmonogramu z wyprzedzeniem.
          Posiadanie jasnego planu dnia pomaga mi w pełni wykorzystać czas i faktycznie osiągnąć
          ważne dla mnie rzeczy w życiu.
        </StyledMainText>
        <Image postImages={blogPost1} />
        <StyledMainText>
          Zdarza się jednak i tak, że nasz cel (np. zawodowy) nie jest sprecyzowany. Zastanawiamy
          się, jak to się stało, że poszliśmy w tę stronę, a nie w inną. Może się to zdarzyć
          każdemu, bez względu na wiek. Co wtedy? Często presja otoczenia nie pozwala nam zmienić
          kierunku, który obraliśmy. Boimy się reakcji rodziny, utraty prestiżu związanego z funkcją
          społeczną, obniżenia zarobków itd. Czasami boimy się zacząć od początku, zostawić to, co
          osiągnęliśmy, bo nie wiemy czy tym razem odniesiemy sukces. Boimy się porażki. Tego, że
          nasz kolejny wybór również nie będzie trafny. Nie twierdzę, że te lęki i obawy są
          bezpodstawne, ale jeśli nie spróbujemy czegoś zmienić, nie podejmiemy ryzyka to możemy
          żałować tego do końca życia. Zastanawiać się każdego dnia, co by było gdybyśmy jednak
          zaryzykowali… <br />
          <br />
          Zmiany w życiu – kiedy słyszałam to sformułowanie jakoś odruchowo myślałam o pokonywaniu
          kolejnych przeszkód, o podnoszeniu się z porażki i dalszym kroczeniu na przód. Ostatnio
          przyszła mi myśl, że zmiana to także krok wstecz. Nigdy wcześniej krok wstecz nie kojarzył
          mi się ze spełnianiem siebie i osiąganiem celów. Dziś mam wrażenie, że bardzo się myliłam.
          <br />
          <br />
          Krok wstecz może być tak samo ważny i potrzebny jak krok w przód. Mimo iż pozornie oddala
          nas od czegoś, to dzięki niemu możemy poszerzyć swoją perspektywę, zauważyć więcej,
          przyjrzeć się własnemu życiu z pewnej odległości, ocenić, czy to co robimy rzeczywiście
          jest dla nas ważne, czy daje nam poczucie sensu i spełnienia. Gdy patrzymy na coś z bliska
          często widzimy przede wszystkim szczegóły. Dopiero pewien dystans, odległość sprawiają, że
          widzimy całościowo, uwzględniając także kontekst.
        </StyledMainText>
        <Image postImages={blogPost2} />
        <StyledMainText>
          Ważne, aby podczas tego kroku myśleć o sobie, skupić się na własnych potrzebach i
          odczuciach, a nie kierować się tym, co powiedzą lub pomyślą inni. To, co w ocenie innych
          jest naszą porażką, wypadnięciem z gry, zasłużonym lub niezasłużonym darem losu może być
          dla nas nie tylko świadomym i dobrowolnym wyborem, ale także drogą do szczęścia. <br />
          <br />
          Nie jest rzeczą łatwą podjąć decyzję o zejściu stopień niżej, powrocie do jakiegoś punktu
          w życiu, w którym już byliśmy i który nie do końca odpowiadał naszym potrzebom i
          oczekiwaniom. Czasem warto jednak podjąć to ryzyko, oczywiście jeśli widzimy w tym sens.
        </StyledMainText>
        <Image postImages={blogPost3} />
        <StyledMainText>
          Niektóre decyzje podejmuje się szybko, z kolei innym poświęcamy wiele dni, tygodni, a
          nawet miesięcy. Ważne, aby na każdą decyzję przeznaczyć tyle czasu, ile potrzebujemy. Czas
          ma być dla nas, a nie my dla niego. Nie spiesz się! Do każdej decyzji trzeba dojrzeć.
          Lepiej zawrócić na pierwszym skrzyżowaniu i jechać w inną stronę, niż mimo braku pewności
          gnać do przodu – wtedy powrót będzie dużo trudniejszy. Jeśli zawrócisz dziś – może
          dotrzesz dużo dalej.
        </StyledMainText>
      </>
    ),
  },
];
