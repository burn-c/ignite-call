import { Heading, Text } from '@lucasjohann-ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          quality={100}
          height={400}
          priority
          alt="calendário simbolizando a aplicação em funcionamento"
        />
      </Preview>
    </Container>
  )
}
