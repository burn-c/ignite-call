import { Heading, Text } from '@lucasjohann-ignite-ui/react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'
import { ClaimUsernameForm } from './components/ClaimUserNameForm'
import previewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
      />

      <Container>
        <Hero>
          <Heading size="4xl">Agendamento descomplicado</Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>

          <ClaimUsernameForm />
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
    </>
  )
}
