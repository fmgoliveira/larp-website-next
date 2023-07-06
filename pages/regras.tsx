import Head from 'next/head'
import { Button, Card, Col, Collapse, Container, Grid, Link, Row, Spacer, Text, useTheme } from '@nextui-org/react';
import CustomNavbar from '@/components/Navbar';
import { BsArrowDownShort } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import Footer from '@/components/Footer';

export default function Home() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [staff, setStaff] = useState<any[]>([]);

  return (
    <>
      <Head>
        <title>Los Angeles RP - Regras</title>
      </Head>
      <CustomNavbar />

      <Container css={{ margin: '2rem auto 8rem auto' }}>
        <Row>
          <Col>
            <Text size={'$5xl'} css={{
              textGradient: `45deg, ${theme.theme?.colors.secondary.value} -20%, ${theme.theme?.colors.primary.value} 100%`,
            }} weight='semibold'>Regras</Text>
            <Spacer y={.5} />
            <Text size={'$md'}>Roleplay é uma forma de jogo em que os jogadores muitas vezes fingem ser outra pessoa, em épocas diferentes ou nos dias atuais. Diferente de outros jogos, como RPG, o Role Playing aparenta ser um dos tipos de jogos com maior jogabilidade, por trabalhar somente com a criatividade dos jogadores.</Text>
            <Text size={'$md'}><em>Não cumprir qualquer uma destas regras pode acabar em Avisos, Serviço Comunitário dentro do RP ou Bans Temporários ou Permanentes. <b>Apenas são aceites denúncias com provas (vídeos/prints).</b></em></Text>
            <Text size={'$lg'}><b>É ESTRITAMENTE PROIBIDO qualquer tipo de ASSÉDIO, ABUSO, RACISMO, HOMOFOBIA e PRECONCEITO (Raça, Cor, Religião, Bullying, etc...), passível de BAN PERMANENTE e sem direito a recurso.</b></Text>
          </Col>
        </Row>

        <Row css={{ margin: '2rem auto' }}>
          <Col>
            <Text size={'$2xl'} color={'primary'} weight='semibold'>Regras Básicas de RP</Text>
            <Spacer y={.5} />
            <Collapse.Group>
              <Collapse title='1. Metagaming'>
                <Text size={'$md'}>É estritamente proibida a realização de Metagaming, ou seja, utilizar informações obtidas fora de personagem em cenários dentro de personagem.</Text>
                <Text size={'$md'}><em>Ex: Assistir a streams e usar isso para benefício próprio.</em></Text>
              </Collapse>
              <Collapse title='2. Powergaming'>
                <Text size={'$md'}>É estritamente proibida a realização de PowerGaming, ou seja, realizar ações que seriam impossíveis de realizar na vida real.</Text>
                <Text size={'$md'}><em>Ex: Ter um acidente grave e continuar a vida como se nada fosse.</em></Text>
              </Collapse>
              <Collapse title='3. VDM (Vehicle DeathMatch)'>
                <Text size={'$md'}>É estritamente proibida a realização de VDM, ou seja, o ato deliberado de atropelar um ou mais jogadores. </Text>
                <Text size={'$md'}><em>Ex: Utilizar o carro como arma de ataque.</em></Text>
              </Collapse>
              <Collapse title='4. PainRP'>
                <Text size={'$md'}> É obrigatório realizar PainRP, ou seja, a demonstração da reação da personagem à dor.</Text>
                <Text size={'$md'}><em>Ex de NoPainRP: Ser agredido e ignorar a agressão, não fingindo a dor.</em></Text>
              </Collapse>
              <Collapse title='5. FearRP'>
                <Text size={'$md'}>É obrigatório realizar FearRP, ou seja, a demonstração de medo perante uma situação que exige o mesmo.</Text>
                <Text size={'$md'}><em>Ex de NoFearRP: Ser ameaçado com uma arma e ignorar a abordagem.</em></Text>
              </Collapse>
              <Collapse title='6. RDM (Random Deathmatch)'>
                <Text size={'$md'}>É estritamente proibido a realização de RDM, ou seja, a prática matar outros jogadores sem um motivo válido. </Text>
                <Text size={'$md'}><em>Ex de RDM: Andar ao tiro a toda a gente que aparece à frente.</em></Text>
              </Collapse>
              <Collapse title='7. SenseRP'>
                <Text size={'$md'}> É obrigatório o SenseRP, ou seja, todos os atos de uma personagem têm de fazer sentido para o papel que desempenha</Text>
                <Text size={'$md'}><em>Ex de NonSenseRP: Ser médico e andar armado a matar pessoas.</em></Text>
              </Collapse>
              <Collapse title='8. Cop Bait'>
                <Text size={'$md'}>É estritamente proibido realizar Cop Bait, ou seja, é proibido envolver os polícias numa perseguição ou situação ativa sem um motivo válido para o mesmo.</Text>
              </Collapse>
              <Collapse title='9. Combat Log'>
                <Text size={'$md'}>É estritamente proibido realizar Combat Log, ou seja, é proibido deslogar em uma situação de RP ou deslogar para evitar um RP.</Text>
              </Collapse>
              <Collapse title='10. Valor à Vida'>
                <Text size={'$md'}>Não tomar atitudes que não farias na vida real. Valorizar a vida e a dos outros em primeiro lugar. </Text>
                <Text size={'$md'}><em>Ex: Não reagir a um assalto onde duas pessoas estão com uma arma apontada na sua cabeça.</em></Text>
              </Collapse>
              <Collapse title='11. DarkRP / GrossRP'>
                <Text size={'$md'}> Todas as ações que começam a partir para o lado pessoal ou que possa causar algum tipo de gatilho/trigger a algum jogador em volta do RP, direta ou indiretamente, é passível de punição.</Text>
                <Text size={'$md'}><em>Ex: Animações indesejadas, Piropos insistentes ou desrespeitosos, Assédio, Abuso, Racismo, Homofobia/LGBTfobia, Preconceito (Raça, Cor, Religião, Bullying, etc), ...</em></Text>
              </Collapse>
            </Collapse.Group>
          </Col>
        </Row>

        <Row css={{ margin: '2rem auto' }}>
          <Col>
            <Text size={'$2xl'} color={'primary'} weight='semibold'>Proibições</Text>
            <Spacer y={.5} />
            <ol>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibida a utilização de hacks, abuso de mecânicas ou abuso de bugs.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido matar, roubar ou cometer qualquer atividade ilícita em SafeZones, excepto quando o RolePlay providencia a que tal aconteça.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido abusar ou insultar qualquer pessoa no chat in-game ou Discord.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido matar pessoas sem haver um motivo, e mínimo de RP.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido assaltar um indivíduo caso saibas claramente que o mesmo acabou de entrar na cidade.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido usar uma personagem default (vulgo Ruca).</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido o RP de Estupro, Canibalismo, Pedofilia, Necrofilia, Racismo ou Assédio.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido andar com pneus furados em motas, sendo possível andar apenas com 1 pneu furado em carros.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido obrigares a alguém a ficar num sítio a trabalhar sem ser da vontade do jogador.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido o assalto a qualquer tipo de jogador de trabalhos Non-whitelist que esteja de serviço, fardado e com a viatura de trabalho. Nota: Empregos Whitelist de serviços essenciais não podem ser raptados em serviço.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido raptar Polícias sem qualquer motivo ou com o intuito de negociar armamento ou dinheiro da Policia.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido qualquer tipo de RolePlay agressivo no Hospital e/ou com uma identidade medica.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido o uso de blips para evitar um RP.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>Não podes obrigar ninguém a dar-te nenhum item/arma.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>Civis são totalmente proibidos de andar vestidos de igual, pois irá fazer com que sejam confundidos com uma organização.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido disparar enquanto condutor de um veículo em andamento. É possível disparar caso o veículo esteja numa velocidade considerada baixa/quase parada.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido mira fixa e modos gráficos que beneficiem o PvP e tomem vantagem para com os outros jogadores.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido falar fora de RP sem estar na presença de um Staff.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido sair fora de RP a meio de RP ou fazer report a meio de RP.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido o uso indevido de tranquilizantes. Tranquilizantes só podem ser utilizados se a pessoa estiver de costas, necessário respeitar o FearRP de qualquer forma.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido utilizar farda, veículos ou equipamento de serviços públicos para fins não destinados à realização do mesmo.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido Serviços públicos realizar atividades criminosas ou qualquer tipo de corrupção, excepto quando aprovado por Staff em contexto de RP Aprovado.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido provocar NPC&apos;s com intuito de matar os mesmos. É proibido igualmente matar NPC&apos;s sem qualquer tipo de sentido (NPC&apos;s são civis que fazem parte do RolePlay).</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}> É proibido fugir á Policia sem um motivo valido (ter arma no inventário não é motivo válido)</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido o uso de plataformas externas (Discord e outros), sendo este admissível, e não considerado metagaming, em contextos em que tenha e se exijam aplicações práticas em RP, nomeadamente em instituições centralizadas como Tribunal, Polícia e INEM (ex: emissão de documentação, endereçamento de e-mails formais, recolha de assinaturas, atestados, etc.). A interação em RP com recurso a esse tipo de documentação, e apenas nesse contexto, é permitida.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido reviver um morto a tiro.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido fazer spam de chamadas ou mensagens para qualquer tipo de serviço.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido assaltar habitações no próprio bairro e em casas habitadas.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido roupa balística fora de roleplays agressivos.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido graffitis em safe-zones.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É proibido abordar a policia enquanto a mesma esta numa abordagem.</Text></li>
            </ol>
          </Col>
        </Row>

        <Row css={{ margin: '2rem auto' }}>
          <Col>
            <Text size={'$2xl'} color={'primary'} weight='semibold'>Obrigações</Text>
            <Spacer y={.5} />
            <ol>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É obrigatório promover e cooperar no RP ao máximo.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>É obrigatório usar o SenseRP nas situações que não estão contempladas nas regras e em situações que possam quebrar as regras.</Text></li>
              <li><Text css={{marginLeft: '5px'}} size={'md'}>Todos os RPs eleborados devem ser autorizados previamente por Staff (PK, CK, e todos os RPs que possam eventualmente roçar o não-cumprimento das regras)</Text></li>
            </ol>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}
