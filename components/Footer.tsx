import { Link, Container, Row, Col, Text } from "@nextui-org/react";

export default function Footer() {
  return (
    <Container id='footer' css={{ marginBottom: '1.5rem' }}>
      <Row justify='center'>
        <Col>
          <Text css={{ textAlign: 'center' }} size={'$md'}>&copy; {new Date().getFullYear()} Los Angeles RP. Todos os direitos reservados</Text>
          <Text css={{ textAlign: 'center' }} size={'$md'}>Website por: <Link href='https://franciscoliveira.com/dev' target='_blank' color={'primary'}>franciscoliveira.com</Link> &bull; Servidor FiveM: <Link href='https://instagram.com/miguelsi24' target='_blank' color={'primary'}>@miguelsi24</Link></Text>
          <Text css={{ textAlign: 'center' }} size={'$sm'}>Los Angeles RP não é filiado ou endossado pela FiveM, Rockstar North, Take-Two Interactive ou outros titulares de direitos. Quaisquer marcas comerciais utilizadas pertencem aos seus respectivos proprietários.</Text>
        </Col>
      </Row>
    </Container>
  )
}