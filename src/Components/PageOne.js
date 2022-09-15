import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Header>
        <S.H1>FINAL ENGLISH CHALLENGE</S.H1>
      </S.Header>
      <S.Section>
        <S.H2>What "HTTPS" means?</S.H2>
        <p>Protocolo de Transferência de Hipertexto</p>
        <S.H2>Stateless is...?</S.H2>
        <p>
          é o estado de percuso da linguagem entre servidor, Protocolo e
          cliente. sem mudança.
        </p>
        <S.H2>Subjective pronouns are used to indicate what?</S.H2>
        <p>Eles são usados ​​para indicar o sujeito da frase.</p>
        <S.H2>Could, Should and Would are know as...?</S.H2>
        <p>
          São conhecidos como verbos moldais, são usados ​​para expressar
          possibilidades,o trio educado.
        </p>
        <S.H2>What Should means?</S.H2>
        <p>
          Em português significa: "deveria" significa algo que deveria ter
          ocorrido.
        </p>
        <S.H2>*EM PORTUGUÊS* - Construa essas seguintes frases em inglês:</S.H2>
      </S.Section>
      <S.Div>
        <S.Ul>
          <li>1 - Vamos falar coisas ótimas sobre você!</li>
          <p>We will say wonderfull things about you!</p>
          <li>2 - Ele vai para a Bahia mês que vem</li>
          <p>He is going to Bahia next month.</p>
          <li>3 - Ela estará ai amanhã</li>
          <p>She will be there tomorrow</p>
        </S.Ul>
      </S.Div>
      <S.Box>
        <S.H3>Who is the subject of the sentence?</S.H3>
        <S.P>They gime me all the power</S.P>
        <p>They</p>
        <S.H3>Conjugate the verb to be in the past tense (Em inglês)</S.H3>
        <li>I was</li>
        <li>You were</li>
        <li>He was</li>
        <li>She was</li>
        <li>It was</li>
        <li>We were</li>
        <li>You were</li>
        <li>They were</li>
        <S.H3>
          Build two sentences using "this" and "that", in the plural (Em inglês)
        </S.H3>
        <p>Let's take theses apples and load in the truck</p>
        <p>We love those guys!</p>
      </S.Box>
    </S.Container>
  );
}
