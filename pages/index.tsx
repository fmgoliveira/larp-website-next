import Head from 'next/head'
import { Button, Card, Col, Container, Image, Link, Row, Text, useTheme } from '@nextui-org/react';
import CustomNavbar from '@/components/Navbar';
import { BsArrowDownShort } from 'react-icons/bs';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';

export default function Home() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

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

      <Container css={{ margin: '6rem auto' }}>
        <Row gap={2}>
          <Col>
            <Card isHoverable isPressable onClick={() => setIsOpen(true)}>
              <Card.Image src="/assets/img/thumb.png" objectFit='cover' width={'100%'} />
            </Card>
          </Col>
          <Col>
            <Text size={'$2xl'} weight='semibold' id='sobre'>Quem somos?</Text>
            <Text size={'$lg'}>Somos uma comunidade apaixonada por roleplay no FiveM. Aqui, criamos histórias incríveis, exploramos personagens únicos e vivenciamos experiências imersivas. Trabalhamos juntos para criar um ambiente acolhedor, divertido e cheio de aventuras. Junte-se a nós e faça parte dessa incrível jornada virtual!</Text>
          </Col>
        </Row>
      </Container>
    </>
  )
}
