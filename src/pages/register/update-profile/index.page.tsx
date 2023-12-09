import {
  Avatar,
  Button,
  Heading,
  MultiStep,
  Text,
} from '@lucasjohann-ignite-ui/react'
import { z } from 'zod'
import { NextSeo } from 'next-seo'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { useForm } from 'react-hook-form'
import { ArrowRight } from 'phosphor-react'
import { useSession } from 'next-auth/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Container, Header } from '../styles'
import { BioTextArea, FormAnnotation, ProfileBox } from './styles'
import { buildNextAuthOptions } from '../../api/auth/[...nextauth].api'
import { api } from '@/src/lib/axios'
import { useRouter } from 'next/navigation'

const updateProfileSchema = z.object({
  bio: z.string().min(3, {
    message: 'Sua bio não pode estar em branco!',
  }),
})

type UpdateProfileData = z.infer<typeof updateProfileSchema>

export default function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileSchema),
  })

  const session = useSession()
  const router = useRouter()

  async function handleUpdateProfile(data: UpdateProfileData) {
    await api.put('/users/profile', {
      bio: data.bio,
    })

    await router.push(`/schedule/${session.data?.user.username}`)
  }

  return (
    <>
      <NextSeo title="Atualize seu perfil | Ignite Call" noindex />

      <Container>
        <Header>
          <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
          <Text>
            Precisamos de algumas informações para criar seu perfil! Ah, você
            pode editar essas informações depois.
          </Text>

          <MultiStep size={4} currentStep={4} />
        </Header>

        <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
          <label>
            <Text size={'sm'}>Foto de perfil</Text>
            <Avatar
              src={session.data?.user.avatar_url}
              alt={session.data?.user.name}
            />
          </label>

          <label>
            <Text size="sm">Sobre você</Text>
            <BioTextArea {...register('bio')} />
            <FormAnnotation size={'sm'} hasError={!!errors.bio}>
              {errors.bio
                ? errors.bio.message
                : 'Fale um pouco sobre você. Isto será exibido em sua página pessoal.'}
            </FormAnnotation>
          </label>

          <Button type="submit" disabled={isSubmitting}>
            Finalizar
            <ArrowRight />
          </Button>
        </ProfileBox>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  return {
    props: { session },
  }
}
