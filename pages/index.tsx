import Head from 'next/head'
import { Button, Card, Col, Container, Grid, Link, Row, Spacer, Text, useTheme } from '@nextui-org/react';
import CustomNavbar from '@/components/Navbar';
import { BsArrowDownShort } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import Footer from '@/components/Footer';

export default function Home() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [staff, setStaff] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/equipa').then(res => res.json()).then(data => setStaff(data));
  }, []);

  return (
    <>
      <Head>
        <title>Los Angeles RP</title>
      </Head>
      <CustomNavbar />
      <div style={{ marginTop: '-76px', maxHeight: '100vh' }}>
        <Row fluid justify='center' align='center' css={{ height: '100vh' }}>
          <video width={'100%'} autoPlay muted loop style={{
            position: 'absolute',
            zIndex: 1,
            top: 0,
            left: 0,
            objectFit: 'cover',
            height: '100vh',
            width: '100vw',
          }}>
            <source src='/assets/img/trailer.mp4' type='video/mp4' />
          </video>
          <div className="shadow" style={{
            position: 'absolute',
            zIndex: 2,
            top: 0,
            left: 0,
            objectFit: 'cover',
            height: '100vh',
            width: '100vw',
            background: 'rgba(0,0,0,.6)',
          }}></div>
          <Container css={{ zIndex: 3 }}>
            <Row>
              <Col>
                <Text size={'$2xl'} css={{
                  textGradient: `45deg, ${theme.theme?.colors.secondary.value} -20%, ${theme.theme?.colors.primary.value} 100%`,
                  textAlign: 'center',
                }} weight='semibold'>#SÊ ÚNICO</Text>
                <Text size={'$8xl'} css={{ textAlign: 'center' }} weight={'bold'}>Los Angeles RP</Text>
                <Spacer y={1.5} />
                <Button bordered color={'primary'} size='lg' css={{ margin: '0 auto' }} href='#sobre' as={Link} iconRight={<BsArrowDownShort />} auto>Anda conhecer-nos</Button>
              </Col>
            </Row>
          </Container>
        </Row>
      </div>

      <ModalVideo
        channel="custom"
        isOpen={isOpen}
        url={'/assets/img/trailer.mp4'}
        onClose={() => setIsOpen(false)}
      />

      <Container css={{ margin: '8rem auto' }} id='sobre'>
        <Grid.Container gap={4}>
          <Grid md={12} lg={6}>
            <Card isHoverable isPressable onClick={() => setIsOpen(true)}>
              <Card.Image src="/assets/img/thumb.png" objectFit='cover' width={'100%'} />
            </Card>
          </Grid>
          <Grid md={12} lg={6} justify='space-between' alignItems='center'>
            <div>
              <Text size={'$4xl'} css={{
                textGradient: `45deg, ${theme.theme?.colors.secondary.value} -20%, ${theme.theme?.colors.primary.value} 100%`,
              }} weight='semibold' id='sobre'>Quem somos?</Text>
              <Spacer y={.5} />
              <Text size={'$lg'}>Somos uma comunidade apaixonada por criar histórias e personagens no universo do GTA V. Aqui podes explorar a cidade de Los Angeles, interagir com outros jogadores, participar em eventos e missões, e muito mais. O nosso servidor está aberto a todos os níveis de experiência, desde iniciantes a veteranos. Temos regras e sistemas para garantir um ambiente divertido e respeitado por todos. Se te queres juntar a nós, basta transferir o FiveM e entrar no nosso servidor de discord. Esperamos ver-te em breve!</Text>
            </div>
          </Grid>
        </Grid.Container>
      </Container>

      <Container css={{ margin: '8rem auto' }} id='equipa'>
        <Row>
          <Col>
            <Text size={'$4xl'} css={{
              textGradient: `45deg, ${theme.theme?.colors.secondary.value} -20%, ${theme.theme?.colors.primary.value} 100%`,
            }} weight='semibold'>A nossa equipa</Text>
            <Spacer y={.5} />
            <Text size={'$lg'}>A nossa equipa é composta por membros experientes e dedicados, que trabalham diariamente para garantir que todos os jogadores têm a melhor experiência possível. Se tiveres alguma dúvida ou problema, não hesites em contactar-nos.</Text>
          </Col>
        </Row>
        <Grid.Container gap={4}>
          {
            staff.map((member, index) => (
              <Grid key={index} xs={12} sm={6} md={4} lg={2}>
                <Card isHoverable>
                  <Card.Image src={member.icon} objectFit='cover' width={'100%'} />
                  <Card.Body css={{ background: theme.theme?.colors.background.value }}>
                    <Text css={{ textAlign: 'center' }} size={'$lg'} weight='semibold'>{member.name}</Text>
                    <Text css={{ textAlign: 'center' }} size={'$sm'}>{member.role}</Text>
                  </Card.Body>
                </Card>
              </Grid>
            ))
          }
        </Grid.Container>
      </Container>

      <Footer />
    </>
  )
}
