import React from 'react'
import { injectGlobal } from 'styled-components'
import Layout from '../src/Layout'

injectGlobal`
  html, body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`

const FakeLogin = () => <Layout bg='#4387fd' height='30px' width='90px' />
const FakeSquareButton = () => (
  <Layout bg='#757575' height='24px' width='24px' />
)
const FakeLink = () => <Layout bg='#757575' height='24px' width='48px' />
const FakeLongLink = () => <Layout bg='#757575' height='24px' width='110px' />
const FakeLongerText = () => <Layout bg='#757575' height='24px' width='180px' />
const FakeInput = () => <Layout bg='#757575' height='44px' width='600px' />
const FakeButton = () => <Layout bg='#f2f2f2' height='34px' width='120px' />

export default () => (
  <Layout height='100vh'>
    <Layout
      flow='left-right'
      xAlign='right'
      yAlign='center'
      pr='30px'
      pt='16px'
      spaceBetweenChildren='24px'
    >
      <FakeLink />
      <FakeLink />
      <FakeSquareButton />
      <FakeLogin />
    </Layout>
    <Layout
      height='remaining'
      xAlign='center'
      yAlign='center'
      spaceBetweenChildren='32px'
    >
      <img
        height='92px'
        width='272px'
        src='https://www.google.fr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
      />
      <FakeInput />
      <Layout flow='left-right' spaceBetweenChildren='8px' xAlign='center'>
        <FakeButton />
        <FakeButton />
      </Layout>
      <FakeLongerText />
    </Layout>
    <Layout bg='#f2f2f2' height='40px' pl='30px' yAlign='center'>
      <FakeLink />
    </Layout>
    <Layout
      flow='left-right'
      bg='#f2f2f2'
      height='40px'
      px='30px'
      yAlign='center'
      spaceBetweenChildren='remaining'
    >
      <Layout flow='left-right' spaceBetweenChildren='24px'>
        <FakeLink />
        <FakeLink />
        <FakeLink />
      </Layout>
      <Layout flow='left-right' spaceBetweenChildren='24px'>
        <FakeLongLink />
        <FakeLongLink />
        <FakeLongLink />
        <FakeLongLink />
      </Layout>
    </Layout>
  </Layout>
)
