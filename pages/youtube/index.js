import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import is from 'styled-is'
import styledMap from 'styled-map'
import Layout from '../../src/Layout'
import PrivacyIcon from './PrivacyIcon'
import YoutubeLogo from './YoutubeLogo'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
`

const Text = styled.div`
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;

  color: ${styledMap('color', {
    grey: 'rgba(17, 17, 17, 0.4)',
    red: 'red',
    default: '#111'
  })};

  ${is('uppercase')`
    text-transform: uppercase;
  `};

  ${is('bold')`
    font-weight: 500;
  `};
`

const Icon = styled(({ name, ...rest }) => <i {...rest}>{name}</i>).attrs({
  className: 'material-icons'
})`
  color: rgba(17, 17, 17, 0.4);
`

const FakeInput = () => <Layout height='32px' bg='rgba(17, 17, 17, 0.4)' />

export default () => (
  <Layout height='100vh'>
    <Layout
      flow='left-right'
      height='56px'
      bb='1px solid #eee'
      spaceBetweenChildren='remaining'
      pl='16px'
      pr='32px'
    >
      <Layout
        flow='left-right'
        height='100%'
        spaceBetweenChildren='16px'
        yAlign='center'
      >
        <PrivacyIcon />
        <Text>A privacy reminder from YouTube, a Google company</Text>
      </Layout>
      <Layout
        flow='left-right'
        height='100%'
        spaceBetweenChildren='32px'
        yAlign='center'
      >
        <Text bold color='grey' uppercase>
          Remind me later
        </Text>
        <Text bold color='red' uppercase>
          Review
        </Text>
      </Layout>
    </Layout>
    <Layout flow='left-right' height='56px' yAlign='center'>
      <Layout
        flow='left-right'
        pl='16px'
        spaceBetweenChildren='16px'
        width='240px'
      >
        <Icon name='menu' />
        <YoutubeLogo />
      </Layout>
      <Layout width='remaining' pr='48px'>
        <Layout height='32px' maxWidth='656px'>
          <FakeInput />
        </Layout>
      </Layout>
      <Layout
        flow='left-right'
        pr='32px'
        spaceBetweenChildren='remaining'
        width='232px'
      >
        <Icon name='video_call' />
        <Icon name='apps' />
        <Icon name='more_vert' />
        <Text bold color='red' uppercase>
          Sign In
        </Text>
      </Layout>
    </Layout>
  </Layout>
)
