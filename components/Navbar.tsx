import { Button, Link, Navbar, Spacer, Container, Row, Col, styled, Dropdown, Modal, Text } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsDiscord } from "react-icons/bs";
import KeybindsModal from "./KeybindsModal";

export default function CustomNavbar() {
  const [disableBlur, setDisableBlur] = useState(true);
  const [menuOpened, setMenuOpened] = useState(false);
  const [visible, setVisible] = useState(false);
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
    <>
      <KeybindsModal visible={visible} setVisible={setVisible} />
      <Navbar variant={'sticky'} maxWidth={'fluid'} containerCss={{ w: "100vw", background: `${!menuOpened ? 'rgba(0,0,0,0)' : '$background'} !important` }} disableShadow={disableBlur} disableBlur={disableBlur} onScrollPositionChange={(y) => y > 0 ? setDisableBlur(false) : setDisableBlur(true)}>
        <Box>
          <Navbar.Toggle showIn={'sm'} aria-label='toggle navigation' />
          <Navbar.Brand>
            <Image src={'/assets/img/brand/icon.png'} height={76} width={76} alt={'Los Angeles RP'} />
          </Navbar.Brand>
          <Navbar.Content enableCursorHighlight hideIn={'sm'} activeColor={'primary'} css={{ background: 'rgba(0,0,0,0) !important' }}>
            <Navbar.Link isActive={router.pathname === '/'} href='/'>Home</Navbar.Link>
            {/* <Dropdown>
              <Navbar.Item><Dropdown.Button auto light css={{ px: 0, dflex: "center", svg: { pe: "none" } }} iconRight={
                <svg fill="none" height={16} viewBox="0 0 24 24" width={16} xmlns="http://www.w3.org/2000/svg"><path d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95" stroke={'currentColor'} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} /></svg>
              } ripple={false}>Ingame</Dropdown.Button></Navbar.Item>
              <Dropdown.Menu
                aria-label="Ingame"
                css={{
                  $$dropdownMenuWidth: "340px",
                  $$dropdownItemHeight: "70px",
                  background: "#1e1f22",
                  backdropFilter: "blur(20px)",
                  "& .nextui-dropdown-item": {
                    py: "$4",
                    // dropdown item left icon
                    svg: {
                      color: "$secondary",
                      mr: "$4",
                    },
                    // dropdown item title
                    "& .nextui-dropdown-item-content": {
                      w: "100%",
                      fontWeight: "$semibold",
                    },
                  },
                }}
              >
                <Dropdown.Item>
                  <Navbar.Link isActive={router.pathname === '/regras'} href='/regras'>Regras</Navbar.Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Navbar.Link isActive={router.pathname === '/precario'} href='/regras'>Preçário</Navbar.Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Navbar.Link onClick={() => setVisible(true)}>Atalhos de Teclas</Navbar.Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            <Navbar.Link isActive={router.pathname === '/regras'} href='/regras'>Regras</Navbar.Link>
            <Navbar.Link isActive={router.pathname === '/precario'} href='/precario'>Preçário</Navbar.Link>
            <Navbar.Link onClick={() => setVisible(true)}>Atalhos de Teclas</Navbar.Link>
            {/* <Navbar.Link isActive={router.pathname === '/candidaturas'} href='/candidaturas'>Candidaturas</Navbar.Link> */}
            {/* <Navbar.Link isActive={router.pathname === '/streamers'} href='/streamers'>Streamers</Navbar.Link> */}
            {/* <Navbar.Link isActive={router.pathname === '/atualizacoes'} href='/atualizacoes'>Atualizações</Navbar.Link> */}
            {/* <Navbar.Link isActive={router.pathname === '/faq'} href='/faq'>FAQ</Navbar.Link> */}
          </Navbar.Content>
          <Navbar.Content enableCursorHighlight activeColor={'primary'} hideIn={'sm'}>
            <Navbar.Link href='/discord'><BsDiscord /></Navbar.Link>
            <Spacer x={.5} />
            <Button auto as={Link} href='/discord' color={'primary'}>Jogar</Button>
          </Navbar.Content>
          <Navbar.Content enableCursorHighlight activeColor={'primary'} showIn={'sm'}>
            <Navbar.Link href='/discord'><BsDiscord /></Navbar.Link>
          </Navbar.Content>

          <Navbar.Collapse disableBlur css={{
            marginTop: '-76px',
            zIndex: -1,
            paddingTop: '76px',
          }}>
            <Navbar.CollapseItem><Link color={router.pathname === '/' ? 'primary' : 'inherit'} href={'/'}>Home</Link></Navbar.CollapseItem>
            <Navbar.CollapseItem><Link color={router.pathname === '/regras' ? 'primary' : 'inherit'} href={'/regras'}>Regras</Link></Navbar.CollapseItem>
            <Navbar.CollapseItem><Link color={router.pathname === '/precario' ? 'primary' : 'inherit'} href={'/precario'}>Preçário</Link></Navbar.CollapseItem>
            <Navbar.CollapseItem color={'inherit'} onClick={() => setVisible(true)}>Atalhos de Teclas</Navbar.CollapseItem>
            {/* <Navbar.CollapseItem><Link color={router.pathname === '/candidaturas' ? 'primary' : 'inherit'} href={'/candidaturas'}>Candidaturas</Link></Navbar.CollapseItem> */}
            {/* <Navbar.CollapseItem><Link color={router.pathname === '/streamers' ? 'primary' : 'inherit'} href={'/streamers'}>Streamers</Link></Navbar.CollapseItem> */}
            {/* <Navbar.CollapseItem><Link color={router.pathname === '/atualizacoes' ? 'primary' : 'inherit'} href={'/atualizacoes'}>Atualizações</Link></Navbar.CollapseItem> */}
            {/* <Navbar.CollapseItem><Link color={router.pathname === '/faq' ? 'primary' : 'inherit'} href={'/faq'}>FAQ</Link></Navbar.CollapseItem> */}
            <Spacer y={1} />
            <Navbar.CollapseItem><Link color={'inherit'} href={'/discord'}>Discord</Link></Navbar.CollapseItem>
            <Spacer y={1} />
            <Navbar.CollapseItem>
              <Button auto as={Link} href='/discord' color={'primary'}>Jogar</Button>
            </Navbar.CollapseItem>
          </Navbar.Collapse>
        </Box>
      </Navbar>
    </>
  )
}