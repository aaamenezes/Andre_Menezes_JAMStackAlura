import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Title from '../../title'
import Container from '../../common/container'
import LinkButton from '../../common/linkButton'
import Text from '../../text'

const RepositoryItem = styled.li`
  margin-bottom: 20px;
`

export default function GithubRepositories({ githubRepositories }) {
  const invalidRepositories = [
    'aaamenezes', 'instalura-base'
  ]

  const respositoriesElements = githubRepositories.map(repository => {
    const isRespositoryValid = invalidRepositories
      .map(invalid => invalid !== repository.name)
      .reduce((current, total) => current && total)

    const repositoryName = repository.name
      .split('-').join(' ')
      .split('_').join(' ')

    if (isRespositoryValid) {
      return (
        <RepositoryItem key={repository.name}>
          <Title titleTag='h3'>
            <LinkButton href={repository.svn_url} external inline>
              {repositoryName}
            </LinkButton>
          </Title>
          <Text>{repository.description || repositoryName}</Text>
        </RepositoryItem>
      )
    }

    return undefined
  })

  return (
    <Container as='section'>
      <Title>Meus Repositórios</Title>
      <ul>
        {respositoriesElements}
      </ul>
    </Container>
  )
}

GithubRepositories.propTypes = {
  githubRepositories: PropTypes.arrayOf(PropTypes.object).isRequired
}
