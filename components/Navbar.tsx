import { Button, Link, Navbar, Spacer, Container, Row, Col, styled, Dropdown, Modal, Text } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsDiscord } from "react-icons/bs";

export default function CustomNavbar() {
  const [disableBlur, setDisableBlur] = useState(true);
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
    <Navbar variant={'sticky'} maxWidth={'fluid'} containerCss={{ w: "100vw", background: 'rgba(0,0,0,0) !important' }} disableShadow={disableBlur} disableBlur={disableBlur} onScrollPositionChange={(y) => y > 0 ? setDisableBlur(false) : setDisableBlur(true)}>
      <Box>
        <Navbar.Toggle showIn={'sm'} aria-label='toggle navigation' />
        <Navbar.Brand>
          <Image src={'/assets/img/brand/icon.png'} height={76} width={76} alt={'Los Angeles RP'} />
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn={'sm'} activeColor={'primary'} css={{ background: 'rgba(0,0,0,0) !important' }}>
          <Navbar.Link isActive={router.pathname === '/'} href='/'>Home</Navbar.Link>
          <Dropdown>
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
          </Dropdown>
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

      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={() => setVisible(false)}
        css={{ padding: '2rem 0', background: '#1e1f22' }}
      >
        <Modal.Header>
          <Text id="modal-title" size={'$2xl'} weight={'semibold'} color='primary'>Atalhos de Teclas</Text>
          {/* <Spacer y={1} /> */}
        </Modal.Header>
        <Modal.Body>
          <Text size={'md'}><b>F1</b> - Aceder ao telemóvel</Text>
          <Text size={'md'}><b>F2</b> - Aceder ao inventário / Aceder ao Porta Luvas</Text>
          <Text size={'md'}><b>F3</b> - Aceder ao menu de animações extra</Text>
          <Text size={'md'}><b>F5</b> - Aceder à rádio</Text>
          <Text size={'md'}><b>F6</b> - Aceder ao menu de interação de organização</Text>
          <Text size={'md'}><b>F7</b> - Aceder às faturas</Text>
          <Text size={'md'}><b>F10</b> - Scoreboard / Quantidade de jogadores no servidor</Text>
          <Text size={'md'}><b>H</b> - Alterar o tipo de voz (Sussurrar/Normal/Gritar)</Text>
          <Text size={'md'}><b>Shift + E</b> - Empurrar um Veículo</Text>
          <Text size={'md'}><b>X</b> - Animação de levantar as mãos</Text>
          <Text size={'md'}><b>B</b> - Animação de apontar o dedo</Text>
          <Text size={'md'}><b>G</b> - Animação de cruzar os braços</Text>
          <Text size={'md'}><b>Z</b> - Animação de desmaiar</Text>
          <Text size={'md'}><b>Ctrl</b> - Animação de agachar</Text>
          <Text size={'md'}><b>M</b> - Menu de opções do veículo</Text>
          <Text size={'md'}><b>Y</b> - Aceder à mala do veículo / Limitador de Velocidade</Text>
          <Text size={'md'}><b>U</b> - Trancar/Destrancar veículo</Text>
          <Text size={'md'}><b>L</b> - Aceder ao menu da roupa do personagem</Text>
        </Modal.Body>
      </Modal>
    </Navbar>
  )
}