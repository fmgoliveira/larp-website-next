import { Button, Link, Navbar, Spacer, Container, Row, Col, styled } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsDiscord } from "react-icons/bs";

export default function CustomNavbar() {
  const [disableBlur, setDisableBlur] = useState(true);
  const router = useRouter();
  const Box = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
  })

  return (
    <Navbar variant={'sticky'} maxWidth={'fluid'} containerCss={{ w: "100vw", background: 'rgba(0,0,0,0) !important' }} disableShadow={disableBlur} disableBlur={disableBlur} onScrollPositionChange={(y) => y > 0 ? setDisableBlur(false) : setDisableBlur(true)}>
      <Box>
        <Navbar.Toggle showIn={'sm'} aria-label='toggle navigation' />
        <Navbar.Brand>
          <Image src={'/assets/img/brand/icon.png'} height={76} width={76} alt={'Los Angeles RP'} />
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn={'sm'} activeColor={'primary'} css={{ background: 'rgba(0,0,0,0) !important' }}>
          <Navbar.Link isActive={router.pathname === '/'} href='/'>Home</Navbar.Link>
          <Navbar.Link isActive={router.pathname === '/regras'} href='/regras'>Forums</Navbar.Link>
          <Navbar.Link isActive={router.pathname === '/candidaturas'} href='/candidaturas'>Candidaturas</Navbar.Link>
          <Navbar.Link isActive={router.pathname === '/streamers'} href='/streamers'>Streamers</Navbar.Link>
          <Navbar.Link isActive={router.pathname === '/atualizacoes'} href='/atualizacoes'>Atualizações</Navbar.Link>
          <Navbar.Link isActive={router.pathname === '/faq'} href='/faq'>FAQ</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content enableCursorHighlight activeColor={'primary'} hideIn={'sm'}>
          <Navbar.Link href='/discord'><BsDiscord /></Navbar.Link>
          <Spacer x={.5} />
          <Button auto as={Link} href='/discord' color={'primary'}>Jogar</Button>
        </Navbar.Content>
        <Navbar.Content enableCursorHighlight activeColor={'primary'} showIn={'sm'}>
          <Navbar.Link href='/discord'><BsDiscord /></Navbar.Link>
        </Navbar.Content>

        <Navbar.Collapse disableBlur>
          <Navbar.CollapseItem><Link color={router.pathname === '/' ? 'primary' : 'inherit'} href={'/'}>Home</Link></Navbar.CollapseItem>
          <Navbar.CollapseItem><Link color={router.pathname === '/regras' ? 'primary' : 'inherit'} href={'/regras'}>Regras</Link></Navbar.CollapseItem>
          <Navbar.CollapseItem><Link color={router.pathname === '/candidaturas' ? 'primary' : 'inherit'} href={'/candidaturas'}>Candidaturas</Link></Navbar.CollapseItem>
          <Navbar.CollapseItem><Link color={router.pathname === '/streamers' ? 'primary' : 'inherit'} href={'/streamers'}>Streamers</Link></Navbar.CollapseItem>
          <Navbar.CollapseItem><Link color={router.pathname === '/atualizacoes' ? 'primary' : 'inherit'} href={'/atualizacoes'}>Atualizações</Link></Navbar.CollapseItem>
          <Navbar.CollapseItem><Link color={router.pathname === '/faq' ? 'primary' : 'inherit'} href={'/faq'}>FAQ</Link></Navbar.CollapseItem>
          <Spacer y={1} />
          <Navbar.CollapseItem><Link color={'inherit'} href={'/discord'}>Discord</Link></Navbar.CollapseItem>
          <Spacer y={1} />
          <Navbar.CollapseItem>
            <Button auto as={Link} href='/discord' color={'primary'}>Jogar</Button>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Box>
    </Navbar>
  )
}