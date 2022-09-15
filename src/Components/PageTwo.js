import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Section>
        <S.H2>How many tenses does the verb "do" have?</S.H2>
        <p>Cinco modos verbais.</p>
        <S.H2>What does the verb "Have" indicate as a main position?</S.H2>
        <p>Indica a posse de algo.</p>
        <S.H2>
          Create two sentences with cognate words for "joy" and "sadness"
        </S.H2>
        <p>Hoje estou muito feliz com a notícia.</p>
        <p>Atualmente ele está se sentindo tão triste.</p>
        <S.H2>
          What is the difference between the verb "will" and "going to"?
        </S.H2>
        <p>
          Usamos will para indicar o futuro e usamos going to expressar um
          futuro que foi planejado e irá acontecer.
        </p>
        <S.H2>Name four interrogative pronouns (Em inglês)</S.H2>
        <p>What, who, wich, whoose, whom.</p>
        <S.H2>How many types of adverbs are there in English?</S.H2>
        <p>
          Existem cinco tipos de advérbios (maneira, tempo, frequência, lugar,
          intensificador).
        </p>
      </S.Section>
      <S.Box>
        <S.H3>Create a sentence for an adverb of time (Em inglês)</S.H3>
        <p>I'm going to New York now!!!</p>
        <S.H3>Create a mnemonic phrase (Em inglês)</S.H3>
        <p>The rain left when the train set the station. </p>
      </S.Box>
    </S.Container>
  );
}
