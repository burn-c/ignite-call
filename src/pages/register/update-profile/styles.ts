import { Box, Text, TextArea, styled } from '@lucasjohann-ignite-ui/react'

export const ProfileBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})

export const FormAnnotation = styled(Text, {
  color: '$gray200',

  variants: {
    hasError: {
      true: {
        color: '#F75A68',
      },
    },
  },
})

export const BioTextArea = styled(TextArea, {
  resize: 'none',
})
