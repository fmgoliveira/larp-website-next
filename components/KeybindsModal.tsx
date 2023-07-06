import { Text, Modal } from "@nextui-org/react";

export default function KeybindsModal({ visible, setVisible }: { visible: boolean, setVisible: Function }) {
  return (
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
  )
}